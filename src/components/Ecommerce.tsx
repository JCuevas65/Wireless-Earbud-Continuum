import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Minus, Plus, ArrowRight, Waves, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  material: string;
  connection: string;
  price: string;
  priceNum: number;
  theme: string;
}

const PRODUCTS: Product[] = [
  { id: "origin", name: "Origin", material: "Titanium", connection: "Wireless", price: "$499", priceNum: 499, theme: "bg-white/5" },
  { id: "stealth", name: "Stealth", material: "Titanium", connection: "Wireless", price: "$549", priceNum: 549, theme: "bg-black" },
  { id: "lab-ed", name: "Lab Edition", material: "Titanium", connection: "Wired", price: "$699", priceNum: 699, theme: "bg-zinc-900" },
  { id: "eco-core", name: "Eco-Core", material: "Polymer", connection: "Wireless", price: "$349", priceNum: 349, theme: "bg-neutral-800" },
  { id: "phantom", name: "Phantom", material: "Titanium", connection: "Wireless", price: "$599", priceNum: 599, theme: "bg-stone-900" },
  { id: "alloy", name: "Alloy", material: "Polymer", connection: "Wired", price: "$299", priceNum: 299, theme: "bg-zinc-800" },
];

export function CartDrawer({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  cart: any[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}) {
  const [customMeta, setCustomMeta] = useState<Record<string, any>>({});

  useEffect(() => {
    const saved = localStorage.getItem("continuum_custom_meta");
    if (saved) setCustomMeta(JSON.parse(saved));
  }, [isOpen]);

  const cartItems = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id) || customMeta[item.id];
    return { ...product, ...item };
  });

  const total = cartItems.reduce((acc, item) => acc + (item.priceNum || 0) * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#080808] border-l border-white/10 z-[101] flex flex-col"
          >
            <div className="p-8 flex items-center justify-between border-b border-white/5">
              <h2 className="text-xl font-medium uppercase tracking-widest">Collection</h2>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center opacity-20">
                    <ShoppingBag size={32} />
                  </div>
                  <p className="text-white/30 text-sm italic">Yours is currently empty.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-3xl bg-white/5 border border-white/5">
                    <div className={`w-20 h-20 rounded-2xl ${item.theme} flex items-center justify-center p-4`}>
                        <Waves size={20} className="text-white/20" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{item.name}</h4>
                        <button 
                            onClick={() => onRemoveItem(item.id || "")}
                            className="text-white/20 hover:text-white transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-white/40 uppercase tracking-widest font-bold">${item.priceNum}</p>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-white/10 rounded-full px-2 py-1 gap-3">
                          <button 
                            onClick={() => onUpdateQuantity(item.id || "", -1)}
                            className="p-1 hover:text-white text-white/30 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-mono w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id || "", 1)}
                            className="p-1 hover:text-white text-white/30 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-8 border-t border-white/5 bg-[#0a0a0a] space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Total</span>
                <span className="text-2xl font-medium tracking-tighter">${total}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={cartItems.length === 0}
              >
                Secure Checkout <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function CheckoutView({ 
  isOpen, 
  onClose, 
  cart,
  onPay
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  cart: any[];
  onPay: () => void;
}) {
  const [customMeta, setCustomMeta] = useState<Record<string, any>>({});

  useEffect(() => {
    const saved = localStorage.getItem("continuum_custom_meta");
    if (saved) setCustomMeta(JSON.parse(saved));
  }, [isOpen]);

  const cartItems = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id) || customMeta[item.id];
    return { ...product, ...item };
  });

  const subtotal = cartItems.reduce((acc, item) => acc + (item.priceNum || 0) * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#050505] z-[300] overflow-y-auto"
        >
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
            <button 
              onClick={onClose}
              className="mb-12 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            >
              <X size={14} /> Close
            </button>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-medium tracking-tight">Identity & Delivery.</h2>
                  <p className="text-white/40 text-sm">Every Continuum product is made to order. Please provide precise details.</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Full Name</label>
                    <input type="text" placeholder="Aiden Sterling" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/10" />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Email Address</label>
                    <input type="email" placeholder="a.sterling@design.co" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/10" />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Address</label>
                    <input type="text" placeholder="101 Titanium Way" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Postal Code</label>
                    <input type="text" placeholder="90210" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">City</label>
                    <input type="text" placeholder="Cupertino" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/10" />
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-12 h-fit space-y-12">
                <div className="glass-card rounded-[40px] p-10 space-y-8">
                  <h3 className="text-xl font-medium tracking-tight">Review & Total.</h3>
                  
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between py-4 border-b border-white/5">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl ${item.theme} flex items-center justify-center p-2`}>
                            <Waves size={16} className="text-white/20" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-[10px] text-white/30 uppercase tracking-widest">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="text-sm font-mono">${(item.priceNum || 0) * item.quantity}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Subtotal</span>
                      <span className="font-mono">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Shipping</span>
                      <span className="text-emerald-400 uppercase text-[10px] font-bold tracking-widest">Complimentary</span>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Total</span>
                      <span className="text-3xl font-medium tracking-tighter">${total}</span>
                    </div>
                  </div>

                  <button 
                    onClick={onPay}
                    className="w-full py-5 bg-[#0070BA] text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#005ea6] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Pay with PayPal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SuccessModal({ 
  isOpen, 
  onClose,
  transactionId 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  transactionId: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl">
          <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="w-full max-w-lg text-center space-y-10"
          >
            <div className="flex justify-center">
              <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, delay: 0.2 }}
                  className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white"
              >
                <ShieldCheck size={48} />
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">Acquisition Successful.</h2>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-sm mx-auto">
                Your order has been logged into the sound architecture ecosystem. 
                Evolution begins soon.
              </p>
            </div>

            <div className="p-8 glass-card rounded-[32px] space-y-4">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                <span>Transaction ID</span>
                <span>Shipping ETA</span>
              </div>
              <div className="flex justify-between items-center text-sm font-mono">
                <span className="text-white/80">{transactionId}</span>
                <span className="text-emerald-400">4-6 Weeks</span>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Return to Continuum
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
