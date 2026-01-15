"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(1, "Imię jest wymagane"),
    email: z.string().email("Nieprawidłowy adres email"),
    phone: z.string().min(1, "Numer telefonu jest wymagany"),
    subject: z.string().min(1, "Temat jest wymagany"),
    message: z.string().min(1, "Wiadomość jest wymagana"),
});

export type ContactFormState = {
    success?: boolean;
    message?: string;
    errors?: {
        [K in keyof z.infer<typeof contactSchema>]?: string[];
    };
};

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

    // Simulate usage of nodemailer
    // try {
    //   await transporter.sendMail({ ... });
    // } catch (error) { ... }

    console.log("Email sending simulation:", validatedFields.data);

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        success: true,
        message: "Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.",
        errors: {},
    };
}
