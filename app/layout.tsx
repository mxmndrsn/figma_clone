import type { Metadata } from "next";
import localFont from "next/font/local";
import Room from "./Room";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A minimalistic Figma clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-primary-grey-200 antialiased`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
