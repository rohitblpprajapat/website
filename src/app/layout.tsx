import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AAAStonex | Premium Marble & Granite",
  description: "High-converting B2B/B2C website for Rajasthan Black Granite and Kharda Red Granite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} antialiased bg-background text-foreground font-sans transition-colors duration-300 relative min-h-screen`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 bg-noise pointer-events-none z-50"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
