"use client";
import React from "react";
// Next.js এর ডিফল্ট Link ইমপোর্ট করা হয়েছে
import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react"; // Note: ensure lucide-react is installed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Featured Hotels", href: "/all-hotels" },
      { name: "Safety & Trust", href: "/safety" },
      { name: "Testimonials", href: "/reviews" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-black tracking-tighter text-text-dark">
              TEMP <span className="text-primary">SPA</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Bangladesh`s premier platform for handpicked premium spa hotels. 
              Built for comfort and reliability in every stay.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-text-dark mb-6 text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {/* Changed 'to' to 'href' for Next.js Link */}
                  <Link 
                    href={link.href} 
                    className="text-text-muted hover:text-primary transition-colors flex items-center group gap-1"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-text-dark mb-6 text-lg">Support</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Card - Using your custom bg-linear-to-b */}
          <div className="bg-linear-to-b from-primary/5 to-transparent p-8 rounded-[2rem] border border-primary/10">
            <h4 className="font-bold text-text-dark mb-6 text-lg">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <p className="text-sm text-text-muted font-medium">Gohail, Rajshahi Division, Bangladesh</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <p className="text-sm text-text-muted font-medium">+880 1234-567890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <p className="text-sm text-text-muted font-medium">hello@tempspa.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-text-muted">
          <p>© {currentYear} Temp House. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;