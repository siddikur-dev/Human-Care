"use client";
import React, { useState } from "react";
import { Button } from "../ui/button"; 
import { Menu, X, Search, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Nav links configuration
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "All Hotels", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    /* absolute positioning makes the navbar float over the hero content */
    <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-4 bg-transparent">
      {/* Glassmorphism container based on industry standards */}
      <nav className="mx-auto container backdrop-blur-xl bg-white/10 border border-white/20 rounded-4xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-8 py-3">
          
          {/* Brand Logo with primary and secondary color concept */}
          <div className="text-2xl font-bold text-primary tracking-tight">
            Temp <span className="text-secondary">spa</span>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-white/90 hover:text-secondary transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>


          {/* Mobile menu trigger */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown with blur effect */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-black/60 backdrop-blur-3xl rounded-b-4xl",
          isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        )}>
          <div className="flex flex-col p-8 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/90 hover:text-secondary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;