import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import HowItWorks from './components/HowItWorks';
import SolarCalculator from './components/SolarCalculator';
import TariffEvolutionChart from './components/TariffEvolutionChart';
import ProductsServices from './components/ProductsServices';
import AgroRuralSolutions from './components/AgroRuralSolutions';
import IoTDashboard from './components/IoTDashboard';
import FinancingAndBenefits from './components/FinancingAndBenefits';
import CaseStudies from './components/CaseStudies';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import AppV2 from './v2/AppV2';
import { MessageCircle, Sparkles, Sun, ArrowRight, Layers } from 'lucide-react';
import { companyInfo } from './data/energreenData';

export default function App() {
  // Detectar versión desde la URL (?v=2 o ?v=1) o almacenamiento local. Por defecto v2 para previsualizar el nuevo diseño
  const [version, setVersion] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const vParam = params.get('v');
      if (vParam === '1') return 'v1';
      if (vParam === '2') return 'v2';
      const saved = localStorage.getItem('energreen_version');
      if (saved === 'v1' || saved === 'v2') return saved;
    }
    return 'v2'; // Abrir V2 de forma predeterminada para probarlo
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const switchVersion = (newVersion) => {
    setVersion(newVersion);
    if (typeof window !== 'undefined') {
      localStorage.setItem('energreen_version', newVersion);
      const url = new URL(window.location.href);
      url.searchParams.set('v', newVersion === 'v2' ? '2' : '1');
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const vParam = params.get('v');
      if (vParam === '1') setVersion('v1');
      if (vParam === '2') setVersion('v2');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenQuoteModal = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  // Si la versión activa es V2 (Tiendanube Blog + Aprende.org), renderizar AppV2
  if (version === 'v2') {
    return (
      <>
        {/* Selector Flotante Rápido de Versión */}
        <div className="fixed top-20 right-4 z-50 hidden sm:block">
          <div className="bg-slate-900/90 backdrop-blur-md text-white px-3 py-2 rounded-2xl shadow-2xl border border-emerald-500/30 flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200">Vista: <strong>Diseño V2 (Blog/Hub)</strong></span>
            <button
              onClick={() => switchVersion('v1')}
              className="ml-1 bg-white/10 hover:bg-white/20 text-emerald-300 font-bold px-2 py-1 rounded-lg text-[10px] transition-colors"
            >
              Ver V1 Clásica
            </button>
          </div>
        </div>

        <AppV2 onSwitchToV1={() => switchVersion('v1')} />
      </>
    );
  }

  // Si la versión es V1 (Diseño Clásico Completo Original)
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white">
      
      {/* Banner de Previsualización para cambiar a V2 */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-900 text-white text-xs py-2 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span>
              Estás en la <strong>Versión Clásica (v1)</strong>. Nuevo diseño disponible con estilo <strong>Tiendanube Blog + Aprende.org</strong>.
            </span>
          </div>
          <button
            onClick={() => switchVersion('v2')}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1 rounded-full font-black text-[11px] flex items-center gap-1.5 transition-all shadow-sm"
          >
            <span>Probar Versión 2</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Barra de Navegación Principal con Top-Banner */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Contenido Principal */}
      <main className="flex-grow">
        {/* Hero Section con Simulador Express e Imágenes de Impacto */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        
        {/* Ticker / Cinta Marquee Dinámica de Beneficios */}
        <MarqueeTicker />

        {/* Sección Amigable: ¿Cómo Funciona en 3 Pasos Simples? */}
        <HowItWorks onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Calculadora Solar Interactiva en Tiempo Real */}
        <SolarCalculator onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Gráfico de Evolución Tarifaria Montería / Costa Caribe */}
        <TariffEvolutionChart />

        {/* Portafolio de Productos y Servicios RETIE */}
        <ProductsServices onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Soluciones Especializadas para Agro y Zonas Rurales ZNI */}
        <AgroRuralSolutions onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Demostración de Telemetría y Monitoreo Remoto IoT */}
        <IoTDashboard />

        {/* Opciones de Financiación, Programa Brilla y Ley 1715 */}
        <FinancingAndBenefits onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Casos de Éxito en Córdoba & Galería */}
        <CaseStudies onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Identidad Institucional, Valores y Proyecto SENA */}
        <AboutUs />

        {/* Sección de Contacto y Agendamiento en Sitio */}
        <ContactSection onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Modal de Cotización */}
      <ContactModal isOpen={quoteModalOpen} onClose={handleCloseQuoteModal} />

      {/* Botón Flotante Amigable de WhatsApp con Indicador 'En Línea' */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Tooltip flotante amigable */}
        <div className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 text-xs font-semibold text-slate-800 animate-float-slow">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>¿Tienes dudas con tu factura? <strong>¡Escríbenos!</strong></span>
        </div>

        <a
          href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hola%20ENERGREEN,%20deseo%20asesoría%20sobre%20energía%20solar%20fotovoltaica`}
          target="_blank"
          rel="noreferrer"
          className="relative p-4 bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Hablar por WhatsApp con un asesor de EnerGreen"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-ping"></span>
          </span>
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>

    </div>
  );
}
