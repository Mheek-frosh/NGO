import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tony Foundation | Dignity, equality and hope on a healthy planet",
  description:
    "Tony Foundation works for peace, dignity and equality on a healthy planet. Get involved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <Nav />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
