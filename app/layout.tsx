import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

import { ThemeToggleFAB } from "@/components/ThemeToggleFAB";

export const metadata: Metadata = {
  title: "Enlighten Capital",
  description: "We invest when it's inevitable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} font-sans min-h-screen flex flex-col antialiased bg-[#F5F3EF] dark:bg-[#05070D] text-[#111] dark:text-white transition-colors duration-500`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <ThemeToggleFAB />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

