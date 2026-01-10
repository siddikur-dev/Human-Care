"use client";
import React from "react";
import { Star, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import hotelsData from "../../public/hotels.json";
import Image from "next/image";

const FeaturesHotel = () => {
  // Get the first 6 hotels for the featured list
  const featuredHotels = hotelsData.slice(0, 8);

  return (
    <section
      className="py-20 px-6 md:px-10 container mx-auto"
      aria-labelledby="featured-hotels-title"
    >
      {/* Section Header with Animation */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="featured-hotels-title"
          className="text-3xl md:text-5xl font-black text-text-dark tracking-tight"
        >
          Our Featured <span className="text-primary">Hotels</span>
        </motion.h2>
        <p className="text-text-muted mt-3 text-lg">
          Handpicked premium stays just for you
        </p>
      </div>

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredHotels.map((hotel, index) => (
          <motion.article
            key={hotel.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-4xl p-3 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Image Container with Next.js Optimization */}
            <figure className="relative h-60 w-full overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Floating Rating Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={12} className="fill-secondary text-secondary" />
                <span className="text-[10px] font-black text-text-dark">
                  {hotel.rating}
                </span>
              </div>
            </figure>

            {/* Content Details */}
            <div className="px-4 py-5">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg text-text-dark group-hover:text-primary transition-colors line-clamp-1">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-1 text-text-muted text-xs">
                  <MapPin size={12} className="text-primary" />
                  <span className="line-clamp-1">{hotel.location}</span>
                </div>
              </div>

              {/* Pricing and Animated Button */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-dashed border-gray-200">
                <div>
                  <span className="text-[10px] uppercase font-bold text-text-muted">
                    Starting from
                  </span>
                  <p className="font-black text-xl text-text-dark">
                    ${hotel.monthlyPrice.toLocaleString()}
                    <span className="text-[10px] font-medium text-text-muted">
                      {" "}
                      /mo
                    </span>
                  </p>
                </div>

                {/* Modern Animated Circular Button */}
                <motion.button
                  whileHover="hovered"
                  className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <motion.div
                    variants={{
                      initial: { rotate: 0, scale: 1 },
                      hovered: { rotate: 45, scale: 1.1 }, // Icon rotates to face straight up
                    }}
                    transition={{ stiffness: 400, damping: 10 }}
                  >
                    <ArrowUpRight size={22} />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Footer CTA Button */}
      <div className="mt-16 text-center">
        <a
          href="/all-hotels"
          className="group inline-flex items-center gap-3 bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-primary/30 cursor-pointer"
        >
          Explore All Hotels
          {/* Icon Container */}
          <div className="flex items-center justify-center  duration-300 group-hover:rotate-45 ">
            <ArrowUpRight size={22} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default FeaturesHotel;
