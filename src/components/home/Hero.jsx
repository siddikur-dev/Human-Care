'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const careServices = [
    {
      id: 1,
      title: 'Expert Child Care',
      desc: 'Trusted babysitters for your little ones.',
      img: '/images/01.jpg', // নিশ্চিত করুন এই ফাইলটি public/images ফোল্ডারে আছে
    },
    {
      id: 2,
      title: 'Compassionate Elderly Care',
      desc: 'Quality support for your senior family members.',
      img: '/images/02.jpg',
    },
    {
      id: 3,
      title: 'Special Medical Support',
      desc: 'Dedicated caregivers for special needs at home.',
      img: '/images/03.jpg',
    },
  ];

  return (
    <div className="w-full h-[600px] relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'} // Shader এর বিকল্প হিসেবে Fade সবচেয়ে বেশি লাক্সারি লাগে
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="h-full w-full rounded-2xl overflow-hidden"
      >
        {careServices.map((service) => (
          <SwiperSlide key={service.id} className="relative">
            {/* Background Image with Zoom Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10 md:px-20">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {service.desc}
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
                    Find a Caregiver
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold transition-all">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Slow Zoom Effect */}
      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 10s infinite alternate linear;
        }
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(0,0,0,0.2);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  );
};

export default Hero;