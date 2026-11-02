import React, { useState } from 'react';
import { 
  Sun, 
  Search, 
  BookOpen, 
  Calculator, 
  Wheat, 
  ShieldCheck, 
  Zap, 
  Menu, 
  X, 
  ChevronRight,
  GraduationCap,
  ArrowRight,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { companyInfo } from '../../data/energreenData';

export default function NavbarV2({ 
  searchQuery, 
  setSearchQuery, 
  onSwitchToV1, 
  onOpenQuoteModal,
  selectedCategory,
  setSelectedCategory
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio & Destacados', href: '#inicio-v2' },
    { name: 'Rutas de Aprendizaje', href: '#rutas-v2' },
    { name: 'Guías & Artículos', href: '#guias-v2' },
    { name: 'Laboratorio Solar', href: '#laboratorio-v2' },
    { name: 'Capacitación SENA', href: '#sena-v2' },
    { name: 'Preguntas Frecuentes', href: '#faq-v2' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      
      {/* Top Banner Aprende.org + SENA */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 font-black text-[9px] uppercase px-2 py-0.5 rounded-full tracking-wider">
              ENERGREEN HUB
            </span>
            <span className="hidden md:inline text-emerald-100">
              Centro de Aprendizaje & Soluciones Solares • SENA Montería 2025 (Ficha 3065832)
            </span>
            <span className="md:hidden text-emerald-100">
              Aprende Solar • Montería & Córdoba
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Botón para volver a la versión clásica v1 */}
            <button
              onClick={onSwitchToV1}
              className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all border border-white/20"
              title="Volver a la versión clásica de EnerGreen"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Ver Versión Clásica (v1)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar Tiendanube Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo con estilo Editorial Educativo */}
          <a href="#inicio-v2" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-amber-400 flex items-center justify-center shadow-md shadow-emerald-600/20 p-0.5 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-500 animate-spin-slow" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-tight text-slate-900 leading-none">
                  ENER<span className="text-emerald-600">GREEN</span>
                </span>
                <span className="bg-slate-100 text-slate-700 text-[10px] font-black px-1.5 py-0.5 rounded uppercase border border-slate-200">
                  Blog & Hub
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium hidden sm:block mt-0.5">
                Aprende, calcula y ahorra con energía solar
              </span>
            </div>
          </a>

          {/* Barra de Búsqueda tipo Tiendanube Blog (Desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar guías (ej. bombeo, recibo de luz, Brilla, RETIE...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs text-slate-800 placeholder-slate-400 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Enlaces de Navegación (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.slice(1, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botones de Acción */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Botón de Búsqueda Móvil */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 lg:hidden"
              aria-label="Abrir buscador"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-current" />
              <span>Cotizar Proyecto</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 xl:hidden"
              aria-label="Menú móvil"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Buscador Expandible en Móvil */}
        {searchOpen && (
          <div className="mt-3 pt-3 border-t border-slate-100 lg:hidden animate-fadeIn">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar guías (ej. bombeo, Brilla, RETIE...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-emerald-500 focus:bg-white outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 text-xs font-bold text-slate-700 hover:bg-emerald-50 rounded-xl hover:text-emerald-700 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSwitchToV1();
                }}
                className="w-full py-2.5 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Cambiar a Versión Clásica (v1)</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
