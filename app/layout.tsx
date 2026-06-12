import type { Metadata } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter' 
});
const cinzel = Cinzel_Decorative({ 
  subsets: ["latin"],
  weight: ['700', '900'],
  variable: '--font-cinzel'
});

export const metadata: Metadata = {
  title: "Mystic Vault - Roguelite Puzzle Dungeon",
  description: "Delve into the Vault. Master the Combo. Survive the Dungeon. A new roguelite puzzle game for PC and Mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-brand-dark`}>
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10"></div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}