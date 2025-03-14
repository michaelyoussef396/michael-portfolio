"use client"
import { motion } from "framer-motion";
import { styles } from "@/styles";
import { ComputersCanvas } from "./canvas";
import { useEffect } from "react";
import * as THREE from "three";
const Hero3D = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    document.body.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      console.log("Cleaning up WebGL renderer");
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ml-6">
          <div className="w-5 h-5 rounded-full bg-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="ml-4">
          <h1 className={`${styles.heroHeadText} text-white font-bold italic`}>
            Hi, I&apos;m <span className="text-purple">Michael Youssef</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white text-6sm font-bold italic`}
          >
            I build robust{" "}
            <span className="text-purple"> full-stack solutions </span> and
            create digital marketing strategies{" "}
            <br className="sm:block hidden" />
            that fuel{" "}
            <span className="text-purple"> your business growth.</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute w-full flex justify-center items-center">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
