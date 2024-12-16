import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideMenu from "./components/SideMenu";

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
  title: "Pwejar hub limited",
  description: "The top software company in Kenya with leading Mtaabizz POS Point of sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SideMenu></SideMenu>
      </body>
    </html>
  );
}
