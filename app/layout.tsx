import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { shadesOfPurple } from '@clerk/themes'
import { Toaster } from 'sonner';
import Navbar from "@/components/custom/navbar";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Portique",
  description: "Crafted Portfolios for Creative Minds.",
  openGraph: {
    url: "https://portique.vercel.app",
    siteName: "Portique",
    images: [
      {
        url: "https://portique.vercel.app/og",
        width: 1200,
        height: 630,
        alt: "Portique - Launch Your Portfolio in Minutes!",
      }
    ],
    locale: 'en_US',
    type: 'website',
    title: "Portique",
    description: "Crafted Portfolios for Creative Minds.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Portique",
    description: "Crafted Portfolios for Creative Minds.",
    images: ["https://portique.vercel.app/og"],
    creator: "@portique",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: { colorBackground: '#00359e' },
      }}
    >
      <html lang="en">
        <body className={`${poppins.className}  m-0 antialiased w-full h-screen`}>
          <Navbar/>
          {children}
          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
