"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import {
  Star,
  MapPin,
  Search,
  SlidersHorizontal,
  ArrowRight,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const AllHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching hotels:", err);
        setLoading(false);
      });
  }, []);

  // Combined Search & Price Filter Logic
  useEffect(() => {
    const results = hotels.filter((hotel) => {
      const matchesSearch =
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = hotel.dailyPrice <= maxPrice;
      return matchesSearch && matchesPrice;
    });
    setFilteredHotels(results);
  }, [searchQuery, maxPrice, hotels]);

  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* 1. Brand Themed Header (Using Primary Colors) */}
      <section className="bg-linear-to-br from-primary via-primary/90 to-orange-600 pt-44 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Sparkles size={14} className="text-white" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">
              Premium Collection 2026
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.85]">
            Find Your <span className="italic opacity-80">Royal</span> <br />{" "}
            Escape
          </h1>
        </div>
      </section>

      {/* 2. Responsive Search & Price Filter Container */}
      <section className="container mx-auto px-6 -translate-y-1/2 relative z-20">
        <div className="bg-white p-4 md:p-6 rounded-[2.5rem] shadow-2xl border border-primary/10 flex flex-col lg:flex-row items-center gap-6">
          {/* Location Search */}
          <div className="relative flex-1 w-full group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-primary"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by hotel or location (e.g. Udaipur)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>

          {/* Compact Price Filter */}
          <div className="w-full lg:w-72 px-4">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                Max Price
              </span>
              <span className="text-sm font-black text-primary font-mono">
                ৳{maxPrice}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="15000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <button className="hidden lg:flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-orange-600 transition-all shadow-lg shadow-primary/20">
            <SlidersHorizontal size={18} /> Apply
          </button>
        </div>
      </section>

      {/* 3. Hotel Grid */}
      <section className="container mx-auto px-6 py-4">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[450px] bg-gray-100 animate-pulse rounded-[3rem]"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredHotels.map((hotel, index) => (
              <motion.article
                key={hotel.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover="cardHover"
                className="group relative bg-white rounded-4xl p-3 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <figure className="relative h-56 w-full overflow-hidden rounded-3xl bg-gray-100">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star
                      size={12}
                      className="fill-orange-500 text-orange-500"
                    />
                    <span className="text-[10px] font-black text-text-dark">
                      {hotel.rating}
                    </span>
                  </div>
                </figure>

                {/* Content Details */}
                <div className="px-3 py-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-black text-base text-text-dark group-hover:text-primary transition-colors line-clamp-1 uppercase">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1 text-text-muted text-[10px] font-bold uppercase tracking-widest">
                      <MapPin size={12} className="text-primary" />
                      <span className="line-clamp-1">{hotel.location}</span>
                    </div>
                  </div>

                  {/* Pricing and Animated Button */}
                  <div className="flex justify-between items-center mt-5 pt-4 border-t border-dashed border-gray-100">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-text-muted block">
                        Starting from
                      </span>
                      <p className="font-black text-lg text-text-dark">
                        ৳{hotel.dailyPrice.toLocaleString()}
                        <span className="text-[10px] font-medium text-text-muted">
                          {" "}
                          /day
                        </span>
                      </p>
                    </div>

                    {/* Animated Button */}
                    <motion.div
                      variants={{
                        cardHover: {
                          backgroundColor: "var(--color-primary)",
                          color: "#fff",
                        },
                      }}
                      className="h-10 w-10 rounded-2xl bg-gray-50 text-text-dark flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white"
                    >
                      <motion.div
                        variants={{
                          initial: { rotate: 0 },
                          cardHover: { rotate: 45 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <ArrowUpRight size={20} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* No Results Fallback */}
        {!loading && filteredHotels.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[4rem] border border-dashed border-gray-200">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-300" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 uppercase">
              No Stays Found
            </h3>
            <p className="text-gray-400 mt-2">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default AllHotels;
