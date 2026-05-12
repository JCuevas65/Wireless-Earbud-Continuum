import React from "react";
import { motion } from "motion/react";
import { Leaf, ShieldCheck, Waves, Globe } from "lucide-react";

export default function SustainabilityPage() {
  const impacts = [
    {
      label: "Material Sourcing",
      value: "100%",
      unit: "Recycled Titanium",
      desc: "We exclusively use Gr5 Titanium reclaimed from aerospace manufacturing overruns."
    },
    {
      label: "Waste Reduction",
      value: "85%",
      unit: "Less E-Waste",
      desc: "Modular repairs mean 85% less material is shipped compared to standard replacements."
    },
    {
      label: "Logistics",
      value: "Net-Zero",
      unit: "Carbon Shipping",
      desc: "All international logistics are carbon-offset through verified reforestation projects."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="max-w-3xl space-y-8">
          <div className="flex items-center gap-3 text-emerald-500">
             <Leaf size={24} />
             <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Planet First</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[1] text-gradient">
            Restoring the <br /> Balance.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
            Every material choice we make is filtered through a single question: 
            Can this exist for a century without harm?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {impacts.map((impact, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass-card rounded-[48px] p-12 space-y-12 border border-white/5"
             >
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{impact.label}</span>
               <div className="space-y-2">
                 <p className="text-6xl font-medium tracking-tighter">{impact.value}</p>
                 <p className="text-sm font-bold uppercase tracking-widest text-emerald-500/60">{impact.unit}</p>
               </div>
               <p className="text-sm text-white/40 leading-relaxed font-light">{impact.desc}</p>
             </motion.div>
           ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center pt-24 border-t border-white/5">
           <div className="space-y-12">
              <h2 className="text-4xl font-medium tracking-tight">Closed Loop Manufacturing.</h2>
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 shrink-0">
                       <Globe size={24} />
                    </div>
                    <div className="space-y-2">
                       <h4 className="font-medium">Local Assembly</h4>
                       <p className="text-sm text-white/40 leading-relaxed font-light">
                         We assemble in small batches near our primary distribution hubs to minimize initial transport emissions.
                       </p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 shrink-0">
                       <Waves size={24} />
                    </div>
                    <div className="space-y-2">
                       <h4 className="font-medium">Water-Free Finishing</h4>
                       <p className="text-sm text-white/40 leading-relaxed font-light">
                         Our titanium is blast-textured using recaptured media, requiring zero industrial water for finishing processes.
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="glass-card rounded-[56px] aspect-square flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />
              <div className="w-32 h-32 rounded-full border-2 border-emerald-500/20 flex items-center justify-center mb-8">
                 <Leaf size={64} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Certified Carbon Neutral</h3>
              <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-bold">Standard 2024.1.A</p>
           </div>
        </div>

        <div className="py-24 text-center space-y-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">The Promise</p>
          <p className="text-lg md:text-2xl text-white/60 font-light italic italic leading-relaxed max-w-4xl mx-auto">
            "We do not inherit the earth from our ancestors; we borrow it from our children." 
            Continuum is built for the borrower.
          </p>
        </div>
      </div>
    </div>
  );
}
