import HeroImage from "@/components/layout/HeroImage";
import ImageProduct from "@/components/ourbrands/image-product";
import ProductImage from "@/components/ourbrands/product-image";

export const metadata = {
  title: "Our Brands",
  description:
    "Explore the brands under Vismay International Corporation, featuring quality products and trusted names selected to deliver reliable value to our customers.",
};

export default function OurBrands() {
  return (
    <div>
      <HeroImage src="/images/brands/ourbrand.svg" />
      <div className="m-5">
        <ProductImage
          header="Piano 4K"
          paragraph="High-End Home Karaoke System"
          paraImg="/images/brands/piano4k.webp"
          curvedImg="/images/brands/piano4k.svg"
        />
        <ImageProduct
          header="Alpha 2"
          paragraph="High-End Home Karaoke system"
          paraImg="/images/brands/alpha2.webp"
          curvedImg="/images/brands/alpha2bg.svg"
        />
        <ProductImage
          header="Cello 2"
          paragraph="UHF Wireless Microphone Karaoke Player"
          paraImg="/images/brands/cello2.webp"
          curvedImg="/images/brands/cello2bg.svg"
        />
        <ImageProduct
          header="PK10"
          paragraph="All-in-one party speaker with UHF wireless keypad microphone"
          paraImg="/images/brands/pk10.webp"
          curvedImg="/images/brands/pk10bg.svg"
        />
      </div>
    </div>
  );
}
