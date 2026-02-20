import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Nanté Patisserie & Confectionery | Custom Designer Cakes",
  description: "Nanté Patisserie & Confectionery crafts exquisite custom designer cakes for every celebration. Classic and Signature flavors, handcrafted with love.",
  openGraph: {
    title: "Nanté Patisserie & Confectionery | Custom Designer Cakes",
    description: "Exquisite custom designer cakes crafted with passion. From Classic to Signature selections, every cake tells a story.",
    url: "https://nantepatisserie.com",
    siteName: "Nanté Patisserie & Confectionery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Nanté Patisserie Custom Designer Cake",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanté Patisserie & Confectionery | Custom Designer Cakes",
    description: "Exquisite custom designer cakes crafted with passion.",
    images: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased bg-[#FFFCF9] text-[#3D2B1F] font-sans">
        {children}
      </body>
    </html>
  );
}
