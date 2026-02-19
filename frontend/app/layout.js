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
  title: "Panaderia Celaya | Authentic Mexican Bakery",
  description: "Experience the taste of tradition at Panaderia Celaya, Grand Prairie's finest authentic Mexican bakery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased bg-stone-50 text-stone-900 font-sans">
        {children}
      </body>
    </html>
  );
}
