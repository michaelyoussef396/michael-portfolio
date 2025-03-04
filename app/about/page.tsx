"use client";
import Certificate from "@/sections/Certificate";
import Hero3D from "@/sections/Hero3D";
import About from "@/sections/About";
import Tech from "@/sections/Tech";
import Experience from "@/sections/Experience";

const AboutMe = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero3D />
        <About />
        <Experience />
        <Certificate />
        <Tech />
      </div>
    </main>
  );
};

export default AboutMe;
