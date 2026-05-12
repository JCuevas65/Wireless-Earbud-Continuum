import { motion } from "motion/react";
import { ShoppingBag, Waves } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  material: string;
  connection: string;
  price: string;
  priceNum: number;
  theme: string;
}

const PRODUCTS: Product[] = [
  { 
    id: "origin", 
    name: "Origin", 
    description: "Precision-milled Grade 5 Titanium. The foundation of sound with a raw, hand-polished finish.",
    material: "Titanium", 
    connection: "Wireless", 
    price: "$499", 
    priceNum: 499, 
    theme: "bg-white/5" 
  },
  { 
    id: "stealth", 
    name: "Stealth", 
    description: "Deep matte-black DLC coating. Virtually unscratchable with advanced Active Noise Cancellation.",
    material: "Titanium", 
    connection: "Wireless", 
    price: "$549", 
    priceNum: 549, 
    theme: "bg-black" 
  },
  { 
    id: "lab-ed", 
    name: "Lab Edition", 
    description: "High-impact transparent polycarbonate. Engineering unmasked to reveal the internal copper circuitry.",
    material: "Titanium", 
    connection: "Wired", 
    price: "$699", 
    priceNum: 699, 
    theme: "bg-zinc-900" 
  },
  { 
    id: "eco-core", 
    name: "Eco-Core", 
    description: "Forged from 100% recycled aluminum and reclaimed ocean plastics. 0% compromise.",
    material: "Polymer", 
    connection: "Wireless", 
    price: "$349", 
    priceNum: 349, 
    theme: "bg-neutral-800" 
  },
  { 
    id: "phantom", 
    name: "Phantom", 
    description: "Shadow and Sound. Featuring a semi-transparent 'Ghost' shell and silver-plated wiring, the Phantom is designed for the minimalist who values mystery. It includes our exclusive 'Spatial Atmos' driver module.",
    material: "Titanium", 
    connection: "Wireless", 
    price: "$599", 
    priceNum: 599, 
    theme: "bg-stone-900" 
  },
  { 
    id: "alloy", 
    name: "Alloy", 
    description: "Strength in Simplicity. Forged from high-performance Magnesium-Alloy, this model is 40% lighter than standard aluminum but twice as strong. It’s the ultimate choice for the audiophile on the move.",
    material: "Polymer", 
    connection: "Wired", 
    price: "$299", 
    priceNum: 299, 
    theme: "bg-zinc-800" 
  },
];

export default function ProductsPage({ onAddToCart }: { onAddToCart: (id: string) => void }) {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-white/40 uppercase">The 2024 Collection</span>
            <h1 className="text-4xl md:text-7xl font-medium tracking-tight">Full Collection.</h1>
          </div>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed">
            Every variant features the same modular DNA, tuned for different lifestyles and acoustic preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-[32px] glass-card overflow-hidden group border border-white/5 bg-[#0a0a0a]"
            >
              <div className={`aspect-square w-full ${p.theme} relative flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative">
                   <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center animate-pulse">
                      <Waves className="text-white/20" size={32} />
                   </div>
                </div>
                
                <button 
                  onClick={() => onAddToCart(p.id)}
                  className="absolute bottom-6 right-6 p-4 rounded-2xl bg-white text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                >
                  <ShoppingBag size={20} />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <motion.h3 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="text-xl font-bold mb-1 tracking-tight text-white"
                    >
                      {p.name}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                      className="text-white/30 text-xs uppercase tracking-widest font-bold mb-2"
                    >
                      {p.price}
                    </motion.p>
                    <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 group-hover:mt-2">
                      <div className="overflow-hidden font-normal text-white/50 leading-relaxed line-clamp-2 tracking-tight text-sm">
                        {p.description}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/50">
                    {p.material}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/50">
                    {p.connection}
                  </span>
                </div>
                
                <button 
                  onClick={() => onAddToCart(p.id)}
                  className="w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-colors"
                >
                  Quick Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
