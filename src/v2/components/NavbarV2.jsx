import React, { useState } from 'react';
import { 
  Sun, 
  Search, 
  BookOpen, 
  GraduationCap, 
  RotateCcw, 
  Menu, 
  X, 
  Calculator,
  HelpCircle
} from 'lucide-react';

export default function NavbarV2({ 
  searchQuery, 
  setSearchQuery, 
  onSwitchToV1, 
  onOpenQuoteModal,
  selectedCategory,
  setSelectedCategory,
  theme,
  bgStyle
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = bgStyle?.isDark;

  return (
    <header className={`sticky top-0 z-50 ${isDark ? 'bg-[#06241c]/95 border-[#155442]' : 'bg-white/95 border-slate-200'} backdrop-blur-md border-b shadow-xs transition-colors duration-300`}>
      
      {/* Barra de Notificación Aprende.org / Portal Educativo */}
      <div className={`${isDark ? 'bg-[#031812] border-[#114032]' : theme.topBarBg} text-white text-[11px] sm:text-xs py-2 px-4 border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className={`${theme.topBarBadge} font-black text-[9px] uppercase px-2 py-0.5 rounded-full tracking-wider shrink-0`}>
              MODO PORTAL EDUCATIVO
            </span>
            <span className="truncate text-slate-300">
              Cursos gratis, guías técnicas RETIE y dimensionamiento solar • SENA Montería (Ficha 3065832)
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Botón Destacado para Cambiar a la Web Comercial V1 */}
            <button
              onClick={onSwitchToV1}
              className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1 rounded-full text-[11px] font-black transition-all shadow-sm"
              title="Volver a la versión comercial clásica de EnerGreen"
            >
              <RotateCcw className="w-3 h-3 text-slate-950" />
              <span>Ver Web Comercial (V1)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header Principal Tiendanube Blog + Aprende.org */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Academy & Blog */}
          <a href="#inicio-v2" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-amber-400 flex items-center justify-center shadow-md p-0.5 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`font-display font-black text-xl tracking-tight leading-none ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  ENER<span className="text-emerald-400">GREEN</span>
                </span>
                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded uppercase border ${isDark ? 'bg-[#0c372b] text-emerald-300 border-[#155442]' : theme.badge}`}>
                  Academy & Blog
                </span>
              </div>
              <p className={`text-[10px] font-medium ${isDark ? 'text-emerald-300/60' : 'text-slate-400'}`}>Aprende.org + Tiendanube Edition</p>
            </div>
          </a>

          {/* Buscador Central Prominente Tipo Tiendanube Blog */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-emerald-400' : 'text-slate-400'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="¿Qué quieres aprender hoy? (ej. Afinia, Brilla, RETIE, Bombeo...)"
                className={`w-full pl-10 pr-4 py-2 text-xs rounded-full border outline-none transition-all ${
                  isDark
                    ? 'bg-[#0b352a] text-white border-[#155442] focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 placeholder-emerald-200/50'
                    : 'bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-800 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Menú de Navegación de Cursos y Secciones */}
          <nav className={`hidden lg:flex items-center gap-6 text-xs font-bold ${isDark ? 'text-emerald-100/80' : 'text-slate-700'}`}>
            <a href="#cursos-v2" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Cursos Aprende.org</span>
            </a>
            <a href="#guias-v2" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Revista & Guías</span>
            </a>
            <a href="#laboratorio-v2" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Laboratorio Virtual</span>
            </a>
            <a href="#faq-v2" className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span>Preguntas</span>
            </a>
          </nav>

          {/* Botón CTA Cotización */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className={`px-4 py-2 ${theme.primaryButton} font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5`}
            >
              <Sun className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Cotizar con Brilla</span>
              <span className="sm:hidden">Cotizar</span>
            </button>

            {/* Botón Hamburguesa Móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${isDark ? 'text-emerald-100 hover:bg-[#0b352a]' : 'text-slate-600 hover:bg-slate-100'}`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Buscador en Móvil */}
        <div className="mt-2.5 md:hidden">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar guías o cursos solares..."
              className={`w-full pl-10 pr-4 py-2 text-xs rounded-full border outline-none ${
                isDark
                  ? 'bg-[#0b352a] text-white border-[#155442] placeholder-emerald-200/50'
                  : 'bg-slate-100 text-slate-800 border-slate-200'
              }`}
            />
          </div>
        </div>

      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-4 space-y-3 ${isDark ? 'bg-[#06241c] border-[#155442] text-white' : 'bg-white border-slate-200'}`}>
          <a
            href="#cursos-v2"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 text-xs font-bold p-2 rounded-xl ${isDark ? 'hover:bg-[#0b352a]' : 'hover:bg-slate-50'}`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Cursos Abiertos Aprende.org</span>
          </a>
          <a
            href="#guias-v2"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 text-xs font-bold p-2 rounded-xl ${isDark ? 'hover:bg-[#0b352a]' : 'hover:bg-slate-50'}`}
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Biblioteca de Artículos</span>
          </a>
          <a
            href="#laboratorio-v2"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 text-xs font-bold p-2 rounded-xl ${isDark ? 'hover:bg-[#0b352a]' : 'hover:bg-slate-50'}`}
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Laboratorio & Calculadora</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onSwitchToV1();
            }}
            className="w-full text-left flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-950/40 p-2.5 rounded-xl border border-amber-800/60"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Cambiar a Versión Clásica Comercial (V1)</span>
          </button>
        </div>
      )}

    </header>
  );
}
