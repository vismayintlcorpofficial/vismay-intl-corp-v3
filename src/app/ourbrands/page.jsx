import HeroImage from "@/components/layout/HeroImage";
import ImageProduct from "@/components/ourbrands/image-product";
import ProductImage from "@/components/ourbrands/product-image";
import ProductCategory from "@/components/ourbrands/productCategory";
import Product from "@/components/ourbrands/productCategory";

export const metadata = {
  title: "Our Brands",
  description:
    "Explore the brands under Vismay International Corporation, featuring quality products and trusted names selected to deliver reliable value to our customers.",
};

export default function OurBrands() {
  return (
    <div className="bg-white">
      <section>
        <HeroImage src="/images/brands/ourbrand.webp" />
      </section>
      <section className="m-5">
        <ProductImage
          header="Piano 4K"
          paragraph="High-End Home Karaoke System"
          paraImg="/images/brands/piano4k.webp"
          curvedImg="/images/brands/piano4kbg.webp"
          link="https://platinumkaraoke.com/collections/piano-4k"
        />
        <ImageProduct
          header="Alpha 2"
          paragraph="High-End Home Karaoke system"
          paraImg="/images/brands/alpha2.webp"
          curvedImg="/images/brands/alpha2bg.webp"
          link="https://platinumkaraoke.com/products/alpha-2-high-end-home-karaoke-system"
        />
        <ProductImage
          header="Cello 2"
          paragraph="UHF Wireless Microphone Karaoke Player"
          paraImg="/images/brands/cello2.webp"
          curvedImg="/images/brands/cello2bg.webp"
          link="https://platinumkaraoke.com/products/cello-2-uhf-wireless-microphone-karaoke-player"
        />
        <ImageProduct
          header="PK10"
          paragraph="All-in-one party speaker with UHF wireless keypad microphone"
          paraImg="/images/brands/pk10.webp"
          curvedImg="/images/brands/pk10bg.webp"
          link="https://platinumkaraoke.com/products/pk-10-trolley-speaker"
        />
      </section>
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 py-10 text-black">
        <ProductCategory
          header="Party Jukebox"
          src="/images/brands/dk88_plain.png"
          alt="DK88 Image"
          link="https://platinumkaraoke.com/collections/speakers-with-built-in-karaoke"
        />
        <Product
          header="Piano Series"
          src="/images/brands/piano-XL-SD_plain.png"
          alt="Piano Series"
          link="https://platinumkaraoke.com/collections/piano-series"
        />
        <ProductCategory
          header="KS Series"
          src="/images/brands/ks10-mini-sd_plain.png"
          alt="KS Series"
          link="https://platinumkaraoke.com/collections/ks-series"
        />
        <ProductCategory
          header="Reyna Series"
          src="/images/brands/reyna-4_plain.png"
          alt="Reyna Series"
          link="https://platinumkaraoke.com/collections/reyna-series"
        />
      </section>
    </div>
  );
}
