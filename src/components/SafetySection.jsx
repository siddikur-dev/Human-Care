"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, MessageSquareLock, Lock } from "lucide-react";

const SafetySection = () => {
  const safetyFeatures = [
    {
      title: "Verified Hotels",
      description:
        "Every hotel listing is manually reviewed to ensure premium quality and authentic spa services.",
      icon: <ShieldCheck size={32} className="" />,
    },
    {
      title: "Profile Verification",
      description:
        "We verify member profiles so you can connect and book with real, reliable people on Temp spa.",
      icon: <UserCheck size={32} className="" />,
    },
    {
      title: "Secure Communication",
      description:
        "Discuss your requirements safely through our encrypted messaging before confirming your stay.",
      icon: <MessageSquareLock size={32} className="" />,
    },
    {
      title: "Privacy Protection",
      description:
        "Your personal data stays secure. We never share your information without your explicit permission.",
      icon: <Lock size={32} className="" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-gray-50/50">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-text-dark tracking-tight">
            Safety &<span className="text-primary"> Trust </span>
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-lg">
            Your peace of mind is our top priority. Temp spa is built with
            safety and trust at its core, so you can book with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              // Changed: initial scale is now 1 to avoid pop-in delay,
              // opacity handles the appearance
              initial={{ opacity: 0, scale: 1, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              // Transition modified for instant feel
              transition={{
                duration: 0.1,
                delay: index * 0.05, // Reduced delay for faster sequence
                ease: "easeOut",
              }}
              // Hover effect remains smooth
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              {/* Animated Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
