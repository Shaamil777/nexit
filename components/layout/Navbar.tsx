"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About Us", "Our Services", "Products", "Contact"];
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-7xl bg-black/15 backdrop-blur-md rounded-[10px] px-6 py-5 flex items-center justify-between shadow-lg relative">
        <div className="flex items-center gap-1">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="18" r="9" stroke="white" strokeWidth="4" />
            <circle cx="22" cy="18" r="9" stroke="white" strokeWidth="4" />
          </svg>
          <span className="text-2xl font-extrabold text-white tracking-wide ml-1">LOGO</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link key={item} href="#" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link href="/login" className="bg-[#66D3CB] hover:bg-[#52c1b9] text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors shadow-sm">
            Login
          </Link>
        </div>
        <button 
          className="md:hidden text-white hover:text-white/80 transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-lg rounded-[10px] p-6 flex flex-col gap-6 shadow-2xl md:hidden border border-white/10"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link 
                    key={item} 
                    href="#" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white hover:text-[#66D3CB] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <Link 
                href="/login" 
                onClick={() => setIsOpen(false)}
                className="bg-[#66D3CB] hover:bg-[#52c1b9] text-white text-center text-lg font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm"
              >
                Login
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
