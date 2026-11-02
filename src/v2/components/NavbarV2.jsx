import React, { useState } from 'react';
import { 
  Sun, 
  Search, 
  BookOpen, 
  GraduationCap, 
  RotateCcw, 
  Layers, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  Calculator,
  HelpCircle,
  Award
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

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      
      {/* Barra de Notificación Aprende.org / Portal Educativo */}
      <div className="bg-slate-900 text-white text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-emerald-500 text-slate-950 font-black text-[9px] uppercase px-2 py-0.5 rounded-full tracking-wider shrink-0">
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
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-teal-500 to-emerald-500 flex items-center justify-center shadow-md p-0.5 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-tight text-slate-950 leading-none">
                  ENER<span className="text-emerald-600">GREEN</span>
                </span>
                <span className="bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                  Academy & Blog
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Aprende.org + Tiendanube Edition</p>
            </div>
          </a>

          {/* Buscador Central Prominente Tipo Tiendanube Blog */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="¿Qué quieres aprender hoy? (ej. Afinia, Brilla, RETIE, Bombeo...)"
                className="w-full pl-10 pr-4 py-2 bg-slate-100 hover:bg-slate-50 focus:bg-white text-xs text-slate-800 rounded-full border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Menú de Navegación de Cursos y Secciones */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700">
            <a href="#cursos-v2" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Cursos Aprende.org</span>
            </a>
            <a href="#guias-v2" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Revista & Guías</span>
            </a>
            <a href="#laboratorio-v2" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <Calculator className="w-4 h-4 text-amber-500" />
              <span>Laboratorio Virtual</span>
            </a>
            <a href="#faq-v2" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span>Preguntas</span>
            </a>
          </nav>

          {/* Botón CTA Cotización */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
            >
              <Sun className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Cotizar con Brilla</span>
              <span className="sm:hidden">Cotizar</span>
            </button>

            {/* Botón Hamburguesa Móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Buscador en Móvil */}
        <div className="mt-2.5 md:hidden">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar guías o cursos solares..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 text-xs text-slate-800 rounded-full border border-slate-200 outline-none"
            />
          </div>
        </div>

      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <a
            href="#cursos-v2"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-xs font-bold text-slate-800 p-2 rounded-xl hover:bg-slate-50"
          >
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Cursos Abiertos Aprende.org</span>
          </a>
          <a
            href="#guias-v2"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-xs font-bold text-slate-800 p-2 rounded-xl hover:bg-slate-50"
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Biblioteca de Artículos</span>
          </a>
          <a
            href="#laboratorio-v2"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-xs font-bold text-slate-800 p-2 rounded-xl hover:bg-slate-50"
          >
            <Calculator className="w-4 h-4 text-amber-500" />
            <span>Laboratorio & Calculadora</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onSwitchToV1();
            }}
            className="w-full text-left flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Cambiar a Versión Clásica Comercial (V1)</span>
          </button>
        </div>
      )}

    </header>
  );
}
