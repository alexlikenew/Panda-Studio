"use client";

import Image from "next/image";
import { useActionState } from "react";
import { sendContactEmail } from "../actions/sendEmail";

const initialState = {
    success: false,
    message: "",
    errors: {},
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

    return (
        <section className="contact">
            <div className="wrapper">
                <div className="contact__info">
                    <h2>Skontaktuj się z nami</h2>
                    <p>
                        Zadzwoń do nas w dowolnym momencie, staramy się odpowiadać na
                        wszystkie zapytania w ciągu 24 godzin w dni robocze. Chętnie
                        odpowiemy na Twoje pytania.
                    </p>
                    <div className="contact__info__details">
                        <div className="footer__info__right">
                            <ul className="footer__right__ul">
                                <li>
                                    <div className="icon-box">
                                        <Image alt="Ikonka lokalizacji" title="Ikonka lokalizacji" src="/img/location-icon.png" width={24} height={24} />
                                    </div>
                                    <div className="text">
                                        <p className="text__title">Adres:</p>
                                        <p className="text__content">
                                            <a href="https://g.co/kgs/P3n3EtW" title="Zobacz treningi w Mapach Google">
                                                <strong>Treningi:</strong> Myśliwska 255, Rzeszów, PL
                                                35-242
                                            </a>
                                        </p>
                                        <p className="text__content">
                                            <a href="https://g.co/kgs/MBEjdC3" title="Zobacz masaże w Mapach Google">
                                                <strong>Masaże:</strong> Podkarpacka 12a, Rzeszów, PL
                                                35-082
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <Image alt="Ikonka telefonu" title="Ikonka telefonu" src="/img/phone-icon.png" width={24} height={24} />
                                    </div>
                                    <div className="text">
                                        <p className="text__title">Telefon:</p>
                                        <p className="text__content">
                                            <a href="tel:694 906 749" title="Zadzwoń do nas: 694 906 749">
                                                694 906 749
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <Image alt="Ikonka zegarka" title="Ikonka zegarka" src="/img/clock-icon.png" width={24} height={24} />
                                    </div>
                                    <div className="text">
                                        <p className="text__title">Godziny pracy:</p>
                                        <p className="text__content">Pon-Sob: 08:00 - 16:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contact__form">
                    <form action={formAction}>
                        <h2>Zadaj swoje pytanie</h2>
                        {state.success && (
                            <p style={{ color: "#d1fd08", marginBottom: "1rem", fontWeight: "bold" }}>
                                {state.message}
                            </p>
                        )}
                        {!state.success && state.message && (
                            <p style={{ color: "red", marginBottom: "1rem" }}>
                                {state.message}
                            </p>
                        )}

                        <p>
                            Zapraszamy do kontakt z nami za pomocą poniższego formularza
                            kontaktowego. Chętnie Cię wysłuchamy.
                        </p>
                        <div className="contact__form__input-block">
                            <input
                                className="form-control"
                                id="firstName"
                                name="name"
                                placeholder="Imię"
                                required
                                type="text"
                            />
                            {state.errors?.name && <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.25rem" }}>{state.errors.name[0]}</p>}
                            <svg
                                fill="none"
                                height="20"
                                viewBox="0 0 20 20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 0C7.09223 0 4.72656 2.36566 4.72656 5.27344C4.72656 8.18121 7.09223 10.5469 10 10.5469C12.9078 10.5469 15.2734 8.18121 15.2734 5.27344C15.2734 2.36566 12.9078 0 10 0ZM10 9.375C7.7384 9.375 5.89844 7.53504 5.89844 5.27344C5.89844 3.01184 7.7384 1.17188 10 1.17188C12.2616 1.17188 14.1016 3.01184 14.1016 5.27344C14.1016 7.53504 12.2616 9.375 10 9.375Z"
                                    fill="#92949F"
                                ></path>
                                <path
                                    d="M16.5612 13.992C15.1174 12.5261 13.2035 11.7188 11.1719 11.7188H8.82812C6.79656 11.7188 4.88258 12.5261 3.43883 13.992C2.00215 15.4507 1.21094 17.3763 1.21094 19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141C18.7891 17.3763 17.9979 15.4507 16.5612 13.992ZM2.40859 18.8281C2.70215 15.5045 5.46918 12.8906 8.82812 12.8906H11.1719C14.5308 12.8906 17.2979 15.5045 17.5914 18.8281H2.40859Z"
                                    fill="#92949F"
                                ></path>
                            </svg>
                        </div>
                        <div className="contact__form__input-block">
                            <input
                                className="form-control"
                                id="e-mail"
                                name="email"
                                placeholder="Email"
                                required
                                type="email"
                            />
                            {state.errors?.email && <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.25rem" }}>{state.errors.email[0]}</p>}
                            <svg
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.8906 3.5625H2.10938C0.943922 3.5625 0 4.51228 0 5.67188V18.3281C0 19.4946 0.950859 20.4375 2.10938 20.4375H21.8906C23.0463 20.4375 24 19.4986 24 18.3281V5.67188C24 4.51434 23.0598 3.5625 21.8906 3.5625ZM21.5952 4.96875C21.1642 5.39742 13.7476 12.775 13.4916 13.0297C13.0931 13.4281 12.5634 13.6475 12 13.6475C11.4366 13.6475 10.9069 13.4281 10.5071 13.0284C10.3349 12.8571 3.00014 5.56097 2.40478 4.96875H21.5952ZM1.40625 18.0419V5.95898L7.48303 12.0037L1.40625 18.0419ZM2.40567 19.0312L8.48006 12.9955L9.51408 14.0241C10.1781 14.6881 11.061 15.0538 12 15.0538C12.939 15.0538 13.8219 14.6881 14.4846 14.0254L15.5199 12.9955L21.5943 19.0312H2.40567ZM22.5938 18.0419L16.517 12.0037L22.5938 5.95898V18.0419Z"
                                    fill="#92949F"
                                ></path>
                            </svg>
                        </div>
                        <div className="contact__form__input-block">
                            <input
                                className="form-control"
                                id="phone"
                                name="phone"
                                placeholder="Telefon"
                                required
                                type="tel"
                            />
                            {state.errors?.phone && <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.25rem" }}>{state.errors.phone[0]}</p>}
                            <svg
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.4979 18.6365L18.9974 17.8007C18.0972 16.3165 16.8549 14.6131 15.2254 14.6131C14.9235 14.6131 14.6245 14.6738 14.3286 14.7968L13.454 15.1719C13.3741 15.205 13.2965 15.2426 13.2143 15.2826C12.9905 15.3915 12.7366 15.5148 12.4755 15.5148C11.8315 15.5148 11.0852 14.6766 10.3746 13.1548C9.67718 11.6611 9.72167 10.8781 9.88176 10.4841C10.0584 10.0494 10.4692 9.86351 10.9105 9.69649C10.9719 9.67322 11.0273 9.65211 11.0812 9.62992L11.9669 9.25701C14.2742 8.29212 13.4159 4.92017 13.1344 3.81467L12.8957 2.86417C12.6917 2.0808 12.1507 0 10.3562 0C10.024 0 9.6696 0.0773953 9.30319 0.230129C9.06278 0.325601 5.75438 1.67607 4.55578 4.04858C3.12326 6.87259 3.38814 10.6595 5.34229 15.3019C7.28182 19.95 9.7969 22.7931 12.8177 23.7519C13.3359 23.9165 13.9215 23.9999 14.5584 23.9999H14.5587C16.6434 23.9999 18.7013 23.1129 18.8683 23.0393C19.587 22.7348 20.0516 22.2721 20.249 21.6639C20.5837 20.6324 20.0223 19.5023 19.4979 18.6365ZM18.7045 21.1627C18.6586 21.304 18.499 21.4331 18.2306 21.5461C18.2262 21.548 18.2208 21.5503 18.2162 21.5524C18.1976 21.5606 16.3349 22.3764 14.5583 22.3763C14.0883 22.3763 13.668 22.3185 13.309 22.2044C10.7641 21.3966 8.58791 18.864 6.83964 14.6744C5.07839 10.4899 4.79695 7.16204 6.00431 4.78194C6.94183 2.9263 9.87689 1.74913 9.90569 1.73788C9.91153 1.73549 9.91727 1.73322 9.92301 1.73084C10.0901 1.6607 10.2399 1.62368 10.3562 1.62368C10.714 1.62368 11.0396 2.17854 11.3225 3.26608L11.5601 4.21258C12.0728 6.22593 11.9947 7.48526 11.3384 7.75977L10.457 8.13105C10.4219 8.14555 10.3809 8.16082 10.3356 8.17803C9.84875 8.36237 8.83557 8.74577 8.37737 9.87282C7.9616 10.8955 8.13371 12.1938 8.90301 13.842C9.93913 16.0602 11.1076 17.1386 12.4753 17.1386C13.1101 17.1386 13.6196 16.8909 13.924 16.743C13.98 16.7158 14.0301 16.6908 14.0841 16.6685L14.96 16.2928C15.0504 16.2552 15.1372 16.2369 15.2253 16.2369C15.6469 16.2369 16.4029 16.6544 17.6068 18.6389L18.107 19.4742C18.7234 20.492 18.7722 20.9542 18.7045 21.1627Z"
                                    fill="#92949F"
                                ></path>
                            </svg>
                        </div>
                        <div className="contact__form__input-block">
                            <input
                                className="form-control"
                                id="subject"
                                name="subject"
                                placeholder="Temat"
                                required
                                type="text"
                            />
                            {state.errors?.subject && <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.25rem" }}>{state.errors.subject[0]}</p>}
                        </div>
                        <div className="contact__form__input-block">
                            <textarea
                                className="form-control"
                                id="comments"
                                name="message"
                                placeholder="Wpisz swoją wiadomość"
                                required
                            ></textarea>
                            {state.errors?.message && <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.25rem" }}>{state.errors.message[0]}</p>}
                        </div>
                        <button type="submit" disabled={isPending} aria-label="Wyślij formularz kontaktowy">
                            {isPending ? "Wysyłanie..." : "Wyślij"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
