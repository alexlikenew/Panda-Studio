import { Metadata } from "next";
import { getVouchers } from "@/features/vouchers/services/voucherService";
import VoucherCard from "@/features/vouchers/components/VoucherCard";

export const metadata: Metadata = {
    title: "Vouchery Prezentowe - Panda Studio Rzeszów",
    description: "Podaruj bliskim zdrowie i relaks using our vouchers.",
};

export default async function VouchersPage() {
    const vouchers = await getVouchers();

    return (
        <div className="vouchers-page">
            <div className="wrapper">
                <h1 className="heading-h2 vouchers-page__title">Vouchery Prezentowe</h1>
                <p className="text-medium-normal vouchers-page__description">
                    Podaruj bliskim wyjątkowy prezent. Wybierz voucher na masaż lub trening.
                </p>

                <div className="vouchers-page__list">
                    {vouchers && vouchers.length > 0 ? (
                        vouchers.map((voucher) => (
                            <VoucherCard key={voucher.title} voucher={voucher} />
                        ))
                    ) : (
                        <p className="text-medium-normal">Brak dostępnych voucherów w tej chwili.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
