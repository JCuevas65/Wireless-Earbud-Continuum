import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { X, Instagram, Twitter } from "lucide-react";

export function MobileMenu({ 
  isOpen, 
  onClose,
  onSupportClick
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSupportClick: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[150]"
          />
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-full bg-[#050505] border-b border-white/10 z-[151] p-12 space-y-12"
          >
            <div className="flex justify-end">
              <button onClick={onClose} className="p-4 hover:bg-white/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col items-center gap-8">
              <Link to="/products" onClick={onClose} className="text-3xl font-medium tracking-tight">Products</Link>
              <Link to="/tech" onClick={onClose} className="text-3xl font-medium tracking-tight">Technology</Link>
              <Link to="/design" onClick={onClose} className="text-3xl font-medium tracking-tight">Design</Link>
              <button 
                onClick={() => {
                  onSupportClick();
                  onClose();
                }} 
                className="text-3xl font-medium tracking-tight text-white"
              >
                Support
              </button>
            </nav>
            
            <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-6">
              <div className="flex gap-8">
                 <Instagram className="text-white/40" />
                 <Twitter className="text-white/40" />
              </div>
              <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">Continuum Technologies</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
