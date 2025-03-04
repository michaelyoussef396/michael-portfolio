"use client";
import HeroVid from "@/components/HeroVid";

const Portfolio = () => {
  return (
    <main className="overflow-hidden bg-black-100 w-full h-full">
      <HeroVid
        videoSrc="/portfolio.mp4"
        subtitle="Bold, Creative, & Unforgettable"
        title="Shaping My"
        highlight="Portfolio"
        overlayOpacity="bg-black/30"
      />
    </main>
  );
};

export default Portfolio;
