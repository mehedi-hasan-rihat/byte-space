import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
