const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// 1. Config
dotenv.config({ path: '.env.local' });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_WRITE_TOKEN,
});

async function initVoucherPage() {
    console.log('🚀 Initializing Voucher Page Singleton...');

    if (!process.env.SANITY_API_WRITE_TOKEN) {
        console.error('❌ ERROR: Missing SANITY_API_WRITE_TOKEN in .env.local');
        process.exit(1);
    }

    const frontPath = path.join(process.cwd(), 'public/img/vouchers/voucher_front.png');
    const backPath = path.join(process.cwd(), 'public/img/vouchers/voucher_back.png');

    try {
        let frontAssetId = null;
        let backAssetId = null;

        // Upload Front
        if (fs.existsSync(frontPath)) {
            console.log('Uploading Front Image...');
            const frontAsset = await client.assets.upload('image', fs.createReadStream(frontPath), {
                filename: 'voucher_front.png'
            });
            frontAssetId = frontAsset._id;
            console.log(`✅ Front Image Uploaded: ${frontAssetId}`);
        } else {
            console.error(`❌ Front Image not found at: ${frontPath}`);
        }

        // Upload Back
        if (fs.existsSync(backPath)) {
            console.log('Uploading Back Image...');
            const backAsset = await client.assets.upload('image', fs.createReadStream(backPath), {
                filename: 'voucher_back.png'
            });
            backAssetId = backAsset._id;
            console.log(`✅ Back Image Uploaded: ${backAssetId}`);
        } else {
            console.error(`❌ Back Image not found at: ${backPath}`);
        }

        // Create Singleton
        const doc = {
            _id: 'voucherPage',
            _type: 'voucherPage',
            title: 'Voucher prezentowy na masaż',
            description: 'Podaruj bliskiej osobie chwilę relaksu i regeneracji. Voucher do Panda Studio to idealny prezent, który łączy luksusową pielęgnację z głębokim odprężeniem. Dostępny w eleganckiej formie fizycznej.',
            phoneNumber: '694 906 749',
            infoParams: [
                'Czas trwania: 60 / 90 / 120 min',
                'Ważność: 2 miesiące od zakupu',
                'Wybór dowolnego masażu z oferty',
                'Odbiór osobisty (płatność gotówką)'
            ],
            imageFront: frontAssetId ? {
                _type: 'image',
                asset: { _type: 'reference', _ref: frontAssetId }
            } : undefined,
            imageBack: backAssetId ? {
                _type: 'image',
                asset: { _type: 'reference', _ref: backAssetId }
            } : undefined
        };

        const result = await client.createOrReplace(doc);
        console.log(`🎉 SUCCESS: Voucher Page Singleton created/updated!`);
        console.log(`ID: ${result._id}`);
        console.log(`Title: ${result.title}`);

    } catch (error) {
        console.error('❌ CRITICAL ERROR:', error.message);
    }
}

initVoucherPage();
