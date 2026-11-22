import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://s-diva-website.vercel.app"),
  title: "S DIVA Premium Salon & Spa | Chandrasekharpur, Bhubaneswar",
  description: "Discover S DIVA Premium Salon & Spa in Chandrasekharpur, Bhubaneswar. Explore hair artistry, facials, massage, grooming, service prices and signature experiences. Call to book.",
  keywords: ["S DIVA", "S DIVA salon", "salon Bhubaneswar", "spa Chandrasekharpur", "salon near Embassy Club", "hair spa Bhubaneswar"],
  openGraph: {
    title: "S DIVA Premium Salon & Spa | The Art of the Reset",
    description: "Explore our services, prices and signature experiences. Find your moment at S DIVA in Bhubaneswar.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/spa-hero.webp", width: 1800, height: 1200, alt: "S DIVA Premium Salon & Spa" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
