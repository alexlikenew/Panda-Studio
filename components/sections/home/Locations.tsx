import React from 'react';

export default function Locations() {
    return (
        <section className="locations-section">
            <div className="wrapper">
                <h2 className="locations-section__header heading-h3">Znajdź nas na mapie</h2>


                <div className="locations-section__grid">
                    {/* Card 1: STUDIO TRENINGOWE */}
                    <div className="location-card">
                        <div className="location-card__header">
                            <h3 className="location-card__title heading-tagline">STUDIO TRENINGOWE</h3>
                            <p className="location-card__address text-medium-normal">Myśliwska 255, Rzeszów</p>
                        </div>
                        <div className="location-card__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164089.4588281125!2d21.81160972005515!3d50.013270847201966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ce354e9e2e067%3A0xbdb456eb6ba366ba!2sMy%C5%9Bliwska%20255%2C%2035-212%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1768559347391!5m2!1spl!2spl"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa lokalizacji: Studio Treningowe przy ul. Myśliwskiej"
                            ></iframe>
                        </div>
                    </div>

                    {/* Card 2: STREFA REGENERACJI */}
                    <div className="location-card">
                        <div className="location-card__header">
                            <h3 className="location-card__title heading-tagline">MASAŻ</h3>
                            <p className="location-card__address text-medium-normal">Podkarpacka 12a, Rzeszów</p>
                        </div>
                        <div className="location-card__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41010.71662738961!2d21.95900335781476!3d50.02691423259031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfd8cadbe5765%3A0xe6b3494c09239b65!2sPanda%20Masa%C5%BC!5e0!3m2!1spl!2spl!4v1768559752430!5m2!1spl!2spl"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa lokalizacji: Gabinet Masażu przy ul. Podkarpackiej"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
