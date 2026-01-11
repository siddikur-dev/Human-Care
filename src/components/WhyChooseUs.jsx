import React from "react";
import { UserPlus, Search, ShieldCheck, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const steps = [
    {
      id: "01",
      title: "Join the Elite",
      desc: "Create your profile in seconds. Access a curated world of premium stays and bachelor-friendly spaces.",
      icon: <UserPlus size={20} />,
      gradient: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500",
    },
    {
      id: "02",
      title: "Discover Freedom",
      desc: "Use our smart filters to find high-end hotels that welcome your lifestyle with open arms.",
      icon: <Search size={20} />,
      gradient: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
    },
    {
      id: "03",
      title: "Zero Judgment",
      desc: "Book with confidence. Our verified partners prioritize your privacy and group-friendly needs.",
      icon: <ShieldCheck size={20} />,
      gradient: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-500",
    },
    {
      id: "04",
      title: "Instant Escape",
      desc: "Get instant confirmation and step into luxury. Your next great story starts with a simple check-in.",
      icon: <Zap size={20} />,
      gradient: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Compact Heading */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1F2C] tracking-tighter uppercase leading-none">
            Seamless <span className="text-primary italic">Booking</span> Process
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Side: Steps 1 & 2 */}
          <div className="space-y-6">
            {steps.slice(0, 2).map((step) => (
              <div key={step.id} className="group relative bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${step.gradient} ${step.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <span className="absolute top-6 right-8 text-3xl font-black text-gray-100 group-hover:text-primary/10 transition-colors italic">
                  {step.id}
                </span>
                <h4 className="text-lg font-black text-[#1A1F2C] mb-2 uppercase tracking-tight">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center: Branding Circle */}
          <div className="hidden lg:flex justify-center relative">
            <div className="w-64 h-64 rounded-full border border-dashed border-primary/20 flex items-center justify-center p-4 animate-[spin_30s_linear_infinite]">
              <div className="w-full h-full rounded-full border border-primary/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-[#1A1F2C] rounded-full flex flex-col items-center justify-center text-center p-6 shadow-2xl">
                <span className="text-primary text-[8px] font-bold tracking-[0.4em] mb-1 uppercase">Lifestyle</span>
                <h3 className="text-white text-xl font-black tracking-tighter leading-none italic uppercase">Temp <br /> House</h3>
                <div className="mt-2 w-8 h-[1px] bg-primary/50"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Steps 3 & 4 */}
          <div className="space-y-6">
            {steps.slice(2, 4).map((step) => (
              <div key={step.id} className="group relative bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${step.gradient} ${step.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <span className="absolute top-6 right-8 text-3xl font-black text-gray-100 group-hover:text-primary/10 transition-colors italic">
                  {step.id}
                </span>
                <h4 className="text-lg font-black text-[#1A1F2C] mb-2 uppercase tracking-tight">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;