import React from "react";

import { BallCanvas } from "@/components/canvas";

const Tech = () => {
  const technologies = [
    { name: "HTML 5", icon: "/html.png" },
    { name: "CSS 3", icon: "/css.png" },
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "React JS", icon: "/reactjs.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
    { name: "Three JS", icon: "/threejs.svg" },
    { name: "git", icon: "/git.png" },
    { name: "figma", icon: "/figma.png" },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
