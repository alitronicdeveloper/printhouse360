import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "PrintHouse360 — Print. Brand. Deliver.",
  description: "PrintHouse360 ni kampuni ya uchapishaji wa kisasa Dar es Salaam, Tanzania. Tunatoa huduma za uchapishaji wa digital, offset, large format, branding, packaging na signage.",
  keywords: ["PrintHouse360", "printing Dar es Salaam", "chapisho Tanzania", "large format printing", "packaging", "branding"],
  openGraph: {
    title: "PrintHouse360 — Print. Brand. Deliver.",
    description: "PrintHouse360 ni kampuni ya uchapishaji wa kisasa Dar es Salaam, Tanzania.",
    type: "website",
    locale: "sw_TZ",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sw" className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-ink text-cream font-body antialiased">{children}</body>
    </html>
  );
}
