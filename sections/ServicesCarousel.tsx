"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";

export function ServicesCarousel() {
  const cards = servicesData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Elevate Your <span className="text-purple">Digital Presence.</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const servicesData = [
  {
    category: "Web Development and Design",
    title: "Custom, Responsive Websites",
    src: "/service1.png",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-base md:text-lg font-sans max-w-3xl mx-auto">
          I build custom, responsive websites that seamlessly blend cutting-edge
          design with robust functionality. By understanding your brand and
          target audience, I create sites that not only look stunning but also
          perform flawlessly across all devices. Every project is optimized for
          speed, accessibility, and user engagement, ensuring that your online
          presence stands out in today&apos;s competitive market.
        </p>
        <a href="/services/web-development-and-design">
          <MagicButton
            title="Learn More"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    ),
  },
  {
    category: "SEO & Digital Marketing",
    title: "Boost Your Visibility",
    src: "/serrvice2.png",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-base md:text-lg font-sans max-w-3xl mx-auto">
          Enhance your online presence with a comprehensive SEO and digital
          marketing strategy designed to drive targeted traffic and increase
          conversions. I utilize in-depth keyword research, on-page
          optimization, and compelling content creation to improve search
          rankings and brand visibility. With a focus on measurable results, my
          approach ensures sustainable growth and a strong competitive edge.
        </p>
        <a href="/services/seo-digital-marketing">
          <MagicButton
            title="Learn More"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    ),
  },
  {
    category: "Full-Stack App Development",
    title: "Robust Backend Solutions",
    src: "/service3.jpg",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-base md:text-lg font-sans max-w-3xl mx-auto">
          Leveraging modern frameworks and best practices, I develop full-stack
          applications that are both scalable and secure. From API design and
          database integration to dynamic front-end interfaces, every solution
          is crafted to deliver exceptional performance and reliability. My
          focus on clean, maintainable code ensures that your digital products
          are built to grow with your business.
        </p>
        <a href="/services/full-stack-app-development">
          <MagicButton
            title="Learn More"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    ),
  },
  {
    category: "AI & Automation",
    title: "Intelligent, Automated Solutions",
    src: "/services5.jpg",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-base md:text-lg font-sans max-w-3xl mx-auto">
          Transform your business processes with intelligent AI and automation
          solutions that boost efficiency and innovation. I develop systems that
          streamline repetitive tasks, provide data-driven insights, and empower
          you to make smarter decisions. My solutions are designed to integrate
          seamlessly with your existing workflows, helping you stay ahead in a
          rapidly evolving digital landscape.
        </p>
        <a href="/services/ai-automation">
          <MagicButton
            title="Learn More"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    ),
  },
  {
    category: "Email Marketing",
    title: "Automated, Targeted Campaigns",
    src: "/service3.jpg",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-base md:text-lg font-sans max-w-3xl mx-auto">
          Engage your audience with personalized email marketing campaigns
          designed to drive results. I craft tailored strategies combining
          compelling copy, eye-catching design, and data-driven insights to
          nurture leads and build lasting customer relationships. My approach
          ensures that every email not only resonates with your audience but
          also contributes to your overall growth and ROI.
        </p>
        <a href="/services/email-marketing">
          <MagicButton
            title="Learn More"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    ),
  },
];

export default ServicesCarousel;
