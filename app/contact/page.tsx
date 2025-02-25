"use client";

import { navItems } from "@/data";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { EmailCTA } from "@/components/EmailCTA";

const ContactMe = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Contact />
        <FAQ />
        <EmailCTA />
        <Footer />
      </div>
    </main>
  );
};

export default ContactMe;
