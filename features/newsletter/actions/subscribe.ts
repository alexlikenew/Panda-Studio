'use server';

import { Resend } from 'resend';
import { newsletterSchema, NewsletterInputs } from '../schema/newsletterSchema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(data: NewsletterInputs) {
    const result = newsletterSchema.safeParse(data);

    if (!result.success) {
        return { success: false, message: 'Nieprawidłowy adres e-mail.' };
    }

    const email = result.data.email;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!audienceId) {
        console.error("Missing RESEND_AUDIENCE_ID");
        return { success: false, message: 'Błąd konfiguracji serwera.' };
    }

    try {
        // 1. Add to Audience (Database)
        const { error: contactError } = await resend.contacts.create({
            email: email,
            audienceId: audienceId,
            unsubscribed: false,
        });

        if (contactError) {
            console.error("Resend Contact Error:", contactError);
            return { success: false, message: 'Wystąpił błąd podczas zapisu lub adres już istnieje.' };
        }

        // 2. Send Welcome Email
        await resend.emails.send({
            from: 'Panda Studio Team <kontakt@pandastudioteam.com>',
            to: email,
            subject: 'Witaj w stadzie! 🐼 Odbierz dawkę wiedzy.',
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h1>Cześć! 👋</h1>
                    <p>Dziękujemy za zapisanie się do newslettera <strong>Panda Studio Team</strong>.</p>
                    <p>Od teraz będziesz otrzymywać od nas:</p>
                    <ul>
                        <li>Porady treningowe i dietetyczne</li>
                        <li>Informacje o zniżkach na masaż</li>
                        <li>Newsy z życia studia</li>
                    </ul>
                    <p>Do zobaczenia na treningu lub masażu!</p>
                    <hr />
                    <p style="font-size: 12px; color: #666;">Panda Studio Team Rzeszów</p>
                </div>
            `
        });

        return { success: true, message: 'Dziękujemy! Sprawdź swoją skrzynkę mailową.' };

    } catch (error) {
        console.error("Subscription Error:", error);
        return { success: false, message: 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.' };
    }
}
