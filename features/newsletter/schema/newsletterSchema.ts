import { z } from 'zod';

export const newsletterSchema = z.object({
    email: z.string().email({ message: 'Proszę podać poprawny adres e-mail.' }),
});

export type NewsletterInputs = z.infer<typeof newsletterSchema>;
