import FeaturesHotel from "@/Components/FeaturesHotel";
import Hero from "@/Components/Shared/Hero";
import WhyChooseUs from "@/Components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      {/* <WhyChooseUs /> */}
      <FeaturesHotel/>
    </div>
  );
};

export default page;
