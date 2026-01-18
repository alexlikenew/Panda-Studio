"use client";

import Image from "next/image";
import { useActionState } from "react";
import { sendContactEmail } from "@/features/contact/actions/sendEmail";

const initialState = {
    success: false,
    message: "",
    errors: {},
};

export default function ContactContent() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

    return (
        <section className="contact-section contact-page-main">
            <div className="wrapper">
                <div className="contact-grid">

                    {/* LEFT COLUMN: INFO TILES */}
                    <div className="contact-info-stack">
                        <h2 className="heading-h2 mb-4">Skontaktuj się</h2>
                        <p className="text-medium-normal text-gray mb-6">
                            Masz pytania? Jesteśmy tutaj, aby pomóc. Wybierz dogodną formę kontaktu lub odwiedź nas osobiście.
                        </p>

                        {/* TILE 1: LOCATION */}
                        <div className="info-tile">
                            <div className="info-tile__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className="info-tile__content">
                                <h3 className="heading-h5 text-green uppercase">Lokalizacja</h3>
                                <p className="text-regular-normal text-gray">
                                    <a href="https://g.co/kgs/P3n3EtW" target="_blank" rel="noopener noreferrer">
                                        <strong>Trening:</strong> Myśliwska 255, Rzeszów
                                    </a>
                                </p>
                                <p className="text-regular-normal text-gray">
                                    <a href="https://g.co/kgs/MBEjdC3" target="_blank" rel="noopener noreferrer">
                                        <strong>Masaż:</strong> Podkarpacka 12a, Rzeszów
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* TILE 2: CONTACT */}
                        <div className="info-tile">
                            <div className="info-tile__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className="info-tile__content">
                                <h3 className="heading-h5 text-green uppercase">Kontakt Bezpośredni</h3>
                                <p className="text-large-normal text-gray">
                                    <a href="tel:694906749">694 906 749</a>
                                </p>
                                <p className="text-large-normal text-gray">
                                    <a href="mailto:kontakt@pandastudio.pl">kontakt@fitpandastudio.pl</a>
                                </p>
                            </div>
                        </div>

                        {/* TILE 3: HOURS */}
                        <div className="info-tile">
                            <div className="info-tile__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div className="info-tile__content">
                                <h3 className="heading-h5 text-green uppercase">Godziny otwarcia</h3>
                                <p className="text-large-normal text-gray">
                                    Poniedziałek - Sobota: <span className="text-white">08:00 - 16:00</span>
                                </p>
                                <p className="text-large-normal text-gray">
                                    Niedziela: Zamknięte
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORM */}
                    <div className="contact-form-wrapper">
                        <form action={formAction} className="compact-form">
                            <h2 className="heading-h3 mb-6">Napisz do nas</h2>

                            {state.success && (
                                <div className="p-4 mb-6 rounded-lg bg-green-900/20 border border-green-500/30 text-green-400 font-bold text-center">
                                    {state.message}
                                </div>
                            )}
                            {!state.success && state.message && (
                                <div className="p-4 mb-6 rounded-lg bg-red-900/20 border border-red-500/30 text-red-400 font-bold text-center">
                                    {state.message}
                                </div>
                            )}

                            {/* Row 1 */}
                            <div className="form-row">
                                <div className="modern-input-group">
                                    <label htmlFor="firstName" className="text-small-bold">Imię</label>
                                    <input
                                        className="modern-input text-medium-normal"
                                        id="firstName"
                                        name="name"
                                        required
                                        type="text"
                                    />
                                    {state.errors?.name && <p className="text-small-normal" style={{ color: "red", marginTop: "0.25rem" }}>{state.errors.name[0]}</p>}
                                </div>

                                <div className="modern-input-group">
                                    <label htmlFor="e-mail" className="text-small-bold">Email</label>
                                    <input
                                        className="modern-input text-medium-normal"
                                        id="e-mail"
                                        name="email"
                                        required
                                        type="email"
                                    />
                                    {state.errors?.email && <p className="text-small-normal" style={{ color: "red", marginTop: "0.25rem" }}>{state.errors.email[0]}</p>}
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="form-row">
                                <div className="modern-input-group">
                                    <label htmlFor="phone" className="text-small-bold">Telefon</label>
                                    <input
                                        className="modern-input text-medium-normal"
                                        id="phone"
                                        name="phone"
                                        required
                                        type="tel"
                                    />
                                    {state.errors?.phone && <p className="text-small-normal" style={{ color: "red", marginTop: "0.25rem" }}>{state.errors.phone[0]}</p>}
                                </div>

                                <div className="modern-input-group">
                                    <label htmlFor="subject" className="text-small-bold">Temat</label>
                                    <input
                                        className="modern-input text-medium-normal"
                                        id="subject"
                                        name="subject"
                                        required
                                        type="text"
                                    />
                                    {state.errors?.subject && <p className="text-small-normal" style={{ color: "red", marginTop: "0.25rem" }}>{state.errors.subject[0]}</p>}
                                </div>
                            </div>

                            <div className="modern-input-group">
                                <label htmlFor="comments" className="text-small-bold">Wiadomość</label>
                                <textarea
                                    className="modern-input modern-input--textarea text-medium-normal"
                                    id="comments"
                                    name="message"
                                    required
                                ></textarea>
                                {state.errors?.message && <p className="text-small-normal" style={{ color: "red", marginTop: "0.25rem" }}>{state.errors.message[0]}</p>}
                            </div>

                            <button type="submit" disabled={isPending} className="btn-submit-contact text-medium-bold">
                                {isPending ? "WYSYŁANIE..." : "WYŚLIJ WIADOMOŚĆ"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
