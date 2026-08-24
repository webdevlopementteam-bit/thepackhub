import Environmental_Sustainability from "@/sections/Environmental_Sustainability";
import Feature from "@/sections/Feature";
import HeroSection from "@/sections/Hero";
import Innovation from "@/sections/Innovation";
import NewsTrends from "@/sections/NewsAndTrend";
import PackHub from "@/sections/PackHub";
import SolutionAndServices from "@/sections/SolutionAndServices";
import WeAreWorking from "@/sections/WeAreWorking";
import React from "react";

function page() {
  return (
    <>
      <HeroSection />
      <SolutionAndServices />
      <Feature />
      <PackHub />
      <Innovation />
      <Environmental_Sustainability />
      <WeAreWorking/>
      <NewsTrends />
    </>
  );
}

export default page;
