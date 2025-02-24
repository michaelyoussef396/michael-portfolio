"use client";

import React from "react";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "@/components/Cube";
import Rings from "@/components/Rings";
import ReactLogo from "@/components/ReactLogo";
import MagicButton from "@/components/MagicButton";
import Target from "@/components/Target";
import CanvasLoader from "@/components/Loading";
import HeroCamera from "@/components/HeroCamera";
import { calculateSizes } from "@/constants/index";
import { HackerRoom } from "@/components/HAckerRoom";

// Optional icon if you want an icon in the MagicButton
import { FaLocationArrow } from "react-icons/fa6";

const Hero3D = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* Text Section */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space items-center gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am <span className="text-purple">Michael Youssef</span>{" "}
          <span className="waving-hand">👋</span>
        </p>
        {/* Larger purple text for “Building Products & Brands” */}
        <p className="hero_tag text-4xl sm:text-5xl md:text-6xl text-purple text-center font-bold">
          Building Products &amp; Brands
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Button Section */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
        <a href="#about">
          <MagicButton
            title="Let's work together"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="md:w-60"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero3D;
