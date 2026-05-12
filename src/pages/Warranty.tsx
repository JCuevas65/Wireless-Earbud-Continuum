import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Truck, Wrench, ShieldAlert } from "lucide-react";

export default function WarrantyPage() {
  const steps = [
    {
      icon: <ShieldAlert size={24} />,
      title: "Identify the Fault",
      desc: "Our self-diagnostic app or concierge can help pinpoint exactly which module needs attention."
    },
    {
      icon: <Truck size={24} />,
      title: "Express Module Delivery",
      desc: "We ship a precision-calibrated replacement module to your doorstep within 24-48 hours."
    },
    {
      icon: <Wrench size={24} />,
      title: "Instant Replacement",
      desc: "Swap the module in seconds using the slide-lock system. No tools or technical knowledge required."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20">
                <ShieldCheck size={40} />
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Continuum Protection</span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight">Lifetime Modular Warranty.</h1>
          <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            Traditional warranties replace products. We replace the specific component that failed, 
            ensuring your Continuum chassis stays with you for life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {steps.map((step, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="p-8 rounded-[32px] glass-card border border-white/5 space-y-6"
             >
               <div className="text-white/40">{step.icon}</div>
               <h3 className="text-lg font-medium">{step.title}</h3>
               <p className="text-sm text-white/30 leading-relaxed font-light">{step.desc}</p>
             </motion.div>
           ))}
        </div>

        <div className="glass-card rounded-[40px] p-12 space-y-8 bg-emerald-500/[0.02] border-emerald-500/10">
           <h2 className="text-2xl font-medium">The Zero-Waste Commitment.</h2>
           <div className="grid md:grid-cols-2 gap-12">
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Standard electronics warranties involve shipping a 300g device across the ocean because a 
                2g battery failed. Continuum eliminates this logistical insanity. By shipping only 
                the specific module, we reduce our warranty-related carbon footprint by 85%.
              </p>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Our Gr5 Titanium chassis is biologically inert and fatigue-resistant. It is designed 
                to survive the user. If the frame ever fails due to manufacturing defects, we will 
                hand-finish a replacement for you, free of charge, forever.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
