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
import { MessageCircle, Sparkles, Sun, ArrowRight, Layers, GraduationCap, Building2 } from 'lucide-react';
import { companyInfo } from './data/energreenData';

export default function App() {
  // Inicialización de la versión: por defecto 'v2' para previsualizar el nuevo portal
  const [version, setVersion] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const vParam = params.get('v');
      if (vParam === '1') return 'v1';
      if (vParam === '2') return 'v2';
    }
    return 'v2';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const switchVersion = (newVersion) => {
    setVersion(newVersion);
    if (typeof window !== 'undefined') {
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

  return (
    <div className="relative">
      
      {/* 🌟 CONMUTADOR FLOTANTE GLOBAL DE DISEÑO (Siempre Visible para Comparar Fácilmente) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-slate-950/95 backdrop-blur-xl text-white p-1.5 rounded-full shadow-2xl border-2 border-emerald-500/40 flex items-center gap-1">
          <button
            onClick={() => switchVersion('v1')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 ${
              version === 'v1'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>V1: Comercial Clásica</span>
          </button>

          <button
            onClick={() => switchVersion('v2')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 ${
              version === 'v2'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>V2: Tiendanube + Aprende.org</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          </button>
        </div>
      </div>

      {/* RENDERIZADO CONDICIONAL DE LA VERSIÓN */}
      {version === 'v2' ? (
        <AppV2 onSwitchToV1={() => switchVersion('v1')} />
      ) : (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white">
          
          {/* Banner Superior Informativo de Versión V1 */}
          <div className="bg-slate-900 text-white text-xs py-2 px-4 sticky top-0 z-40 border-b border-slate-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-slate-800 text-emerald-400 font-black text-[10px] uppercase px-2 py-0.5 rounded-full border border-emerald-500/30">
                  DISEÑO V1 ORIGINAL
                </span>
                <span className="text-slate-300 text-[11px] hidden sm:inline">
                  Esta es la versión clásica comercial intacta.
                </span>
              </div>
              <button
                onClick={() => switchVersion('v2')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-full font-black text-[11px] flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>Ver Nuevo Diseño V2 (Aprende.org + Blog)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Barra de Navegación Principal V1 */}
          <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Contenido Principal V1 */}
          <main className="flex-grow">
            <Hero onOpenQuoteModal={handleOpenQuoteModal} />
            <MarqueeTicker />
            <HowItWorks onOpenQuoteModal={handleOpenQuoteModal} />
            <SolarCalculator onOpenQuoteModal={handleOpenQuoteModal} />
            <TariffEvolutionChart />
            <ProductsServices onOpenQuoteModal={handleOpenQuoteModal} />
            <AgroRuralSolutions onOpenQuoteModal={handleOpenQuoteModal} />
            <IoTDashboard />
            <FinancingAndBenefits onOpenQuoteModal={handleOpenQuoteModal} />
            <CaseStudies onOpenQuoteModal={handleOpenQuoteModal} />
            <AboutUs />
            <ContactSection onOpenQuoteModal={handleOpenQuoteModal} />
          </main>

          {/* Pie de Página V1 */}
          <Footer />

          {/* Modal de Cotización */}
          <ContactModal isOpen={quoteModalOpen} onClose={handleCloseQuoteModal} />

          {/* Botón Flotante Amigable de WhatsApp */}
          <div className="fixed bottom-20 sm:bottom-6 right-6 z-40 flex items-center gap-3">
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
      )}

    </div>
  );
}
