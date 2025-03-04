"use client";
import React from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";

export function Experience() {
  const data: TimelineEntry[] = [
    {
      title: "Sherian Consultants - Internship",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-6">
            During my internship at Sherian Consultants, I worked full-time as a
            Software Engineering Intern. I gained hands-on experience in
            developing and debugging software projects using JavaScript, React,
            and Python. I tackled challenging tasks such as enhancing system
            architecture, conducting performance testing, and optimizing
            database management and API integrations. This role sharpened my
            problem-solving skills and taught me the importance of collaboration
            and continuous learning in fast-paced development environments.
          </p>
        </div>
      ),
    },
    {
      title: "Sole Media Marketing Agency",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-6">
            As Co-Founder of Sole Media, I led numerous projects that focused on
            building engaging websites and implementing cutting-edge SEO
            strategies. My work involved developing digital marketing campaigns,
            leveraging marketing automation solutions, and optimizing online
            presence for various clients. Through these challenges, I learned to
            blend creativity with data-driven insights to drive traffic, boost
            conversions, and deliver tangible business growth.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Experience;
