const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Ładujemy zmienne środowiskowe z pliku .env.local (o jeden poziom wyżej niż scripts)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// --- KONFIGURACJA ---
// Upewnij się, że masz token z uprawnieniami do zapisu w .env.local
const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN;
// --------------------

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: WRITE_TOKEN,
    useCdn: false,
    apiVersion: '2024-01-01',
});

const dataPath = path.join(__dirname, 'pricing-data.json');

async function importPricing() {
    try {
        if (!fs.existsSync(dataPath)) {
            console.error('❌ Błąd: Nie znaleziono pliku scripts/pricing-data.json!');
            return;
        }

        const rawData = fs.readFileSync(dataPath, 'utf8');
        const categories = JSON.parse(rawData);

        console.log(`🚀 Rozpoczynam import ${categories.length} kategorii cennika...`);

        for (const category of categories) {
            console.log(`⏳ Przetwarzanie: ${category.title}`);

            const doc = {
                _type: 'pricingCategory', // Musi zgadzać się z nazwą w schema (pricing.ts)
                title: category.title,
                subtitle: category.subtitle,
                type: category.type, // 'training' lub 'massage'
                bookingUrl: category.bookingUrl, // Opcjonalne (tylko dla masażu)

                // Generowanie kluczy (_key) dla tablicy packages jest wymagane przez Sanity
                packages: category.packages.map((pkg, index) => ({
                    _key: `pkg_${index}_${Date.now()}`,
                    _type: 'object', // To jest zazwyczaj 'object' lub nazwa typu obiektu zdefiniowanego w schema
                    name: pkg.name,
                    price: pkg.price,
                    features: pkg.features || [],
                    isPopular: pkg.isPopular || false
                }))
            };

            // Tworzymy nowy dokument
            await client.create(doc);
            console.log(`✅ Utworzono kategorię: ${category.title}`);
        }

        console.log('🎉 Zakończono! Cennik został zaktualizowany.');

    } catch (error) {
        console.error('❌ Wystąpił błąd podczas importu:', error.message);
    }
}

importPricing();