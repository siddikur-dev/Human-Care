"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Search, SlidersHorizontal, ArrowRight } from "lucide-react";

const AllHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch data from public/hotels.json
  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching hotels:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* 1. Page Header Section */}
      <section className="bg-black pt-40 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            Discover Our <span className="text-primary-light italic">Curated Stays</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From beachfront resorts to mountain escapes, find the perfect place for your next journey.
          </p>
        </div>
      </section>

      {/* 2. Filter & Search Bar Section */}
      <section className="container mx-auto px-6 -translate-y-1/2">
        <div className="bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by city, hotel or resort..." 
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all">
            <SlidersHorizontal size={20} /> Filters
          </button>
        </div>
      </section>

      {/* 3. Hotel Grid Section */}
      <section className="container mx-auto px-6 py-10">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[400px] bg-gray-200 animate-pulse rounded-4xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="group bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Wrapper */}
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={hotel.image} 
                    alt={hotel.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold">{hotel.rating}</span>
                  </div>
                </div>

                {/* Content Wrapper */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    <MapPin size={14} /> {hotel.location}
                  </div>
                  <h3 className="text-2xl font-black text-text-dark mb-4 group-hover:text-primary transition-colors">
                    {hotel.name}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div>
                      <span className="text-sm text-text-muted block">Starting from</span>
                      <span className="text-xl font-black text-text-dark">৳{hotel.price}</span>
                      <span className="text-xs text-text-muted"> / night</span>
                    </div>
                    <Link 
                      href={`/hotel/${hotel.id}`} 
                      className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Promotional Banner (Color Relevant Section) */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-linear-to-r from-primary to-blue-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-white shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Become a Member & <br /> Get 15% Off</h2>
              <p className="text-white/80 text-lg mb-8">Join the Temp House Elite club to unlock secret prices and special amenities on your first booking.</p>
              <button className="bg-white text-primary px-10 py-4 rounded-full font-black hover:bg-gray-100 transition-all">Sign Up Free</button>
            </div>
            <div className="hidden md:block w-64 h-64 border-8 border-white/10 rounded-full animate-pulse"></div>
          </div>
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </section>
    </main>
  );
};

export default AllHotels;