"use client";

import { navItems } from "@/data";

import Hero from "@/sections/Hero";
import Grid from "@/sections/Grid";
import Footer from "@/components/Footer";
import Clients from "@/sections/Clients";
import Approach from "@/sections/Approach";
import RecentProjects from "@/sections/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ServicesCarousel } from "@/sections/ServicesCarousel";
import { Benefits } from "@/sections/Benefits";
import FAQ from "@/components/FAQ";
import { EmailCTA } from "@/components/EmailCTA";
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <ServicesCarousel />
        <Benefits />
        <Clients />
        <Approach />
        <FAQ />
        <EmailCTA />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
