import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kibubu",
  description: "Take control of your finances with Kibubu, your modern and intuitive budgeting app. Track expenses, set goals, and visualize your spending.",
  keywords: "budgeting, personal finance, expense tracker, financial planning, money management, kibubu", // Added keywords
  openGraph: { // Added Open Graph metadata for better social sharing
    title: "Kibubu - Personal Budgeting Companion",
    description: "Take control of your finances with Kibubu, your modern and intuitive budgeting app.",
    type: 'website',
  },
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
      </body>
    </html>
  );
}
