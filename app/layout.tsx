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
              images: '/og',
                  locale: 'en_US',
                      type: 'website',
                        
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
  baseTheme:shadesOfPurple,
          variables: { colorBackground: '#00359e' },

}}    >
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
