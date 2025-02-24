"use client";

import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Certificate from "@/sections/Certificate";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";
import About from "@/sections/About";
import Tech from "@/sections/Tech";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero3D />
        <About />
        <Certificate />
        <Tech />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
