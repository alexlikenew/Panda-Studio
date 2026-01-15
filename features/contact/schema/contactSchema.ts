import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Imię jest wymagane"),
    email: z.string().email("Nieprawidłowy adres email"),
    phone: z.string().min(1, "Numer telefonu jest wymagany"),
    subject: z.string().min(1, "Temat jest wymagany"),
    message: z.string().min(1, "Wiadomość jest wymagana"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
    success?: boolean;
    message?: string;
    errors?: {
        [K in keyof ContactFormData]?: string[];
    };
};
