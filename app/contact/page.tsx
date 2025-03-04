"use client";
import Contact from "@/components/Contact";

const ContactMe = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Contact />
      </div>
    </main>
  );
};

export default ContactMe;
