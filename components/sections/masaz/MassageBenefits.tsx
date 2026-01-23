'use client';

import { useState, useRef } from 'react';

export default function MassageBenefits() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };
    return (
        <section className="massage-section massage-benefits">
            <div className="wrapper">
                <div className="massage-split">
                    {/* Content Left */}
                    <div className="massage-split__content order-2 md:order-1">
                        <p className="text-small-bold text-green uppercase tracking-wide mb-4">
                            Korzyści
                        </p>
                        <h2 className="heading-h2">
                            Dlaczego warto?
                        </h2>

                        <ul className="massage-benefits-list">
                            <li>
                                <div className="icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                    </svg>
                                </div>
                                <div className="benefit-content">
                                    <h3 className="heading-h5 text-white mb-1">Redukcja Bólu</h3>
                                    <p className="text-medium-normal text-gray-light">
                                        Skuteczna terapia manualna celująca w źródło bólu. Eliminujemy przewlekłe napięcia kręgosłupa i "rozbijamy" punkty spustowe, przynosząc długotrwałą ulgę.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M13.59 13.59 1 1" />
                                        <path d="M9.59 3.41 1 12" />
                                        <path d="M13.59 13.59 23 23" />
                                        <path d="M15 23c-1.35-1.38-2.61-3.69-3.23-5.35a.8.8 0 0 1 1.76-.69C13.9 17.9 15.65 19.56 17 21a2 2 0 0 0 3-1c.64-1.34 2.3-3.1 3.96-3.47a.8.8 0 0 1 .69 1.76c-1.66.62-3.97 1.88-5.35 3.23a2 2 0 0 1-4.3 0z" />
                                        <path d="M23 15c-1.38-1.35-3.69-2.61-5.35-3.23a.8.8 0 0 1-.69-1.76c.94-1.09 2.6-2.84 4-4.2a2 2 0 0 0-1-3L18 4.9c-1.34.64-3.1 2.3-3.47 3.96a.8.8 0 0 1-1.76.69C12.15 7.89 10.9 5.58 9.55 4.2a2 2 0 0 1 4.3 0z" />
                                    </svg>
                                </div>
                                <div className="benefit-content">
                                    <h3 className="heading-h5 text-white mb-1">Regeneracja Sportowa</h3>
                                    <p className="text-medium-normal text-gray-light">
                                        Przyspieszenie usuwania toksyn metabolicznych z mięśni. Twój organizm szybciej wraca do pełnej gotowości, co pozwala trenować częściej i intensywniej.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div className="benefit-content">
                                    <h3 className="heading-h5 text-white mb-1">Poprawa Mobilności</h3>
                                    <p className="text-medium-normal text-gray-light">
                                        Praca na powięziach przywraca pełny zakres ruchu w stawach. Większa elastyczność to lepsza technika ćwiczeń i mniejsze ryzyko naderwań.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                        <path d="M8.5 8.5v.01" />
                                        <path d="M16 15.5v.01" />
                                        <path d="M12 12v.01" />
                                        <path d="M11 17a2 2 0 0 0 2 0" />
                                    </svg>
                                </div>
                                <div className="benefit-content">
                                    <h3 className="heading-h5 text-white mb-1">Redukcja Stresu</h3>
                                    <p className="text-medium-normal text-gray-light">
                                        Głęboki reset dla układu nerwowego. Masaż obniża poziom kortyzolu, reguluje ciśnienie krwi i poprawia jakość snu, co jest kluczem do zdrowia psychicznego.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Image Right -> Changed to Video */}
                    <div className="massage-split__video-wrapper">
                        <div className="massage-split__video">
                            <video
                                ref={videoRef}
                                src="/videos/Strona-Masazu-Studio-Panda-Rzeszow.mp4"
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                            />
                            {/* Optional overlay */}
                            <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', pointerEvents: 'none' }} />

                            {/* Sound Toggle Button */}
                            <button className="massage-split__sound-toggle" onClick={toggleSound} aria-label={isMuted ? "Włącz dźwięk" : "Wycisz"}>
                                {isMuted ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.53 19.53a.75.75 0 0 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 1.06l6 6Zm-1.06-7.06a.75.75 0 0 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 1.06l6 6Z" fillRule="evenodd" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
                                    </svg>
                                )}
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
