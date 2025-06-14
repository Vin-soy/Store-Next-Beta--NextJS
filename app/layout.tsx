import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store Next – Modern E-commerce for Everyone",
  description:
    "Store Next is a beautifully designed, high-performance e-commerce platform built with Next.js. Discover, shop, and enjoy a seamless online shopping experience with fast checkout, secure payments, and a curated selection of products.",
  openGraph: {
    title: "Store Next – Modern E-commerce for Everyone",
    description:
      "Store Next is a beautifully designed, high-performance e-commerce platform built with Next.js. Discover, shop, and enjoy a seamless online shopping experience with fast checkout, secure payments, and a curated selection of products.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Store Next Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Store Next – Modern E-commerce for Everyone",
    description:
      "Store Next is a beautifully designed, high-performance e-commerce platform built with Next.js. Discover, shop, and enjoy a seamless online shopping experience with fast checkout, secure payments, and a curated selection of products.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
