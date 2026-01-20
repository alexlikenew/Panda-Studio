import { describe, it, expect } from 'vitest';
import { contactSchema } from '../contactSchema';

describe('Contact Schema', () => {
    it('should validate correct data', () => {
        const validData = {
            name: 'Jan Kowalski',
            email: 'jan@example.com',
            phone: '123456789',
            subject: 'Współpraca',
            message: 'Dzień dobry, chciałbym nawiązać współpracę.',
        };
        const result = contactSchema.safeParse(validData);
        expect(result.success).toBe(true);
    });

    it('should fail validation for invalid email', () => {
        const invalidData = {
            name: 'Jan Kowalski',
            email: 'jan-kowalski', // Invalid email
            phone: '123456789',
            subject: 'Współpraca',
            message: 'Treść wiadomości',
        };
        const result = contactSchema.safeParse(invalidData);
        expect(result.success).toBe(false);
    });

    it('should fail validation for empty name', () => {
        const invalidData = {
            name: '', // Empty name
            email: 'jan@example.com',
            phone: '123456789',
            subject: 'Współpraca',
            message: 'Treść wiadomości',
        };
        const result = contactSchema.safeParse(invalidData);
        expect(result.success).toBe(false);
    });
});
