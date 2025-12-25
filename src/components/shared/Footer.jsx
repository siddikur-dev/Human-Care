import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-blue-600">
              Care<span className="text-emerald-500">Ease</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              We are committed to serving your loved ones. We are your trusted
              partner in finding and booking reliable caregivers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/service/baby-care"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Baby Care
                </Link>
              </li>
              <li>
                <Link
                  href="/service/elderly-care"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Elderly Service
                </Link>
              </li>
              <li>
                <Link
                  href="/service/sick-care"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Sick People Service
                </Link>
              </li>
              <li>
                <Link
                  href="/service/nursing"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Personal Nursing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Contact Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">📍</span> 123 Care Street, Dhaka, BD
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">📞</span> +880 1234 567 890
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✉️</span> support@careease.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CareEase. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
