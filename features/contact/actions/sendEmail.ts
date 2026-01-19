"use server";

import { contactSchema, ContactFormState } from "../schema/contactSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };

    const validatedFields = contactSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Proszę poprawić błędy w formularzu.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, phone, subject, message } = validatedFields.data;

    try {
        const { data, error } = await resend.emails.send({
            from: "Panda Studio <formularz@pandastudioteam.com>",
            to: [process.env.CONTACT_EMAIL_TO as string],
            replyTo: email,
            subject: `Nowa wiadomość: ${subject}`,
            html: `
                <h3>Nowa wiadomość z formularza kontaktowego</h3>
                <p><strong>Imię:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <br/>
                <p><strong>Temat:</strong> ${subject}</p>
                <p><strong>Wiadomość:</strong></p>
                <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return { success: false, message: "Błąd wysyłki e-maila." };
        }

        return {
            success: true,
            message: "Wiadomość została wysłana pomyślnie!",
            errors: {},
        };
    } catch (error) {
        console.error("Server Action Error:", error);
        return { success: false, message: "Wystąpił błąd serwera." };
    }
}
