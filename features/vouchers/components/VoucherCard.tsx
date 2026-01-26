import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Voucher } from "../services/voucherService";

interface VoucherCardProps {
    voucher: Voucher;
}

export default function VoucherCard({ voucher }: VoucherCardProps) {
    return (
        <article className="voucher-card">
            {voucher.image && (
                <div className="voucher-card__image-container">
                    <Image
                        src={urlFor(voucher.image).url()}
                        alt={voucher.title}
                        fill
                        className="voucher-card__image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}
            <div className="voucher-card__body">
                <div className="voucher-card__content">
                    <h3 className="heading-h6 voucher-card__title">{voucher.title}</h3>
                    <p className="text-small-normal voucher-card__description">{voucher.description}</p>
                </div>
                <div className="voucher-card__footer">
                    <span className="heading-h6 voucher-card__price">{voucher.price}</span>
                    <Link href={voucher.buyLink} target="_blank" rel="noopener noreferrer" className="voucher-card__btn">
                        Kup Voucher
                    </Link>
                </div>
            </div>
        </article>
    );
}
