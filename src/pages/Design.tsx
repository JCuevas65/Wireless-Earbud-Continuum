import { motion } from "motion/react";
import { useState } from "react";
import { Waves } from "lucide-react";

export default function DesignPage({ onAddToCart }: { onAddToCart: (id: string, customData: any) => void }) {
  const [casing, setCasing] = useState("Titanium");
  const [cable, setCable] = useState("Wireless");

  const prices: Record<string, number> = {
    "Titanium": 100,
    "Carbon": 150,
    "Clear": 50,
    "Braided": 0,
    "Wireless": 50
  };

  const basePrice = 399;
  const totalPrice = basePrice + prices[casing] + prices[cable];

  const casingThemes: Record<string, string> = {
    "Titanium": "bg-zinc-700",
    "Carbon": "bg-zinc-900 border-zinc-800",
    "Clear": "bg-white/10 border-white/20 backdrop-blur-md"
  };

  const handleAddCustom = () => {
    const customId = `custom-${casing.toLowerCase()}-${cable.toLowerCase()}`;
    const customData = {
      name: `Continuum Custom (${casing})`,
      priceNum: totalPrice,
      material: casing,
      connection: cable,
      theme: casingThemes[casing]
    };
    onAddToCart(customId, customData);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[48px] overflow-hidden grid lg:grid-cols-2">
          {/* Preview Side */}
          <div className={`p-12 md:p-24 flex items-center justify-center relative transition-colors duration-700 ${casingThemes[casing]}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            <motion.div 
              key={`${casing}-${cable}`}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="text-center space-y-6 relative z-10"
            >
              <div className="w-48 h-48 rounded-full border-2 border-white/20 flex items-center justify-center p-8 shadow-2xl backdrop-blur-sm">
                  <Waves size={80} className="text-white/40" />
              </div>
              <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Visual Representation</p>
                  <p className="text-sm font-medium uppercase tracking-widest">{casing} + {cable}</p>
              </div>
            </motion.div>
          </div>

          {/* Options Side */}
          <div className="p-12 md:p-20 bg-[#0A0A0A] space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-white/40 uppercase">Interactive Studio</span>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Design yours.</h1>
              <p className="text-white/40 text-sm leading-relaxed">Customize your technical signature. Each piece is hand-assembled for your specific requirements.</p>
            </div>

            <div className="space-y-10">
              {/* Casing Toggles */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Casing Material</label>
                <div className="flex flex-wrap gap-3">
                  {["Titanium", "Carbon", "Clear"].map(option => (
                    <button
                      key={option}
                      onClick={() => setCasing(option)}
                      className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                        casing === option 
                          ? "bg-white text-black scale-105 shadow-xl shadow-white/5" 
                          : "bg-white/5 text-white/40 border border-white/5 hover:border-white/20"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cable Toggles */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Interface</label>
                <div className="flex flex-wrap gap-3">
                  {["Wireless", "Braided"].map(option => (
                    <button
                      key={option}
                      onClick={() => setCable(option)}
                      className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                        cable === option 
                          ? "bg-white text-black scale-105 shadow-xl shadow-white/5" 
                          : "bg-white/5 text-white/40 border border-white/5 hover:border-white/20"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Total Investment</p>
                <p className="text-4xl font-medium tracking-tighter">${totalPrice}</p>
              </div>
              <button 
                onClick={handleAddCustom}
                className="px-12 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors"
              >
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
