const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Ładujemy zmienne środowiskowe
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// --- KONFIGURACJA ---
// 1. Token zapisu (jeśli nie ma w .env, wklej tu tymczasowo)
const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN;

// 2. ID Autora (Opcjonalne - weź z Sanity Studio jeśli chcesz przypisać posty)
// np. 'drafts.7382-2382-...' lub opublikowany ID.
const AUTHOR_ID = null;

// 3. ID Kategorii (Opcjonalne - np. ID kategorii "Porady")
const CATEGORY_ID = null;
// --------------------

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: WRITE_TOKEN,
    useCdn: false,
    apiVersion: '2024-01-01',
});

const dataPath = path.join(__dirname, 'blog-data.json');

async function importBlog() {
    try {
        if (!fs.existsSync(dataPath)) {
            console.error('❌ Błąd: Nie znaleziono pliku scripts/blog-data.json!');
            return;
        }

        const rawData = fs.readFileSync(dataPath, 'utf8');
        const posts = JSON.parse(rawData);

        console.log(`🚀 Rozpoczynam import ${posts.length} artykułów blogowych...`);

        for (const [index, post] of posts.entries()) {
            console.log(`⏳ Przetwarzanie ${index + 1}/${posts.length}: ${post.title}`);

            const doc = {
                _type: 'blog', // Upewnij się, że w schema nazwa to 'blog' (lub 'post')
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                body: post.body, // Portable Text
                tags: post.tags,
                faq: post.faq,
                relatedServices: post.relatedServices,
                publishedAt: post.publishedAt || new Date().toISOString(),

                // Przypisanie autora (jeśli podano ID)
                author: AUTHOR_ID ? {
                    _type: 'reference',
                    _ref: AUTHOR_ID
                } : undefined,

                // Przypisanie kategorii (jeśli podano ID)
                categories: CATEGORY_ID ? [
                    {
                        _type: 'reference',
                        _ref: CATEGORY_ID,
                        _key: `cat_${index}` // Unikalny klucz w tablicy
                    }
                ] : []
            };

            await client.create(doc);
            console.log(`✅ Utworzono: ${post.title}`);
        }

        console.log('🎉 Zakończono! Blog został zasilony treścią.');

    } catch (error) {
        console.error('❌ Wystąpił błąd podczas importu:', error.message);
    }
}

importBlog();