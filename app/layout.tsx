import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ayushi Yadav — Software Engineer",
  description:
    "Portfolio of Ayushi Yadav — Software Engineer at MAQ Software building enterprise web apps with React, TypeScript, ASP.NET Core, and Azure.",
  keywords: [
    "Ayushi Yadav",
    "Software Engineer",
    "React",
    "TypeScript",
    "ASP.NET Core",
    "Azure",
    "Portfolio",
  ],
  authors: [{ name: "Ayushi Yadav" }],
  openGraph: {
    title: "Ayushi Yadav — Software Engineer",
    description:
      "Enterprise web apps with React, TypeScript, ASP.NET Core, and Azure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
