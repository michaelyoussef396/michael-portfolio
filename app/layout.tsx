import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { aboutUsFAQs, navItems } from "@/data";
import FAQ from "@/components/FAQ";
import { EmailCTA } from "@/components/EmailCTA";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Youssef's Portfolio",
  description: "Modern & Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`bg-black-100 ${fredoka.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
          <FAQ faqs={aboutUsFAQs} title="Common Questions" />
          <EmailCTA />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
