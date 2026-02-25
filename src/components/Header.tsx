import { useState, useEffect } from "react";
import { Menu, X, Wifi } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white group">
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Nova Fibra <span className="text-brand-400">Brasil</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#planos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Planos
            </a>
            <a href="#diferenciais" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Diferenciais
            </a>
            <a
              href="#viabilidade"
              className="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(0,200,83,0.3)] hover:shadow-[0_0_20px_rgba(0,200,83,0.5)]"
            >
              Assinar Agora
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-900 border-b border-white/10 shadow-xl py-4 px-4 flex flex-col gap-4">
          <a
            href="#planos"
            className="text-base font-medium text-slate-300 hover:text-white py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Planos
          </a>
          <a
            href="#diferenciais"
            className="text-base font-medium text-slate-300 hover:text-white py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Diferenciais
          </a>
          <a
            href="#viabilidade"
            className="px-5 py-3 rounded-xl bg-brand-500 text-white text-center font-bold mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Assinar Agora
          </a>
        </div>
      )}
    </header>
  );
}
