import { Menu, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ 
  cartCount, 
  onCartClick, 
  onLoginClick, 
  onMenuClick,
  onSupportClick,
  isLoggedIn, 
  onLogout 
}: { 
  cartCount: number; 
  onCartClick: () => void; 
  onLoginClick: () => void;
  onMenuClick: () => void;
  onSupportClick: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}) {
  const location = useLocation();
  const isDarkNav = location.pathname !== '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-[60] glass px-6 md:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div>
        <Link to="/" className="font-semibold text-lg tracking-tight uppercase hover:text-white/80 transition-colors">Continuum</Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
        <Link to="/products" className={`hover:text-white transition-colors ${location.pathname === '/products' ? 'text-white' : ''}`}>Products</Link>
        <Link to="/tech" className={`hover:text-white transition-colors ${location.pathname === '/tech' ? 'text-white' : ''}`}>Technology</Link>
        <Link to="/design" className={`hover:text-white transition-colors ${location.pathname === '/design' ? 'text-white' : ''}`}>Design</Link>
        <button onClick={onSupportClick} className="hover:text-white transition-colors cursor-pointer">Support</button>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={onCartClick}
          className="text-white/70 hover:text-white transition-colors relative"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-[10px] font-bold rounded-full flex items-center justify-center translate-x-1/2 -translate-y-1/2 scale-in group-hover:scale-110 transition-transform">
              {cartCount}
            </span>
          )}
        </button>
        
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <User size={16} />
            </div>
            <button onClick={onLogout} className="text-xs text-white/40 hover:text-white transition-colors uppercase font-bold tracking-widest hidden md:block">
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={onLoginClick}
            className="hidden md:block px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-white/90 transition-colors uppercase tracking-widest"
          >
            Login
          </button>
        )}

        <button 
          onClick={onMenuClick}
          className="lg:hidden text-white/70 hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}
