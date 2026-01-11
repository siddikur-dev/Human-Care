"use client";
import React, { useState } from "react";
// Next.js Link ব্যবহার করা হয়েছে (Saved Preferences অনুযায়ী)
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Nav links configuration
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Hotels", href: "/all-hotels" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    /* absolute positioning makes the navbar float over the hero content */
    <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-4">
      {/* Container: Black background and White text applied for both mobile & desktop */}
      <nav className="mx-auto container  backdrop-blur-md  border bg-black  border-white/10 rounded-4xl shadow-2xl overflow-hidden transition-all duration-300">
        <div className="flex items-center  justify-between px-8 py-4 ">
          {/* Brand Logo */}
          <Link href="/" className="text-2xl font-black tracking-tighter text-black/60">
            TEMP <span className="text-primary">HOUSE</span>
          </Link>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center gap-10 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest hover:text-primary-light transition-all opacity-80 hover:opacity-100"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" cursor-pointer focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className="">
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black",
              isOpen ? "max-h-96 border-t border-white/5" : "max-h-0"
            )}
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-white/90 hover:text-primary-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
