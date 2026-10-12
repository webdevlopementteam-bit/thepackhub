import Environmental_Sustainability from "@/sections/Environmental_Sustainability";
import Feature from "@/sections/Feature";
import HeroSection from "@/sections/Hero";
import HomeFaqs from "@/sections/HomeFaqs";
import Innovation from "@/sections/Innovation";
import NewsTrends from "@/sections/NewsAndTrend";
import PackHub from "@/sections/PackHub";
import SolutionAndServices from "@/sections/SolutionAndServices";
import WeAreWorking from "@/sections/WeAreWorking";
import React from "react";

export const metadata = {
  title: "The Pack Hub - Best Packaging Solutions Company in India",
  description:
    "The Pack Hub is a packaging solutions company in India. Food-safe paper cups, cake boxes, wrapping paper & more with custom printing and bulk supply. Get a quote!",
  keywords: [
    "The Pack Hub",
    "Best Packaging Solutions Company in India",
    "Packaging Company in India",
  ],
  alternates: {
    canonical: "/",
  },
};

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
      <HomeFaqs />
    </>
  );
}

export default page;
