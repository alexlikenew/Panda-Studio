'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema, NewsletterInputs } from '../schema/newsletterSchema';
import { subscribeToNewsletter } from '../actions/subscribe';

export default function NewsletterForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<NewsletterInputs>({
        resolver: zodResolver(newsletterSchema),
    });

    const onSubmit = async (data: NewsletterInputs) => {
        setStatus('loading');
        setMessage('');

        try {
            const response = await subscribeToNewsletter(data);
            if (response.success) {
                setStatus('success');
                setMessage(response.message);
                reset();
            } else {
                setStatus('error');
                setMessage(response.message);
            }
        } catch {
            setStatus('error');
            setMessage('Wystąpił błąd. Spróbuj ponownie.');
        }
    };

    return (
        <div className="newsletter-form">
            <h4 className="newsletter-form__title heading-h6">Zapisz się do Newslettera</h4>
            <p className="newsletter-form__desc text-small-normal">Otrzymuj porady treningowe i zniżki na masaże.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form__form">
                <input
                    type="email"
                    placeholder="Twój adres e-mail"
                    {...register('email')}
                    disabled={status === 'loading'}
                    className={`newsletter-form__input ${errors.email ? 'newsletter-form__input--error' : ''}`}
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="newsletter-form__button"
                >
                    {status === 'loading' ? '...' : 'Zapisz się'}
                </button>
            </form>

            {errors.email && (
                <p className="newsletter-form__message newsletter-form__message--error">
                    {errors.email.message}
                </p>
            )}

            {message && (
                <p className={`newsletter-form__message newsletter-form__message--${status}`}>
                    {message}
                </p>
            )}
        </div>
    );
}
