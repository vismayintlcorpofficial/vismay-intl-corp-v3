import Image from "next/image";
export default function Hero({ src, alt }) {
   return <Image alt={alt} src={src} width={100} height={100} />;
}
