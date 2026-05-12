import { motion } from "motion/react";
import { Cpu, Waves, ShieldCheck, Battery } from "lucide-react";

export default function TechnologyPage() {
  const systems = [
    {
      title: "The Acoustic Chamber",
      subtitle: "Aerospace Precision",
      desc: "Milled from solid blocks of Gr5 Titanium, the Acoustic Chamber is engineered to eliminate standing waves and parasitic resonance. Each unit undergoes 48 hours of computational stress testing to ensure perfect sonic isolation.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Modular Driver System",
      subtitle: "Future-Proof Audio",
      desc: "Our proprietary 10mm Beryllium-coated drivers are housed in independent modules. As audio processing evolves, the hardware can be swapped in seconds without special tools, ensuring your investment remains state-of-the-art.",
      icon: <Cpu size={32} />
    },
    {
      title: "Pulse-Charge Interface",
      subtitle: "Infinite Energy",
      desc: "By utilizing high-frequency magnetic resonance, Continuum charges without physical pins that oxidize over time. The system achieves 98% efficiency, comparable to high-end industrial power delivery.",
      icon: <Battery size={32} />
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.4em] text-white/40 uppercase">Research & Development</span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight">The Science of Sound.</h1>
          <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            Continuum represents the intersection of material science and digital signal processing. 
            A decade of engineering, localized in a single device.
          </p>
        </div>

        <div className="space-y-16">
          {systems.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row gap-12 items-start"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-white/30 shrink-0">
                {s.icon}
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">{s.subtitle}</h3>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{s.title}</h2>
                </div>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
