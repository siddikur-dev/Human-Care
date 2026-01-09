import React from "react";

const Hero = () => {
  return (
    <section className="relative h-150 flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30"></div>
      </div>

      <div className="max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-6">
          Find your next home <br /> in the city.
        </h1>
        <p className="text-lg mb-8 opacity-90">
          Affordable, curated stays for students and young professionals.
          Flexible lease terms in the heart of the action.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-primary px-8 py-3 rounded-md font-bold hover:scale-105 transition">
            Explore Hotels
          </button>
          <button className="bg-white/20 backdrop-blur-md border border-white/30 px-8 py-3 rounded-md font-bold hover:bg-white/30 transition">
            How it works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
