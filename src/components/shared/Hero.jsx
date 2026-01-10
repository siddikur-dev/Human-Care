"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils"; 
import { Button } from "../ui/button";

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      title: "Find Comfortable Hotels Before You Move",
      desc: "Clean, safe, and bachelor-friendly stays in the heart of the city.",
      alt: "Modern luxury hotel lobby",
    },
    {
      image: "https://i.ibb.co.com/B2WNj1S5/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash-1.jpg",
      title: "Affordable Luxury for Everyone",
      desc: "Experience world-class service without breaking the bank.",
      alt: "Vojtech Bruzek hotel room",
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      title: "Premium Living Experience Awaits",
      desc: "Hand-picked hotels with top-notch amenities for young professionals.",
      alt: "High-end hotel room",
    },
    {
      image: "https://i.ibb.co.com/S7xtBphH/point3d-commercial-imaging-ltd-5-BV56-Sdv-Lmo-unsplash-1.jpg",
      title: "Your Home Away From Home",
      desc: "Stay in style and comfort with our premium curated selections.",
      alt: "Commercial imaging hotel view",
    },
  ];

  // Carousel Logic
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-[0_0_100%] min-w-0 h-[70vh] md:h-[85vh] lg:h-[90vh] min-h-[500px]"
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/80" />

            {/* Content Container */}
            <div className="container relative h-full mx-auto px-6 md:px-12 flex items-center">
              <div className="max-w-3xl space-y-6">
                <div className="space-y-4">
                  <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight drop-shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-lg md:text-xl font-medium max-w-xl drop-shadow-md opacity-90">
                    {slide.desc}
                  </p>
                </div>
                
                {/* Shadcn UI Buttons with Cursor Pointer */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  
                  <Button 
                    size="lg" 
                    className=" btn-primary rounded-full px-8 h-12 text-md font-semibold cursor-pointer active:scale-95 transition-transform "
                  >
                    Explore Hotels
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full px-8 h-12 text-md font-semibold bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm cursor-pointer active:scale-95 transition-transform"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer shadow-sm",
              i === selectedIndex 
                ? "w-10 bg-white" 
                : "w-2.5 bg-white/40 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;