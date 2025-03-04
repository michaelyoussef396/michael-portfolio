"use client";

import { aboutUsFAQs, navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Certificate from "@/sections/Certificate";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";
import About from "@/sections/About";
import Tech from "@/sections/Tech";
import Experience from "@/sections/Experience";
import FAQ from "@/components/FAQ";
import { EmailCTA } from "@/components/EmailCTA";

const AboutMe = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero3D />
        <About />
        <Experience />
        <Certificate />
        <Tech />
        <FAQ faqs={aboutUsFAQs} title="Common Questions" />
        <EmailCTA />
        <Footer />
      </div>
    </main>
  );
};

export default AboutMe;
