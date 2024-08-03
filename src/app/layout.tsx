import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: './Digital_tech.otf',
  variable: "--font-digital"
})

export const metadata: Metadata = {
  title: "Dobs On Solana",
  description: "Solana's Rebel Dog $DOBS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${inter.className}  ${myFont.variable}`}>
      <body >{children}</body>
    </html> 
  );
}
