'use client';

export default function CookieSettingsButton() {
    return (
        <button
            onClick={() => {
                if (typeof window !== 'undefined') {
                    // Custom event dispatch to open cookie consent
                    // Alternatively we could clear localStorage here
                    localStorage.removeItem('cookie_consent_status');
                    window.location.reload();
                }
            }}
            className="footer__nav__cookie-btn"
            title="Zresetuj ustawienia plików cookies"
        >
            Ustawienia plików cookies
        </button>
    );
}
