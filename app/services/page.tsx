"use client";
import HeroVid from "@/components/HeroVid";
import ServicesCarousel from "@/sections/ServicesCarousel";
const Services = () => {
  return (
    <main className="relative overflow-hidden bg-black-100 w-full h-full">
      <HeroVid
        videoSrc="/services.mp4"
        subtitle="Innovative. Tailored. Reliable."
        title="Elevate Your"
        highlight="Services"
      />
      <ServicesCarousel />
    </main>
  );
};

export default Services;
