"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroProps } from "@/types";



const HeroVid: React.FC<HeroProps> = ({
  videoSrc,
  subtitle,
  title,
  highlight,
  overlayOpacity = "bg-black/40",
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        ease: [0.44, 0, 0.56, 1],
        duration: 0.5,
      }}
      className="relative w-full h-screen flex justify-center items-center overflow-hidden"
    >
      {/* Background Video */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{ backgroundColor: "#000000" }}
      />

      {/* Overlay with Dynamic Opacity */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>

      {/* Hero Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center text-center max-w-[90%] px-5 sm:px-20 mt-[100px]">
        {/* Subtitle */}
        <div className="mb-4 px-5 py-2 bg-purple backdrop-blur-md border border-white/10 rounded-full text-white uppercase text-sm font-bold italic tracking-wide">
          {subtitle}
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl font-raleway font-bold text-[9vw] sm:text-[7vw] leading-[1.2] uppercase">
          {title}{" "}
          <span className="text-purple font-bold italic">{highlight}</span>
        </h1>
      </div>
    </motion.section>
  );
};

export default HeroVid;
