import React, { useState, useEffect } from 'react';
import { Sun, Zap, Menu, X, Phone, Calculator, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/energreenData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'Equipos', href: '#productos' },
    { name: 'Servicios RETIE', href: '#servicios' },
    { name: 'Agro & ZNI', href: '#agro-rural' },
    { name: 'Monitoreo IoT', href: '#iot-demo' },
  ];

  const secondaryLinks = [
    { name: 'Financiación & Brilla', href: '#financiacion', desc: 'Créditos en tu factura de gas' },
    { name: 'Casos de Éxito', href: '#casos-exito', desc: 'Proyectos reales en Córdoba' },
    { name: 'Nosotros & SENA', href: '#nosotros', desc: 'Equipo técnico y misión 2030' },
    { name: 'Contacto & Visita', href: '#contacto', desc: 'Atención presencial en Montería' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-lg shadow-slate-900/5' 
        : 'bg-white/80 backdrop-blur-md py-3.5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Corporativo */}
          <a href="#inicio" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-energreen-500 to-ocean-500 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform p-0.5">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sun className="w-5 h-5 text-solar-500 animate-spin-slow" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-tight text-slate-900 leading-none">
                  ENER<span className="text-emerald-600">GREEN</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 rounded">
                  Caribe
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium hidden md:block mt-0.5">
                Energía limpia para un futuro brillante
              </span>
            </div>
          </a>

          {/* Menú Central en UNA Sola Línea Impecable (Desktop) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200/80 shadow-inner">
            {primaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-white rounded-full transition-all duration-200 shadow-none hover:shadow-sm"
              >
                {link.name}
              </a>
            ))}

            {/* Dropdown de Más Opciones */}
            <div className="relative group">
              <button
                type="button"
                className="whitespace-nowrap px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:bg-white rounded-full transition-all duration-200 flex items-center gap-1"
              >
                <span>Más</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 text-slate-400" />
              </button>

              <div className="absolute top-full right-0 mt-2 w-60 bg-white border border-slate-200 rounded-2xl p-2 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                {secondaryLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-xl hover:bg-emerald-50 text-left transition-colors"
                  >
                    <p className="text-xs font-extrabold text-slate-800 hover:text-emerald-700">{item.name}</p>
                    <p className="text-[10px] text-slate-500 font-normal">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Botones de Acción CTA a la Derecha */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href="#calculadora"
              className="whitespace-nowrap flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all"
            >
              <Calculator className="w-4 h-4 text-solar-500" />
              <span>Simular Ahorro</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="whitespace-nowrap flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-emerald-600 via-energreen-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/35 transform hover:-translate-y-0.5 transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-current" />
              <span>Cotizar Proyecto</span>
            </button>
          </div>

          {/* Botón Móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-extrabold text-white bg-emerald-600 rounded-xl sm:hidden shadow-sm"
            >
              Cotizar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-2 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {[...primaryLinks, ...secondaryLinks].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-emerald-50 rounded-xl hover:text-emerald-700 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-xs font-extrabold text-white bg-emerald-600 rounded-xl shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-300 fill-current" />
                <span>Solicitar Cotización o Visita en Sitio</span>
              </button>
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hola%20ENERGREEN,%20deseo%20asesoría%20sobre%20energía%20solar`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 text-center text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Hablar por WhatsApp Directo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
