"use server";

import { contactSchema, ContactFormState } from "../schema/contactSchema";
import nodemailer from "nodemailer";

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
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "465"),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.verify();

        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (must match auth user usually)
            to: process.env.SMTP_TO, // Receiver address
            replyTo: email, // Customer email for reply
            subject: `Nowa wiadomość ze strony: ${subject}`,
            text: `
        Imię: ${name}
        Email: ${email}
        Telefon: ${phone}
        
        Wiadomość:
        ${message}
      `,
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

        return {
            success: true,
            message: "Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.",
            errors: {},
        };
    } catch (error) {
        console.error("Email sending error:", error);
        return {
            success: false,
            message: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
            errors: {},
        };
    }
}
