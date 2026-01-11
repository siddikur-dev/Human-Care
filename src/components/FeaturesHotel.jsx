"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AllHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default"); // default, low-to-high, high-to-low

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  // Filtering & Sorting Logic
  useEffect(() => {
    let result = [...hotels];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price Sort filter
    if (sortOrder === "low-to-high") {
      result.sort((a, b) => a.dailyPrice - b.dailyPrice);
    } else if (sortOrder === "high-to-low") {
      result.sort((a, b) => b.dailyPrice - a.dailyPrice);
    }

    setFilteredHotels(result);
  }, [searchQuery, sortOrder, hotels]);

  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* 1. Page Header (Primary Color Theme) */}
      <section className="bg-primary pt-32 pb-24 px-6 text-center">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            All <span className="italic opacity-80">Premium</span> Stays
          </motion.h1>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto">
            Explore our entire collection of elite hotels and bachelor-friendly resorts.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <section className="container mx-auto px-6 -translate-y-1/2 relative z-10">
        <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          
          {/* Sorting Dropdown */}
          <div className="relative w-full md:w-64">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none border-none font-bold text-text-dark appearance-none cursor-pointer"
            >
              <option value="default">Sort by: Recommended</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
            <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>
      </section>

      {/* 3. 4-Column Grid */}
      <section className="container mx-auto px-6">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-[400px] bg-gray-200 animate-pulse rounded-4xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
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
                      <Star size={12} className="fill-orange-500 text-orange-500" />
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
                          <span className="text-[10px] font-medium text-text-muted"> /day</span>
                        </p>
                      </div>

                      {/* Animated Button */}
                      <motion.div
                        variants={{
                          cardHover: { backgroundColor: "var(--color-primary)", color: "#fff" }
                        }}
                        className="h-10 w-10 rounded-2xl bg-gray-50 text-text-dark flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white"
                      >
                        <motion.div
                          variants={{
                            initial: { rotate: 0 },
                            cardHover: { rotate: 45 }
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <ArrowUpRight size={20} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredHotels.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-black text-text-dark">No Hotels Found!</h3>
            <p className="text-text-muted mt-2">Try searching for something else.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default AllHotels;