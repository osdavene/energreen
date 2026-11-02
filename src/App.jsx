import React, { useState } from 'react';
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
import { MessageCircle, Sparkles, Sun } from 'lucide-react';
import { companyInfo } from './data/energreenData';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white">
      
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
