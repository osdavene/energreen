import React, { useState, useMemo } from 'react';
import NavbarV2 from './components/NavbarV2';
import HeroV2 from './components/HeroV2';
import CategoryPillsV2 from './components/CategoryPillsV2';
import LearningPathsV2 from './components/LearningPathsV2';
import FeaturedArticlesV2 from './components/FeaturedArticlesV2';
import InteractiveLabV2 from './components/InteractiveLabV2';
import CourseModulesV2 from './components/CourseModulesV2';
import FaqSectionV2 from './components/FaqSectionV2';
import NewsletterCommunityV2 from './components/NewsletterCommunityV2';
import ArticleModalV2 from './components/ArticleModalV2';
import FooterV2 from './components/FooterV2';
import ContactModal from '../components/ContactModal';
import { v2Articles } from './data/v2Data';
import { companyInfo } from '../data/energreenData';
import { MessageCircle } from 'lucide-react';

export default function AppV2({ onSwitchToV1 }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleId, setActiveArticleId] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Filtrado de artículos según categoría y búsqueda
  const filteredArticles = useMemo(() => {
    return v2Articles.filter((art) => {
      // Filtro de categoría
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'hogar' && (art.category.toLowerCase().includes('hogar') || art.category.toLowerCase().includes('residencial'))) ||
        (selectedCategory === 'agro' && (art.category.toLowerCase().includes('agro') || art.category.toLowerCase().includes('bombeo') || art.category.toLowerCase().includes('finca'))) ||
        (selectedCategory === 'finanzas' && (art.category.toLowerCase().includes('finanzas') || art.category.toLowerCase().includes('brilla') || art.category.toLowerCase().includes('costo'))) ||
        (selectedCategory === 'retie' && (art.category.toLowerCase().includes('retie') || art.category.toLowerCase().includes('seguridad') || art.category.toLowerCase().includes('normativa'))) ||
        (selectedCategory === 'sena' && (art.category.toLowerCase().includes('sena') || art.category.toLowerCase().includes('capacitaci') || art.category.toLowerCase().includes('taller')));

      // Filtro de texto de búsqueda
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        art.title.toLowerCase().includes(query) ||
        art.excerpt.toLowerCase().includes(query) ||
        art.tags.some((t) => t.toLowerCase().includes(query)) ||
        art.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Contadores por categoría para las píldoras
  const counts = useMemo(() => {
    const c = { all: v2Articles.length, hogar: 0, agro: 0, finanzas: 0, retie: 0, sena: 0 };
    v2Articles.forEach((art) => {
      const cat = art.category.toLowerCase();
      if (cat.includes('hogar') || cat.includes('residencial')) c.hogar++;
      if (cat.includes('agro') || cat.includes('bombeo') || cat.includes('finca')) c.agro++;
      if (cat.includes('finanzas') || cat.includes('brilla') || cat.includes('costo')) c.finanzas++;
      if (cat.includes('retie') || cat.includes('seguridad') || cat.includes('normativa')) c.retie++;
      if (cat.includes('sena') || cat.includes('capacitaci') || cat.includes('taller')) c.sena++;
    });
    return c;
  }, []);

  // Artículo activo para el modal lector
  const activeArticle = useMemo(() => {
    if (!activeArticleId) return null;
    return v2Articles.find((a) => a.id === activeArticleId) || v2Articles[0];
  }, [activeArticleId]);

  const handleOpenArticle = (id) => {
    setActiveArticleId(id);
  };

  const handleCloseArticle = () => {
    setActiveArticleId(null);
  };

  const handleSelectTrack = (trackCategory) => {
    setSelectedCategory(trackCategory);
    const guiasElement = document.getElementById('guias-v2');
    if (guiasElement) {
      guiasElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      
      {/* Navegación V2 Tipo Aprende.org + Tiendanube */}
      <NavbarV2
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSwitchToV1={onSwitchToV1}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Hero Editorial Destacado con Mini Simulador Táctil */}
      <HeroV2
        onOpenArticle={handleOpenArticle}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Píldoras de Filtro Tipo Tiendanube Blog */}
      <CategoryPillsV2
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        counts={counts}
      />

      {/* Rutas de Aprendizaje Modulares Tipo Aprende.org */}
      <LearningPathsV2
        onSelectTrack={handleSelectTrack}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Biblioteca de Guías y Artículos con Filtro */}
      <FeaturedArticlesV2
        articles={filteredArticles}
        onOpenArticle={handleOpenArticle}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />

      {/* Laboratorio Virtual Solar & Telemetría IoT en Tiempo Real */}
      <InteractiveLabV2
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Módulos de Formación Técnica y Respaldo Académico SENA */}
      <CourseModulesV2
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Preguntas Frecuentes y Mitos de Energía Solar en Córdoba */}
      <FaqSectionV2 />

      {/* Comunidad Solar & Boletín Educativo */}
      <NewsletterCommunityV2 />

      {/* Pie de Página Institucional V2 */}
      <FooterV2 onSwitchToV1={onSwitchToV1} />

      {/* Modal Lector de Artículos Tipo Blog Tiendanube */}
      <ArticleModalV2
        article={activeArticle}
        isOpen={!!activeArticleId}
        onClose={handleCloseArticle}
        onOpenQuoteModal={() => {
          setActiveArticleId(null);
          setQuoteModalOpen(true);
        }}
      />

      {/* Modal General de Cotización de EnerGreen */}
      <ContactModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      {/* Botón Flotante Amigable de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 text-xs font-semibold text-slate-800">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>¿Dudas con tu factura Afinia? <strong>¡Escríbenos!</strong></span>
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
