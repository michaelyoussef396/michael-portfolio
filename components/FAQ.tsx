"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What do I need to get started?",
      answer:
        "You’ll need a clear vision for your project, plus any content or branding materials you’d like to include. From there, I’ll guide you through the process.",
    },
    {
      question: "What kind of customizations are available?",
      answer:
        "I offer flexible design and development solutions—from custom layouts to advanced features like AI-driven components, SEO optimization, and more.",
    },
    {
      question: "How easy is it to add new content later?",
      answer:
        "I build each project with scalability in mind, so you can easily update text, images, or entire sections without breaking the design.",
    },
    {
      question: "Can I learn more about your money-back guarantee?",
      answer:
        "I stand by the quality of my work. If you’re not satisfied, I’ll collaborate with you until every detail is just right, ensuring your investment is worthwhile.",
    },
    {
      question: "What will the final cost be?",
      answer:
        "Pricing is transparent and tailored to your needs. Once we define the scope, you’ll receive a clear quote with no hidden fees or surprises.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="relative w-full px-4 py-20 bg-black-100 text-white font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 italic text-center">
          Frequently <span className="text-purple"> Asked Questions</span>
        </h2>

        {/* FAQ Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-700 pb-4"
            >
              {/* Question Toggle */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left focus:outline-none group"
              >
                <span className="text-base md:text-lg font-semibold group-hover:text-purple transition-colors">
                  {faq.question}
                </span>
                <div className="ml-2 flex items-center justify-center text-purple group-hover:scale-110 transition-transform">
                  {activeIndex === index ? (
                    <IconMinus className="h-5 w-5" />
                  ) : (
                    <IconPlus className="h-5 w-5" />
                  )}
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
                    <p className="mt-2 text-sm md:text-base text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
