import React from "react";
import { motion } from "motion/react";
import { Recycle, ArrowRight, Leaf, Waves } from "lucide-react";

export default function RefurbishmentPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Ecosystem Management</span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight">The Second Life Initiative.</h1>
          <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl">
            We believe in the immortality of materials. Our refurbishment program ensures 
            that no Continuum component ever reaches a landfill.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] glass-card border border-white/5 space-y-8"
          >
            <div className="flex justify-between items-start">
               <h2 className="text-2xl font-medium">Trade & Upgrade.</h2>
               <Recycle className="text-emerald-500" size={24} />
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              Finished with a specific driver module? Trade it back to us for Ecosystem Credit. 
              We'll use that credit toward your next upgrade—whether it's the latest 
              Beryllium driver or a specialized open-back tuning module.
            </p>
            <button className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-white transition-colors">
              Start a trade-in <ArrowRight size={14} />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] bg-white/5 border border-white/10 space-y-8"
          >
            <div className="flex justify-between items-start">
               <h2 className="text-2xl font-medium">Certified Laboratory Grade.</h2>
               <Waves className="text-white/30" size={24} />
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              Returned components are sent to our California Sound Lab. Here, they are ultrasonic 
              cleaned, acoustically re-validated, and verified to meet original factory 
              frequency response tolerances within +/- 0.5dB.
            </p>
            <button className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-white transition-colors">
              Browse pre-owned collection <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between p-12 rounded-[40px] border border-emerald-500/10 bg-emerald-500/[0.01] gap-12">
           <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-500">
                 <Leaf size={20} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Environmental Impact</span>
              </div>
              <h3 className="text-3xl font-medium tracking-tight">Closed Loop Manufacturing.</h3>
              <p className="text-white/40 text-sm max-w-md font-light leading-relaxed">
                By refurbishing modules, we prevent high-value rare earth magnets from 
                exiting the tech ecosystem, reducing mining dependency.
              </p>
           </div>
           
           <div className="text-right">
              <p className="text-6xl font-medium text-emerald-500/80 tracking-tighter">94%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/40 mt-2">Diverted from Landfills</p>
           </div>
        </div>
      </div>
    </div>
  );
}
