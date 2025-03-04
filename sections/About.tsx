import React from "react";
import { motion } from "framer-motion";
import { AboutItem } from "@/types";


const aboutItems: AboutItem[] = [
  {
    title: "Full-Stack Development",
    description:
      "I build robust, scalable applications using modern frameworks and best practices to deliver seamless, end-to-end solutions that power your business growth.",
    imgUrl: "/about1.png",
  },
  {
    title: "Web Design",
    description:
      "I create visually stunning, user-friendly websites that not only capture your brand's essence but also provide an engaging experience for your audience.",
    imgUrl: "/about2.png",
  },
  {
    title: "Digital Marketing",
    description:
      "I develop effective digital marketing strategies, combining analytics with creativity to boost your online presence, drive traffic, and increase conversions.",
    imgUrl: "/about3.png",
  },
  {
    title: "SEO Optimization",
    description:
      "I optimize websites for search engines, ensuring that your business ranks higher and reaches the right audience through smart, data-driven techniques.",
    imgUrl: "/about4.png",
  },
];

const About: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl sm:text-5xl font-bold text-center pt-20 italic">
        I Know That <span className="text-purple">Good Development</span>
        <br />
        means <span className="text-purple">Good Business</span>
      </h2>

      <div className="flex flex-wrap justify-center items-start mt-8">
        {aboutItems.map((about, index) => (
          <motion.div
            key={`${about.title}-${index}`}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="flex flex-col justify-start items-start m-8 w-[190px] min-[2000px]:w-[370px] min-[2000px]:mx-16"
          >
            <img
              alt={about.title}
              src={about.imgUrl}
              className="w-full h-[170px] min-[2000px]:h-[320px] rounded-[15px] object-cover"
            />
            <h2 className="mt-5 font-bold italic text-2xl text-purple">
              {about.title}
            </h2>
            <p className="mt-2 text-sm text-gray-300">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
