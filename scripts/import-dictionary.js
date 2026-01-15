const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Ładujemy zmienne środowiskowe z pliku .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// KONFIGURACJA
// Jeśli nie masz tokenu w .env.local jako SANITY_WRITE_TOKEN,
// możesz go tymczasowo wkleić tutaj zamiast process.env...
const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN || 'TUTAJ_WKLEJ_TOKEN_JESLI_NIE_MASZ_W_ENV';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: WRITE_TOKEN,
    useCdn: false, // Musi być false przy zapisie
    apiVersion: '2024-01-01',
});

// Wczytanie danych
const dataPath = path.join(__dirname, 'data.json');

async function importData() {
    try {
        if (!fs.existsSync(dataPath)) {
            console.error('❌ Błąd: Nie znaleziono pliku scripts/data.json!');
            return;
        }

        const rawData = fs.readFileSync(dataPath, 'utf8');
        const posts = JSON.parse(rawData);

        console.log(`🚀 Rozpoczynam import ${posts.length} wpisów do Bazy Wiedzy...`);

        for (const [index, post] of posts.entries()) {
            console.log(`⏳ Przetwarzanie ${index + 1}/${posts.length}: ${post.title}`);

            // Tworzymy dokument
            const doc = {
                _type: 'knowledgeBase', // Zgodnie z Twoim schematem
                title: post.title,
                slug: post.slug, // Obiekt { current: "..." }
                excerpt: post.excerpt,
                content: post.content, // Tablica bloków PortableText
                faq: post.faq,
                tags: post.tags,
                relatedServices: post.relatedServices,
                publishedAt: post.publishedAt || new Date().toISOString(),
            };

            // Wysyłka do Sanity
            await client.create(doc);
            console.log(`✅ Utworzono: ${post.title}`);
        }

        console.log('🎉 Zakończono! Wszystkie wpisy zostały zaimportowane.');

    } catch (error) {
        console.error('❌ Wystąpił błąd podczas importu:', error.message);
    }
}

importData();