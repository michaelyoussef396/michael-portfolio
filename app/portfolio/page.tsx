"use client";

import { navItems, portfolioFAQs } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { EmailCTA } from "@/components/EmailCTA";
import HeroPortfolio from "@/sections/HeroPortfolio";

const Portfolio = () => {
  return (
    <main className="overflow-hidden bg-black-100 w-full h-full">
      {/* If you want it truly full screen, remove max-width constraints */}
      <FloatingNav navItems={navItems} />
      <HeroPortfolio />
      <FAQ faqs={portfolioFAQs} title="Portfolio FAQs" />
      <EmailCTA />
      <Footer />
    </main>
  );
};

export default Portfolio;
