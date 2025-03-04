"use client";

import HeroVid from "@/components/HeroVid";

const blog = () => {
  return (
    <main className="overflow-hidden bg-black-100 w-full h-full">
      <HeroVid
        videoSrc="/blog.mp4"
        subtitle="Insights, Stories & Knowledge"
        title="Exploring Ideas &"
        highlight="Sharing Perspectives"
      />
    </main>
  );
};

export default blog;
