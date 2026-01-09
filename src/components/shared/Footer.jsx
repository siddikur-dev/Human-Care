import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      {/* Newsletter */}
      <div className="bg-blue-50 py-12 px-10 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h4 className="text-2xl font-bold text-heading">Stay in the loop</h4>
          <p className="text-gray-500 text-sm">
            Get early access to new listings and moving tips.
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-3 rounded-lg border border-gray-200 w-72"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
            Join Now
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-16">
        <div>
          <h5 className="font-bold mb-4">CityStay</h5>
          <p className="text-gray-400 text-sm">
            Making urban transitions simple for global citizens.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-4">Company</h5>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Support</h5>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>Help Center</li>
            <li>Safety</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="flex gap-4">
          {/* Social Icons Placeholder */}
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
