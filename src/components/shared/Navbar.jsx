import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary tracking-tight">
        Temp Hostel
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-primary transition">
          Home
        </a>
        <a href="#" className="hover:text-primary transition">
          All Hotels
        </a>
        <a href="#" className="hover:text-primary transition">
          About
        </a>
        <a href="#" className="hover:text-primary transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
