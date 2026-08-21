import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
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
import { MessageCircle } from 'lucide-react';
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
      
      {/* Barra de Navegación Principal */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Contenido Principal */}
      <main className="flex-grow">
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        
        {/* Ticker / Cinta Marquee Dinámica tipo Mr. Tasty */}
        <MarqueeTicker />

        {/* Calculadora Solar Interactiva */}
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

        {/* Casos de Éxito en Córdoba & Galería Editorial */}
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

      {/* Botón Flotante de WhatsApp para Contacto Inmediato */}
      <a
        href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hola%20ENERGREEN,%20deseo%20asesoría%20sobre%20energía%20solar%20fotovoltaica`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-110 transition-all flex items-center gap-2.5 group"
        aria-label="Hablar por WhatsApp con un asesor"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold px-0 group-hover:px-1">
          Asesoría Solar
        </span>
      </a>

    </div>
  );
}
