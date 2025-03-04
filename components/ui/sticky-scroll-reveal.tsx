/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ServiceItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);

  // Use entire page scroll (no container)
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // For each card, define a 'breakpoint' based on index / cardLength
    const cardsBreakpoints = content.map((_, index) => index / cardLength);

    // Find the closest breakpoint to the current scroll progress
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Example background colors or gradients
  const backgroundColors = ["#0F172A", "#000000", "#1A1A1A"]; // e.g. slate-900, black, neutral-900
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #f59e0b)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    // Full screen height to allow scrolling
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="w-full h-[200vh] flex justify-center items-start relative overflow-hidden"
    >
      {/* Left side text container (scrolling with page) */}
      <div className="w-1/2 h-full py-20 pl-10 pr-4">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className="mb-24 transition-opacity duration-500"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-2xl font-bold text-slate-900"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="mt-4 text-base text-slate-700 max-w-sm"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Right side sticky content */}
      <div className="w-1/2 h-full sticky top-0 flex items-center justify-center">
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "h-[300px] w-[400px] rounded-md overflow-hidden shadow-lg p-4",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
