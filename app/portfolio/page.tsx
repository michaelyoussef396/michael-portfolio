"use client";

import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { EmailCTA } from "@/components/EmailCTA";

const AboutMe = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <FAQ />
        <EmailCTA />
        <Footer />
      </div>
    </main>
  );
};

export default AboutMe;
