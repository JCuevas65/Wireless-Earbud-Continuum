import { Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="space-y-8 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full" />
            <span className="font-semibold uppercase tracking-tight">Continuum</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            The future of audio isn't just about sound. It's about precision engineering, 
            material honesty, and the belief that products should be built for lifetimes.
          </p>
          <div className="flex gap-6">
            <Instagram className="text-white/20 hover:text-white transition-colors cursor-pointer" size={20} />
            <Twitter className="text-white/20 hover:text-white transition-colors cursor-pointer" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 text-sm">
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs">Ecosystem</h4>
            <div className="flex flex-col gap-4 text-white/40">
              <Link to="/products" className="hover:text-white transition-colors">Collection</Link>
              <Link to="/tech" className="hover:text-white transition-colors">Technology</Link>
              <Link to="/design" className="hover:text-white transition-colors">Interactive Studio</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs">Support</h4>
            <div className="flex flex-col gap-4 text-white/40">
                <Link to="/warranty" className="hover:text-white transition-colors">Warranty</Link>
                <Link to="/refurbishment" className="hover:text-white transition-colors">Refurbishment</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs">Company</h4>
            <div className="flex flex-col gap-4 text-white/40">
                <Link to="/philosophy" className="hover:text-white transition-colors">Philosophy</Link>
                <Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 mt-16 opacity-20 text-[10px] uppercase font-bold tracking-[0.4em]">
        <p>©2024 CONTINUUM TECHNOLOGIES</p>
        <p>A SOUND EXPERIMENT BORN IN CALIFORNIA</p>
      </div>
    </footer>
  );
}
