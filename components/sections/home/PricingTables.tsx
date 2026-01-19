import { getPricingCategories } from "@/services/pricingService";
import PricingAction from "./PricingAction";

export default async function PricingTables() {
    const categories = await getPricingCategories();

    if (!categories || categories.length === 0) {
        return null;
    }

    return (
        <section className="pricing-section">
            <div className="wrapper">
                <div className="pricing-section__header">
                    <p className="text-medium-light">DOSTĘPNE PAKIETY</p>
                    <h2 className="heading-h3">WYBIERZ SWÓJ PLAN</h2>
                </div>

                <div className="pricing-grid">
                    {categories.map((category) => (
                        <article key={category._id} className="pricing-category-card">
                            <header className="pricing-category-card__header">
                                <h3 className="heading-h5">{category.title}</h3>
                                {category.subtitle && (
                                    <p className="text-regular-normal text-gray">{category.subtitle}</p>
                                )}
                            </header>

                            <div className="pricing-category-card__list">
                                {category.packages?.map((pkg) => (
                                    <div key={pkg._key} className="pricing-row">
                                        <span className="pricing-row__name text-medium-normal">{pkg.name}</span>
                                        <span className="pricing-row__price heading-h5 text-green">{pkg.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pricing-category-card__footer">
                                <PricingAction
                                    type={category.type}
                                    bookingUrl={category.bookingUrl}
                                    className="w-full"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
