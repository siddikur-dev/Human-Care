import FeaturesHotel from "@/Components/FeaturesHotel";
import SafetySection from "@/Components/SafetySection";
import Hero from "@/Components/Shared/Hero";
import Testimonials from "@/Components/Testimonials";
import WhyChooseUs from "@/Components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <FeaturesHotel/>
      <SafetySection/>
      <WhyChooseUs />
      <Testimonials/>
    </div>
  );
};

export default page;
