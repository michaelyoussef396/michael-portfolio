"use client";
import Certificate from "@/components/Certificate";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Experience from "@/components/Experience";

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
