import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Variable.woff2", style: "normal" },
  ],
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "../../public/fonts/ClashDisplay-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "../../public/fonts/Poppins-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Poppins-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Poppins-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Poppins-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace – Get Access to Hundreds Courses Available",
  description: "Discover your passion and build your skills with ByteSpace online learning platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${clashDisplay.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
