import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartDrawer from "@/components/cart/CartDrawer"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SessionProvider } from "next-auth/react";
import Providers from "@/components/Providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GO-ON TEES | Premium GSM T-Shirts",
  description: "Shop premium GSM cotton t-shirts designed for comfort and streetwear style.",
  icons: {
    icon: "/t-logo.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
         <Providers>
        <Navbar />
        {children}
        <CartDrawer />
        <WhatsAppFloat />
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
