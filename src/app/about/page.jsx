"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Utensils,
  Map,
  Waves,
  Star
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Verified Hotels", value: 850, suffix: "+" },
    { label: "Elite Members", value: 12, suffix: "k+" },
    { label: "Global Locations", value: 45, suffix: "+" },
    { label: "Guest Satisfaction", value: 99, suffix: "%" },
  ];

  const features = [
    {
      title: "World-Class Amenities",
      desc: "Access to private pools, gourmet dining, and award-winning spa facilities.",
      icon: <Utensils className="" size={24} />,
    },
    {
      title: "Handpicked Stays",
      desc: "Every hotel is personally visited and verified for the highest standards of luxury.",
      icon: <Map className="" size={24} />,
    },
    {
      title: "Seamless Relaxation",
      desc: "Effortless check-ins and dedicated concierge services for your peace of mind.",
      icon: <Waves className="" size={24} />,
    },
  ];

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      {/* 1. Immersive Hero - Full Screen Impact */}
      <section className="relative lg:h-[119vh] max-w-7xl:h-[102vh]  w-full overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600" 
          alt="Luxury Resort Panorama" 
          fill 
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 text-primary-light mb-4">
                <Star size={18} fill="currentColor" />
                <span className="uppercase tracking-[0.3em] text-xs font-bold">Bangladesh`s Premier Luxury Platform</span>
              </div>
              <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight drop-shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                Crafting <br /> Unforgettable <br /> <span className="text-primary-light italic">Memories.</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                We believe travel should be more than just a destination. It should be an effortless escape into comfort and elegance.
              </p>
              <Link href="/all-hotels" className="inline-flex items-center gap-3 bg-primary/90 hover:bg-primary text-white px-8 py-4 rounded-full font-bold transition-all duration-500 shadow-2xl">
                Explore The Collection <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Brand Philosophy - High Contrast Layout */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative h-150 rounded-4xl overflow-hidden shadow-2xl z-10">
              <Image 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800" 
                alt="Hospitality" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full z-0"></div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-8 leading-tight">
              A New Standard in <span className="text-primary">Hospitality.</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              Founded in 2024, Temp Spa was created to solve a common problem: the search for truly premium, group-friendly, and judgment-free stays. We don`t just list hotels; we curate environments where you can truly be yourself.
            </p>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-dark mb-2">{f.title}</h4>
                    <p className="text-text-muted text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Stats - Clean & Airy */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <h3 className="text-5xl md:text-6xl font-black text-text-dark mb-2 group-hover:text-primary transition-colors duration-500">
                  <CountUp end={stat.value} duration={3} decimals={stat.decimals || 0} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </h3>
                <p className="text-xs font-bold text-text-muted uppercase tracking-[0.3em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience Gallery Concept */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6 tracking-tighter">Your Stay, Your Story.</h2>
            <p className="text-text-muted max-w-2xl mx-auto italic text-lg">The best stories are found between the pages of a passport and the comfort of a luxury suite.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-175">
            <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden group shadow-xl">
               <Image src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200" alt="Spa" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-end p-12">
                  <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">Elite Spa Wellness</h4>
               </div>
            </div>
            <div className="space-y-6">
              <div className="relative h-84.5 rounded-[3rem] overflow-hidden group shadow-xl">
                <Image src="https://images.unsplash.com/photo-1544161515-436cead54573?w=600" alt="Dining" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                   <span className="text-white font-bold border-b-2 border-white tracking-widest uppercase text-xs">View Menu</span>
                </div>
              </div>
              <div className="relative h-84.5 rounded-[3rem] overflow-hidden group shadow-xl">
                <Image src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" alt="Room" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                   <span className="text-white font-bold border-b-2 border-white tracking-widest uppercase text-xs">View Suite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Invitation */}
      <section className="pb-32 container mx-auto px-6">
        <div className="relative bg-text-dark rounded-[4rem] p-16 md:p-32 text-center text-white overflow-hidden shadow-2xl">
            {/* Abstract Design Lines */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/10 skew-x-12 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter">Luxury Awaits Your <br /> Arrival.</h2>
              <p className="text-white/60 mb-12 max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
                Step into a world of curated comfort. Your perfect stay is just a click away.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link href="/all-hotels" className="bg-primary text-white px-12 py-5 rounded-full font-black hover:bg-white hover:text-primary transition-all shadow-xl">
                  Book Now
                </Link>
                <Link href="/contact" className="border border-white/30 text-white px-12 py-5 rounded-full font-black hover:bg-white hover:text-text-dark transition-all">
                  Contact Concierge
                </Link>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;