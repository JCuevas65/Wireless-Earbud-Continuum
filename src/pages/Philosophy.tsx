import React from "react";
import { motion } from "motion/react";
import { Recycle, ShieldCheck, Compass, Eye } from "lucide-react";

export default function PhilosophyPage() {
  const pillars = [
    {
      icon: <Recycle size={24} />,
      title: "Circular Engineering",
      desc: "Most tech is designed for the dump. Continuum is designed for the loop. We utilize modular paths so components return to us for rebirth, not the landfill."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Material Honesty",
      desc: "We don't hide plastic under paint. Our titanium is exposed, our polymers are recycled, and our connections are mechanical. Truth in every screw."
    },
    {
      icon: <Eye size={24} />,
      title: "Visual Silence",
      desc: "Minimalism isn't just an aesthetic; it's a lack of distraction. Our design language removes the noise so the sound can take center stage."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-24">
        <div className="space-y-8 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Our Ethos</span>
          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[1.1]">
            Designed for Decades, <br /> Not Days.
          </h1>
          <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl">
            Continuum was born from a simple realization: the most sustainable product 
            is the one you never have to replace. We've abandoned the "disposable" 
            standard of personal audio in favor of a lifetime companion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
           {pillars.map((pillar, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
               <div className="text-white/40">{pillar.icon}</div>
               <h3 className="text-xl font-medium tracking-tight">{pillar.title}</h3>
               <p className="text-sm text-white/40 leading-relaxed font-light">{pillar.desc}</p>
             </motion.div>
           ))}
        </div>

        <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden glass-card group">
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:scale-105 transition-transform duration-1000" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 px-12">
                 <h2 className="text-2xl md:text-4xl font-medium tracking-tight">The Modular Revolution.</h2>
                 <p className="text-white/40 text-sm md:text-base max-w-md mx-auto font-light">
                   By decoupling the speaker from the shell, we've unlocked infinite longevity.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
