import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainProvider from "@/Providers/MainProvider";
import NavBar from "@/components/navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automated pros",
  description: "React.js test",
  icons: "/favIcon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainProvider>
          <div className="relative">
            <NavBar />
            <AntdRegistry>
              <div className="py-10">{children}</div>
            </AntdRegistry>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
