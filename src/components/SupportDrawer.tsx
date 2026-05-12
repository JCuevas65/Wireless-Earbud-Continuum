import { motion, AnimatePresence } from "motion/react";
import { X, Mail, MessageCircle, ExternalLink } from "lucide-react";

export function SupportDrawer({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[160]"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#080808] border-l border-white/10 z-[161] flex flex-col p-12 space-y-12"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium uppercase tracking-[0.2em]">Concierge</h2>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-white/40 text-sm leading-relaxed">
                For collection troubleshooting, technical inquiries, or personalized acoustic tuning assistance.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:jessecuevas5@gmail.com"
                className="flex items-center justify-between p-6 rounded-3xl glass-card group hover:bg-white/10 transition-all border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Textual Inquiry</h4>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">jessecuevas5@gmail.com</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-white/10 group-hover:text-white/40 transition-colors" />
              </a>

              <a 
                href="sms:+16319213782"
                className="flex items-center justify-between p-6 rounded-3xl glass-card group hover:bg-white/10 transition-all border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Direct Line</h4>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">+1 631 921-3782</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-white/10 group-hover:text-white/40 transition-colors" />
              </a>
            </div>

            <div className="mt-auto space-y-6">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Hours of Service</p>
                  <p className="text-xs text-white/60">09:00 — 18:00 EST <br /> Monday through Friday</p>
              </div>
              <p className="text-[10px] text-white/10 uppercase tracking-widest text-center">Continuum Sound Lab Division</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
