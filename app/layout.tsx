import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OTP from "../public/OTP.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <div className="flex py-5 flex-wrap content-center items-center justify-center h-[95vh]">
          <div className="flex flex-wrap justify-between relative">
            <Image
              src={OTP}
              className="object-contain p-16 xs:p-0"
              alt="Logo"
            />
            <div className="md:min-w-[30rem] xs:background-red-500 relative">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
