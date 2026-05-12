import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Chrome, Mail, Lock, ArrowRight } from "lucide-react";

export function AuthModal({ 
  isOpen, 
  onClose, 
  onLogin 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onLogin: () => void;
}) {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-sm bg-[#0C0C0C] border border-white/10 rounded-[40px] p-10 relative z-10 space-y-8 text-center"
          >
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-medium tracking-tight">Identity.</h2>
              <p className="text-sm text-white/40">Secure access to your audio ecosystem.</p>
            </div>

            {!isEmailLogin ? (
              <div className="space-y-4">
                <button 
                  onClick={onLogin}
                  className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-2xl flex items-center justify-center gap-3 group px-4"
                >
                  <Chrome size={20} className="text-white/60 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-widest">Sign in with Google</span>
                </button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
                    <span className="bg-[#0C0C0C] px-4">OR</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsEmailLogin(true)}
                  className="w-full py-4 bg-transparent border border-white/5 hover:border-white/20 transition-all rounded-2xl flex items-center justify-center gap-3 group px-4"
                >
                  <Mail size={18} className="text-white/40 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white">Email & Password</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/20 ml-2">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="name@arch.co" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/10" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/20 ml-2">Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/10" 
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  Verify <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button 
                  type="button"
                  onClick={() => setIsEmailLogin(false)}
                  className="w-full text-center text-[10px] uppercase tracking-widest font-bold text-white/30 hover:text-white transition-colors"
                >
                  Back to options
                </button>
              </form>
            )}

            <p className="text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">
              By continuing, you agree to our <br /> Terms of Service & Privacy Policy.
            </p>

            <button onClick={onClose} className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
