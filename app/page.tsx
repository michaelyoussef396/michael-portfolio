"use client";
import Hero from "@/sections/Hero";
import Grid from "@/sections/Grid";
import Clients from "@/sections/Clients";
import Approach from "@/sections/Approach";
import RecentProjects from "@/sections/RecentProjects";
import { Benefits } from "@/sections/Benefits";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Benefits />
        <Clients />
        <Approach />
      </div>
    </main>
  );
};

export default Home;
