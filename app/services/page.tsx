"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { EmailCTA } from "@/components/EmailCTA";
import ServicesHero from "@/sections/ServicesHero";

const Portfolio = () => {
  return (
    <main className="overflow-hidden bg-black-100 w-full h-full">
      <FloatingNav navItems={navItems} />
      <ServicesHero />
      <FAQ />
      <EmailCTA />
      <Footer />
    </main>
  );
};

export default Portfolio;
