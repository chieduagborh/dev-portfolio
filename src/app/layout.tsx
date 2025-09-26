import type { Metadata } from "next";
import { Faculty_Glyphic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const facultyGlyphic = Faculty_Glyphic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chiedu Agborh | Front-End & Full-Stack Developer",
  description:
    "Building high-performance, accessible web applications with React, TypeScript, and modern front-end tools. Explore my work in CMS development, scalable architectures, and user-focused digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${facultyGlyphic.className}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
