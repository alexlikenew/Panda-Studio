// scripts/importVouchers.js
const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// 1. Konfiguracja środowiska
dotenv.config({ path: '.env.local' });

// 2. Konfiguracja klienta Sanity
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_WRITE_TOKEN,
});

async function importVouchers() {
    console.log('🚀 Rozpoczynam procedurę importu voucherów...');

    // 3. Weryfikacja tokenu
    if (!process.env.SANITY_API_WRITE_TOKEN) {
        console.error('❌ BŁĄD: Brak tokenu zapisu w .env.local');
        process.exit(1);
    }

    // 4. Wczytanie pliku JSON
    const dataPath = path.join(__dirname, '../data/voucher-data.json');

    try {
        const rawData = fs.readFileSync(dataPath, 'utf8');
        const vouchers = JSON.parse(rawData);

        console.log(`📂 Znaleziono plik danych: ${vouchers.length} voucherów do przetworzenia.`);

        // 5. Pętla importująca
        for (const voucher of vouchers) {
            try {
                let imageAssetId = null;

                // Upload zdjęcia jeśli zdefiniowane
                if (voucher.localImagePath) {
                    const imagePath = path.resolve(process.cwd(), voucher.localImagePath);

                    if (fs.existsSync(imagePath)) {
                        console.log(`Uploading image for ${voucher.title}...`);
                        const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
                            filename: path.basename(imagePath)
                        });
                        imageAssetId = imageAsset._id;
                        console.log(`Image uploaded: ${imageAssetId}`);
                    } else {
                        console.warn(`⚠️ Obraz nie znaleziony: ${imagePath}`);
                    }
                }

                // Przygotowanie dokumentu z _id
                const doc = {
                    _id: voucher.slug.current, // Deterministic ID based on slug
                    ...voucher,
                    image: imageAssetId ? {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAssetId
                        }
                    } : undefined
                };

                // Usuwamy pole pomocnicze
                delete doc.localImagePath;

                // Używamy createOrReplace aby móc aktualizować istniejące vouchery
                const result = await client.createOrReplace(doc);
                console.log(`✅ Sukces: Utworzono/Zaktualizowano voucher "${result.title}" (ID: ${result._id})`);

            } catch (err) {
                console.error(`❌ Błąd przy voucherze "${voucher.title}":`, err.message);
            }
        }

        console.log('🏁 Import zakończony pomyślnie.');

    } catch (error) {
        console.error('❌ BŁĄD KRYTYCZNY:', error);
    }
}

importVouchers();