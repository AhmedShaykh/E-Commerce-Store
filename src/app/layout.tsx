import AuthProvider from "@/Components/AuthProvider";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";
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
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
};