import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MobileMenu } from "./components/MobileMenu";
import { SupportDrawer } from "./components/SupportDrawer";
import { AuthModal } from "./components/AuthModal";
import { CartDrawer, CheckoutView, SuccessModal } from "./components/Ecommerce";

// Pages
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import DesignPage from "./pages/Design";
import TechnologyPage from "./pages/Technology";
import WarrantyPage from "./pages/Warranty";
import RefurbishmentPage from "./pages/Refurbishment";
import PhilosophyPage from "./pages/Philosophy";
import SustainabilityPage from "./pages/Sustainability";

interface CartItem {
  id: string;
  quantity: number;
}

function AppContent() {
  const location = useLocation();
  
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("continuum_cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    localStorage.setItem("continuum_cart", JSON.stringify(cart));
  }, [cart]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const addToCart = (id: string, customData?: any) => {
    if (customData) {
      const customMeta = JSON.parse(localStorage.getItem("continuum_custom_meta") || "{}");
      customMeta[id] = customData;
      localStorage.setItem("continuum_custom_meta", JSON.stringify(customMeta));
    }

    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePay = () => {
    const id = "TXN-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    setTransactionId(id);
    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen grain selection:bg-white selection:text-black">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => {
            setIsCartOpen(true);
            setIsMenuOpen(false);
        }}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onMenuClick={() => setIsMenuOpen(true)}
        onSupportClick={() => setIsSupportOpen(true)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSupportClick={() => setIsSupportOpen(true)}
      />

      <SupportDrawer 
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      <AuthModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />

      <CheckoutView 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onPay={handlePay}
      />

      <SuccessModal 
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        transactionId={transactionId}
      />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/products" element={
              <PageTransition>
                <ProductsPage onAddToCart={addToCart} />
              </PageTransition>
            } />
            <Route path="/design" element={
              <PageTransition>
                <DesignPage onAddToCart={addToCart} />
              </PageTransition>
            } />
            <Route path="/tech" element={
              <PageTransition>
                <TechnologyPage />
              </PageTransition>
            } />
            <Route path="/warranty" element={
              <PageTransition>
                <WarrantyPage />
              </PageTransition>
            } />
            <Route path="/refurbishment" element={
              <PageTransition>
                <RefurbishmentPage />
              </PageTransition>
            } />
            <Route path="/philosophy" element={
              <PageTransition>
                <PhilosophyPage />
              </PageTransition>
            } />
            <Route path="/sustainability" element={
              <PageTransition>
                <SustainabilityPage />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
