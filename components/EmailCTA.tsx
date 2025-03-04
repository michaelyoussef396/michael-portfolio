"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { placeholders } from "@/data";

export function EmailCTA() {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Email Input:", e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-[40rem] flex flex-col justify-center items-center px-4">
      <h2
        className="
          mb-6
          sm:mb-10
          md:mb-12
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          italic
          text-purple
          text-center
        "
      >
        Stay in the Loop
      </h2>

      <p
        className="
          mb-10
          sm:mb-16
          md:mb-20
          text-base
          sm:text-lg
          md:text-xl
          text-center
          max-w-xl
          text-gray-700
          dark:text-gray-300
        "
      >
        Join my mailing list and be the first to know about new projects, insider
        tips, and how I&apos;m using cutting-edge technology to build innovative
        solutions.
      </p>

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
