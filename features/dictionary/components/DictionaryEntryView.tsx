import { PortableText } from "@portabletext/react";
import { DictionaryEntry } from "../types";

interface Props {
    entry: DictionaryEntry;
}

export default function DictionaryEntryView({ entry }: Props) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "DefinedTerm",
                "name": entry.title,
                "description": entry.excerpt || entry.title,
                "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Baza Wiedzy FIT Panda Studio"
                }
            },
            ...(entry.faq ? [{
                "@type": "FAQPage",
                "mainEntity": entry.faq.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }] : [])
        ]
    };

    return (
        <article className="dictionary-article">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <header className="dictionary-article__header">
                <span className="dictionary-article__label text-small-bold">POJĘCIE / BAZA WIEDZY</span>
                <h1 className="dictionary-article__title">{entry.title}</h1>
                <div className="dictionary-article__meta text-small-normal">
                    <time dateTime={entry.publishedAt}>
                        {new Date(entry.publishedAt).toLocaleDateString("pl-PL", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </time>
                </div>
            </header>

            <div className="dictionary-article__separator"></div>

            {/* Excerpt / Lead */}
            {entry.excerpt && (
                <div className="dictionary-article__excerpt">
                    <p className="dictionary-lead text-large-light">{entry.excerpt}</p>
                </div>
            )}

            <div className="dictionary-article__content">
                <PortableText value={entry.content} />
            </div>

            {/* Related Services CTA */}
            {entry.relatedServices && entry.relatedServices.length > 0 && (
                <div className="dictionary-cta">
                    <h3 className="dictionary-cta__title heading-h5">Chcesz to sprawdzić w praktyce?</h3>
                    <div className="dictionary-cta__items">
                        {entry.relatedServices.map((service, index) => (
                            <div key={index} className="dictionary-cta__item">
                                <span className="dictionary-cta__service text-medium-normal">{service.title}</span>
                                <a href={service.url} className="dictionary-cta__button text-small-bold">
                                    Umów wizytę
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* FAQ Section */}
            {entry.faq && entry.faq.length > 0 && (
                <div className="dictionary-faq">
                    <h3 className="dictionary-faq__title heading-h3">Najczęściej zadawane pytania</h3>
                    <div className="dictionary-faq__list">
                        {entry.faq.map((item, index) => (
                            <details key={index} className="dictionary-faq__item">
                                <summary className="dictionary-faq__question text-medium-semi-bold">
                                    {item.question}
                                    <span className="dictionary-faq__icon">+</span>
                                </summary>
                                <div className="dictionary-faq__answer text-medium-normal">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            )}

            {/* Related Terms / See Also */}
            {entry.relatedTerms && entry.relatedTerms.length > 0 && (
                <div className="dictionary-related">
                    <h4 className="dictionary-related__label text-small-bold">Zobacz również:</h4>
                    <ul className="dictionary-related__list">
                        {entry.relatedTerms.map((term, index) => (
                            <li key={index} className="dictionary-related__item">
                                <a href={`/baza-wiedzy/${term.slug}`} className="dictionary-related__link">
                                    {term.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {entry.tags && entry.tags.length > 0 && (
                <footer className="dictionary-article__footer">
                    <div className="dictionary-article__tags">
                        {entry.tags.map(tag => <span key={tag} className="dictionary-article__tag text-tiny-bold">#{tag}</span>)}
                    </div>
                </footer>
            )}
        </article>
    );
}
