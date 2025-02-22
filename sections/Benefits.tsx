import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function Benefits() {
  const features = [
    {
      title: "Crafted for Innovators",
      description:
        "Built with developers, entrepreneurs, and visionaries in mind—empowering you to turn bold ideas into reality.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless Experience",
      description:
        "From intuitive interfaces to smooth navigation, I ensure every project feels effortless for both you and your users.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprise charges. My straightforward plans keep things simple, so you can focus on growth.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Rock-Solid Reliability",
      description:
        "I design with uptime in mind, making sure your platform is always accessible—day or night.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Architecture",
      description:
        "Whether you’re launching a new startup or expanding an established brand, I build solutions that grow with you.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Always-On Support",
      description:
        "I’m here to help whenever you need it, offering quick responses and solutions to keep your project on track.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "I’m committed to delivering quality results. If you’re not happy, I’ll work with you until it’s right.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And Everything Else",
      description:
        "From SEO to AI-driven automation, I cover the extra touches that give your digital presence a competitive edge.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {/* Hover Overlay */}
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
