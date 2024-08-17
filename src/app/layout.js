import { Inter, Adamina, Alegreya } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "PynChe",
  description: "Started as an art collaborative, PynChe was created by three women from different professional backgrounds. The initiative was started with the intention and mission to enable conversations around themes of environmental and cultural consciousness through various forms of art activities and engagements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
