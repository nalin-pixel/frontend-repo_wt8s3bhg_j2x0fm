import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/nutritailor-logo.svg" alt="NutriTailor" className="h-8 w-8"/>
          <span className="text-white font-extrabold text-lg tracking-tight">NutriTailor</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#chat" className="hover:text-white">Chat</a>
        </nav>
        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-slate-200">
          <a href="#about" className="block">About</a>
          <a href="#shop" className="block">Shop</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#chat" className="block">Chat</a>
        </div>
      )}
    </header>
  );
}
