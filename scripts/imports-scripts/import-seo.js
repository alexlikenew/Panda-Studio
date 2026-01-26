const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: process.env.SANITY_API_WRITE_TOKEN,
    apiVersion: '2024-01-01',
    useCdn: false,
});

const importSeoData = async () => {
    try {
        const dataPath = path.join(__dirname, '../data/seo-data.json');
        const rawData = fs.readFileSync(dataPath, 'utf8');
        const seoDocuments = JSON.parse(rawData);

        console.log(`🚀 Rozpoczynam import ${seoDocuments.length} dokumentów SEO...`);

        const transaction = client.transaction();

        seoDocuments.forEach((doc) => {
            // Używamy createOrReplace, aby móc wielokrotnie uruchamiać skrypt bez duplikatów
            // Generujemy deterministyczne ID na podstawie sluga
            const docId = `seoSection-${doc.slug.current}`;

            transaction.createOrReplace({
                _id: docId,
                ...doc
            });
        });

        await transaction.commit();
        console.log('✅ Import zakończony sukcesem!');

    } catch (error) {
        console.error('❌ Błąd podczas importu:', error.message);
    }
};

importSeoData();