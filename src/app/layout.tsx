
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./Navbar";
import { Footer } from "./footer";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: "TrekTribe - Find Your Path. Join the Tribe.",
  description:
    "Discover curated outdoor events, hikes, marathons, and impact adventures near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
