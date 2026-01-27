const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Ładujemy zmienne środowiskowe
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

// --- KONFIGURACJA ---
const WRITE_TOKEN = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN;

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: WRITE_TOKEN,
    useCdn: false,
    apiVersion: '2024-01-01',
});

const dataPath = path.join(__dirname, '../data/author-data.json');

async function updateAuthorBio() {
    try {
        console.log('🔍 Szukam pliku danych:', dataPath);

        if (!fs.existsSync(dataPath)) {
            console.error('❌ Błąd: Nie znaleziono pliku scripts/data/author-data.json!');
            return;
        }

        const rawData = fs.readFileSync(dataPath, 'utf8');
        const authorData = JSON.parse(rawData); // Tu jest obiekt { name: "Ivan", bio: [...] }

        console.log(`🚀 Rozpoczynam aktualizację BIO dla autora: ${authorData.name}`);

        // 1. Znajdź autora po imieniu (lub slug)
        // Zakładamy, że pole w Sanity to 'name'.
        const query = `*[_type == "author" && name == $name][0]._id`;
        const authorId = await client.fetch(query, { name: authorData.name });

        if (!authorId) {
            console.error(`❌ Błąd: Nie znaleziono autora o imieniu "${authorData.name}" w bazie Sanity.`);
            console.log('   Upewnij się, że w Sanity Studio autor nazywa się dokładnie "Ivan".');
            return;
        }

        console.log(`✅ Znaleziono autora (ID: ${authorId}). Aktualizuję pole BIO...`);

        // 2. Wykonaj PATCH (tylko aktualizacja pola bio)
        await client
            .patch(authorId)
            .set({ bio: authorData.bio })
            .commit();

        console.log(`🎉 Sukces! Bio dla "${authorData.name}" zostało zaktualizowane.`);

    } catch (error) {
        console.error('❌ Wystąpił błąd podczas aktualizacji:', error.message);
    }
}

updateAuthorBio();