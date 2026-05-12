import { motion } from "motion/react";
import { ArrowRight, Cpu, Waves, ShieldCheck, Battery, ChevronRight, Leaf, Recycle, Wrench, Truck, Hourglass } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Cpu size={24} />,
      title: "Modular Core",
      desc: "Swappable drivers and components for infinite lifespan and custom signatures."
    },
    {
      icon: <Waves size={24} />,
      title: "Active Resonance Control",
      desc: "Real-time acoustic tuning that adapts to your environment and ear shape."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Aerospace Titanium",
      desc: "Indestructible yet incredibly light. Biocompatible and uniquely textured."
    },
    {
      icon: <Battery size={24} />,
      title: "Pulse Charge",
      desc: "Zero-contact magnetic charging. 1 hour of playback from a 5-minute charge."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">
            Engineered in Titanium
          </span>
          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-6 text-gradient">
            Continuum Pro.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Modular sound architecture encased in aerospace-grade titanium. 
            The evolution of personal audio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button 
              onClick={() => navigate('/products')}
              className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Buy Now
            </button>
            <button 
              onClick={() => navigate('/tech')}
              className="w-full sm:w-auto px-10 py-4 glass-card rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Placeholder for Hero Product Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-0 w-full max-w-4xl h-[40vh] md:h-[50vh] flex items-center justify-center -z-0 opacity-40 md:opacity-100"
        >
          <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 z-10" />
          <div className="w-[80%] h-full bg-[#111] rounded-t-[100px] border-t border-x border-white/10 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Waves className="text-white/40" size={40} />
                </div>
                <span className="text-white/20 text-xs uppercase tracking-widest">Acoustic Chamber Placeholder</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Press Section */}
      <section id="press" className="py-20 bg-black border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block"
           >
              <p className="text-xl md:text-2xl text-white/80 font-light italic leading-relaxed max-w-3xl mx-auto">
                "The first headphones that actually respect the planet."
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Wired Magazine</p>
           </motion.div>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[
              "WIRED", "THE VERGE", "WALLPAPER*", "TECHCRUNCH", "DEZEEN", "GQ",
              "WIRED", "THE VERGE", "WALLPAPER*", "TECHCRUNCH", "DEZEEN", "GQ"
            ].map((press, i) => (
              <div 
                key={i} 
                className="mx-12 text-2xl md:text-3xl font-black tracking-tighter text-white/10 hover:text-white transition-all duration-500 cursor-default select-none"
                style={{ fontFamily: press === "WALLPAPER*" ? "serif" : "inherit" }}
              >
                {press}
              </div>
            ))}
          </div>
          
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4">
            {[
              "WIRED", "THE VERGE", "WALLPAPER*", "TECHCRUNCH", "DEZEEN", "GQ",
              "WIRED", "THE VERGE", "WALLPAPER*", "TECHCRUNCH", "DEZEEN", "GQ"
            ].map((press, i) => (
              <div 
                key={i} 
                className="mx-12 text-2xl md:text-3xl font-black tracking-tighter text-white/10 hover:text-white transition-all duration-500 cursor-default select-none"
                style={{ fontFamily: press === "WALLPAPER*" ? "serif" : "inherit" }}
              >
                {press}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-card group hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white/40 group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 px-6 md:px-12 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-xs font-bold tracking-widest text-white/40 uppercase">Modular Architecture</span>
            <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight"> Built to evolve, <br /> not to be replaced.</h2>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Standard earbuds are designed to be disposable. Continuum is designed to be cherished. 
              When technology advances, simply upgrade the core driver module. The titanium chassis 
              is yours for a lifetime.
            </p>
            <ul className="space-y-4">
              {["Interchangeable Drivers", "Replaceable Battery Module", "Upgradable Firmware Chip"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => navigate('/tech')}
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest pt-4"
            >
              Discover the architecture <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden glass-card flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
            <div className="text-white/10 uppercase tracking-[0.4em] font-bold text-sm">Product Visual Placeholder</div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[48px] p-12 md:p-16 space-y-12 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                Designed for Decades, <br /> Not Days.
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-xl text-white/60 leading-relaxed font-light">
                Our "Circular Design" ethos ensures that every component of Continuum 
                is accessible, repairable, and upgradable. We've eliminated permanent 
                adhesives in favor of precision mechanical seals.
              </p>
              <div className="flex items-center gap-4 text-white/40">
                <Recycle size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">End-to-End Circularity</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-[48px] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Leaf size={120} />
            </div>

            <div className="space-y-16 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500/60">Sustainability Impact</span>
              <div className="grid grid-cols-1 gap-12">
                <div className="space-y-2">
                  <p className="text-4xl md:text-6xl font-medium tracking-tighter">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/30">Recycled Aerospace Titanium</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-6xl font-medium tracking-tighter">Zero</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/30">Single-Use Plastic Packaging</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit relative z-10">
              <Leaf size={16} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Certified Carbon Neutral</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Longevity & Support Section */}
      <section id="care" className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Continuum Care</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight">
              A commitment to <br /> lasting performance.
            </h2>
            <p className="text-xl text-white/50 font-light leading-relaxed">
              We don't just sell headphones; we manage an ecosystem of high-fidelity components. 
              Our support structure is as modular as our hardware.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Truck size={24} />,
                title: "Precision Logistics",
                desc: "Replacement modules are shipped within 24 hours of a request, arriving in sustainable, reusable packaging."
              },
              {
                icon: <Wrench size={24} />,
                title: "Easy Repair Path",
                desc: "No specialized tools required. Our slide-lock mechanism makes part replacement a 30-second intuitive process."
              },
              {
                icon: <Hourglass size={24} />,
                title: "Lifetime Support",
                desc: "Your Continuum signature is digitally archived, allowing us to provide personalized tuning advice for years."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 pt-12">
             <div className="glass-card rounded-[40px] p-10 md:p-12 space-y-8 border border-emerald-500/10">
                <div className="flex justify-between items-start">
                   <div className="space-y-2">
                     <h3 className="text-2xl font-medium tracking-tight">Lifetime Modular Warranty</h3>
                     <p className="text-emerald-500/60 text-[10px] uppercase font-bold tracking-widest">Permanent Protection</p>
                   </div>
                   <ShieldCheck className="text-emerald-500" size={32} />
                </div>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  If a driver yields or a battery fades, we ship you the specific module—not an entire new pair. 
                  This reduces waste by 85% compared to standard warranty replacements.
                </p>
             </div>

             <div className="glass-card rounded-[40px] p-10 md:p-12 space-y-8 border border-white/5">
                <div className="flex justify-between items-start">
                   <div className="space-y-2">
                     <h3 className="text-2xl font-medium tracking-tight">Second Life Initiative</h3>
                     <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Trade-In & Refurbish</p>
                   </div>
                   <Recycle className="text-white/20" size={32} />
                </div>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  Trade in older modules for ecosystem credit. Each returned component is professionally 
                  refurbished to original factory specs and reintroduced into our Certified Pre-Owned collection.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
