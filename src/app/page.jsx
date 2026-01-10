import FeaturesHotel from "@/Components/FeaturesHotel";
import SafetySection from "@/Components/SafetySection";
import Hero from "@/Components/Shared/Hero";
import WhyChooseUs from "@/Components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      {/* <WhyChooseUs /> */}
      <FeaturesHotel/>
      <SafetySection/>
    </div>
  );
};

export default page;
