import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
