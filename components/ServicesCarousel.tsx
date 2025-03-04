"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

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
    category: "Web Development & Design",
    title: "Custom, Responsive Websites",
    src: "/service1.png",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-lg font-sans max-w-3xl mx-auto">
          A strong online presence starts with a well-designed, functional website. We specialize in crafting 
          custom, high-performance websites that blend aesthetics with seamless functionality.
        </p>
        <ul className="text-white text-lg font-sans max-w-3xl mx-auto list-disc pl-6">
          <li>✅ Custom Framer, React, and Next.js development</li>
          <li>✅ Mobile-first & fully responsive designs</li>
          <li>✅ Optimized for speed, SEO, and accessibility</li>
          <li>✅ Strategic UI/UX design for maximum engagement</li>
          <li>✅ Scalable, easy-to-maintain websites</li>
        </ul>
        <p className="text-white text-lg font-sans max-w-3xl mx-auto">
          Whether you're launching a new website or redesigning an outdated one, our expertise guarantees a digital experience that drives business growth.
        </p>
      </div>
    ),
  },
  {
    category: "SEO & Digital Marketing",
    title: "Boost Your Visibility",
    src: "/service2.png",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-lg font-sans max-w-3xl mx-auto">
          In a crowded digital landscape, your brand needs to stand out. Our SEO & digital marketing strategies 
          ensure that your business reaches the right audience at the right time.
        </p>
        <ul className="text-white text-lg font-sans max-w-3xl mx-auto list-disc pl-6">
          <li>✅ Keyword research & on-page SEO for higher rankings</li>
          <li>✅ Technical SEO (site structure, speed, indexing fixes)</li>
          <li>✅ Content marketing & link-building for authority growth</li>
          <li>✅ Local SEO (Google My Business, maps, citations)</li>
          <li>✅ Social media & paid ad strategies</li>
        </ul>
        <p className="text-white text-lg font-sans max-w-3xl mx-auto">
          We integrate email marketing, paid ads, and conversion rate optimization (CRO) to generate leads and maximize your ROI.
        </p>
      </div>
    ),
  },
  {
    category: "Full-Stack App Development",
    title: "Scalable, High-Performance Web & Mobile Apps",
    src: "/service3.jpg",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-lg font-sans max-w-3xl mx-auto">
          We build end-to-end software solutions tailored to your needs. From complex web apps to enterprise software, 
          we develop scalable and reliable applications that grow with your business.
        </p>
        <ul className="text-white text-lg font-sans max-w-3xl mx-auto list-disc pl-6">
          <li>✅ Custom-built web & mobile apps</li>
          <li>✅ Backend architecture (Node.js, Python, SQL/NoSQL)</li>
          <li>✅ API integrations & automation workflows</li>
          <li>✅ Cloud deployment & security optimization</li>
          <li>✅ User-friendly, intuitive UI/UX</li>
        </ul>
      </div>
    ),
  },
  {
    category: "AI & Automation",
    title: "Intelligent Workflows, Smarter Business Operations",
    src: "/services5.jpg",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-lg font-sans max-w-3xl mx-auto">
          AI and automation aren’t just buzzwords—they’re essential for scaling businesses efficiently. 
          We create intelligent automation systems that enhance productivity, streamline operations, and provide 
          data-driven insights.
        </p>
        <ul className="text-white text-lg font-sans max-w-3xl mx-auto list-disc pl-6">
          <li>✅ AI-powered chatbots & virtual assistants</li>
          <li>✅ Automated data processing & reporting</li>
          <li>✅ Predictive analytics for smarter decision-making</li>
          <li>✅ CRM automation (email workflows, lead nurturing)</li>
          <li>✅ Marketing automation & customer engagement solutions</li>
        </ul>
      </div>
    ),
  },
  {
    category: "Email Marketing & Automation",
    title: "Targeted Campaigns That Drive Conversions",
    src: "/service4.jpg",
    content: (
      <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 space-y-6">
        <p className="text-white text-lg font-sans max-w-3xl mx-auto">
          Email remains one of the most profitable marketing channels, but success requires strategy, 
          personalization, and automation. We design and execute high-converting email campaigns that 
          engage your audience and turn leads into loyal customers.
        </p>
        <ul className="text-white text-lg font-sans max-w-3xl mx-auto list-disc pl-6">
          <li>✅ Automated email sequences for nurturing leads</li>
          <li>✅ Personalized drip campaigns for higher engagement</li>
          <li>✅ A/B testing for improved open & click rates</li>
          <li>✅ Data-driven email copy & design</li>
          <li>✅ CRM & workflow automation</li>
        </ul>
      </div>
    ),
  },
];

export default ServicesCarousel;
