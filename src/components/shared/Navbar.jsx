"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // এটা তোমার Auth context থেকে আসবে

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
              Care<span className="text-emerald-500">Ease</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About Us
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  href="/my-bookings"
                  className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                  My Bookings
                </Link>
                <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition">
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-700 font-medium hover:text-blue-600"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-lg"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <Link
              href="/"
              className="block text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md"
            >
              Services
            </Link>
            {isLoggedIn && (
              <Link
                href="/my-bookings"
                className="block text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md"
              >
                My Bookings
              </Link>
            )}
            <div className="pt-4 border-t border-gray-100">
              {!isLoggedIn ? (
                <>
                  <Link
                    href="/login"
                    className="block text-center text-gray-700 py-2"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block text-center bg-blue-600 text-white py-3 rounded-lg mt-2"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button className="w-full bg-red-500 text-white py-3 rounded-lg">
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
