"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="relative w-full px-4 py-20 bg-black-100 text-white font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 italic text-center">
          {title} <span className="text-purple">FAQs</span>
        </h2>

        {/* FAQ Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-neutral-700 pb-4">
              {/* Question Toggle */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left focus:outline-none group"
              >
                <span className="text-base md:text-lg font-semibold group-hover:text-purple transition-colors">
                  {faq.question}
                </span>
                <div className="ml-2 flex items-center justify-center text-purple group-hover:scale-110 transition-transform">
                  {activeIndex === index ? <IconMinus className="h-5 w-5" /> : <IconPlus className="h-5 w-5" />}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-sm md:text-base text-neutral-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
