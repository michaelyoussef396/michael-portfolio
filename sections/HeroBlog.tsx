"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroBlog: React.FC = () => {
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
      {/* Video Background */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        src="/blog.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/video-poster.jpg"
        style={{ backgroundColor: "#000000" }}
      />

      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Container */}
      <div className="relative z-[2] flex flex-col items-center justify-center text-center max-w-[90%] px-5 sm:px-20 mt-[100px]">
        {/* Blog Label */}
        <div className="mb-4 px-5 py-2 bg-blue-500 backdrop-blur-md border border-white/10 rounded-full text-white uppercase text-sm font-bold italic tracking-wide">
          Insights, Stories & Knowledge
        </div>

        {/* Main Hero Text */}
        <h1 className="text-white text-3xl font-raleway font-bold text-[9vw] sm:text-[7vw] leading-[1.2] uppercase">
          Exploring Ideas & <span className="text-blue-400 font-bold italic">Sharing Perspectives</span> One Post at a Time
        </h1>
      </div>
    </motion.section>
  );
};

export default HeroBlog;
