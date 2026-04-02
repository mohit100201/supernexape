import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import SecurityWrapper from "@/components/layout/SecurityWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SuperNexape - Smart Payments, Smart Digital Ecosystem",
  description: "India's trusted digital banking platform for AePS, DMT, and 25+ fintech services.",
  icons: {
    icon: "/supernexape.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} scroll-smooth h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col bg-white text-slate-900 selection:bg-indigo-500 selection:text-white">
        <SecurityWrapper>{children}</SecurityWrapper>
      </body>
    </html>
  );
}
