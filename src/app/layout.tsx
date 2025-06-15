import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Morten Lundum-Nørgaard - Data Scientist & Software Developer",
  description: "Professional portfolio showcasing machine learning projects, data analysis solutions, and software development expertise in industrial applications.",
  keywords: ["data science", "machine learning", "LSTM", "Flask", "Python", "Azure Data Explorer", "portfolio", "data analysis", "industrial testing"],
  authors: [{ name: "Morten Lundum-Nørgaard" }],
  creator: "Morten Lundum-Nørgaard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
