import AuthProvider from "@/Components/AuthProvider";
import Providers from "@/Components/Providers";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack E-Commerce Store",
  description: "Full Stack E-Commerce Store"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full bg-main-bg text-darkText`}
      >
        <Providers>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  )
};