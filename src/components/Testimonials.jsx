"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

// Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Arif Rahman",
      role: "Travel Vlogger",
      text: "Temp spa has made finding luxury stays in Cox's Bazar so much easier. The verification process actually works!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    },
    {
      name: "Nusrat Jahan",
      role: "Software Engineer",
      text: "I was looking for a safe and quiet place for a weekend getaway. The secure messaging feature gave me peace of mind.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    },
    {
      name: "Tanvir Ahmed",
      role: "Business Consultant",
      text: "The premium feel of the platform matches the quality of the hotels they list. Best service for spa lovers in BD.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    },
    {
      name: "Farhana Islam",
      role: "Freelancer",
      text: "Great experience! I found an amazing boutique hotel in Sylhet that I wouldn't have discovered otherwise.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    },
    {
      name: "Sajid Hasan",
      role: "Photographer",
      text: "The interface is so clean and the hotel images are high quality. Highly recommended for premium bookings.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-text-dark tracking-tight"
          >
            What Our <span className="text-primary">Customers</span> Are Saying
          </motion.h2>
          <p className="text-text-muted mt-4 text-lg">Trusted by thousands of travelers across Bangladesh</p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // Infinite Loop
          speed={1000} // Speed of the transition (1 second)
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="pb-10">
              <div className="relative p-8 h-full rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-xl transition-all duration-500 group flex flex-col min-h-[320px]">
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote size={40} fill="currentColor" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-text-muted text-base leading-relaxed mb-8 italic grow">
                  `{review.text}`
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark text-sm">{review.name}</h4>
                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;