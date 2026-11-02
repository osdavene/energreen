import React, { useState, useMemo } from 'react';
import NavbarV2 from './components/NavbarV2';
import ThemeSelectorV2 from './components/ThemeSelectorV2';
import HeroV2 from './components/HeroV2';
import CourseCatalogV2 from './components/CourseCatalogV2';
import CourseModalV2 from './components/CourseModalV2';
import CategoryPillsV2 from './components/CategoryPillsV2';
import FeaturedArticlesV2 from './components/FeaturedArticlesV2';
import InteractiveLabV2 from './components/InteractiveLabV2';
import FaqSectionV2 from './components/FaqSectionV2';
import NewsletterCommunityV2 from './components/NewsletterCommunityV2';
import ArticleModalV2 from './components/ArticleModalV2';
import FooterV2 from './components/FooterV2';
import ContactModal from '../components/ContactModal';
import { v2Articles } from './data/v2Data';
import { colorThemes } from './theme/themeData';
import { companyInfo } from '../data/energreenData';
import { MessageCircle } from 'lucide-react';

export default function AppV2({ onSwitchToV1 }) {
  // Paleta de Color Activa (por defecto Caribe Solar)
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('energreen_theme') || 'caribe';
    }
    return 'caribe';
  });

  const theme = colorThemes[currentThemeId] || colorThemes.caribe;

  const handleSelectTheme = (themeId) => {
    setCurrentThemeId(themeId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('energreen_theme', themeId);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleId, setActiveArticleId] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Filtrado de artículos de revista
  const filteredArticles = useMemo(() => {
    return v2Articles.filter((art) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'hogar' && (art.category.toLowerCase().includes('hogar') || art.category.toLowerCase().includes('ahorro'))) ||
        (selectedCategory === 'agro' && (art.category.toLowerCase().includes('agro') || art.category.toLowerCase().includes('bombeo'))) ||
        (selectedCategory === 'finanzas' && (art.category.toLowerCase().includes('finanzas') || art.category.toLowerCase().includes('brilla'))) ||
        (selectedCategory === 'retie' && (art.category.toLowerCase().includes('retie') || art.category.toLowerCase().includes('normativa'))) ||
        (selectedCategory === 'sena' && (art.category.toLowerCase().includes('sena') || art.category.toLowerCase().includes('capacitaci')));

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

  // Contadores para pastillas de categorías
  const counts = useMemo(() => {
    const c = { all: v2Articles.length, hogar: 0, agro: 0, finanzas: 0, retie: 0, sena: 0 };
    v2Articles.forEach((art) => {
      const cat = art.category.toLowerCase();
      if (cat.includes('hogar') || cat.includes('ahorro')) c.hogar++;
      if (cat.includes('agro') || cat.includes('bombeo')) c.agro++;
      if (cat.includes('finanzas') || cat.includes('brilla')) c.finanzas++;
      if (cat.includes('retie') || cat.includes('normativa')) c.retie++;
      if (cat.includes('sena') || cat.includes('capacitaci')) c.sena++;
    });
    return c;
  }, []);

  const activeArticle = useMemo(() => {
    if (!activeArticleId) return null;
    return v2Articles.find((a) => a.id === activeArticleId) || v2Articles[0];
  }, [activeArticleId]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased transition-colors duration-300">
      
      {/* 1. Header & Top Bar con Buscador y Selector V1 */}
      <NavbarV2
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSwitchToV1={onSwitchToV1}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        theme={theme}
      />

      {/* 2. Barra Interactiva de Selección de Tonos de Color */}
      <ThemeSelectorV2
        currentThemeId={currentThemeId}
        onSelectTheme={handleSelectTheme}
      />

      {/* 3. Hero Editorial Tipo Tiendanube Blog */}
      <HeroV2
        onOpenArticle={(id) => setActiveArticleId(id)}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        theme={theme}
      />

      {/* 4. Catálogo de Cursos y Oficios Abiertos Tipo Aprende.org */}
      <CourseCatalogV2
        onSelectCourse={(course) => setSelectedCourse(course)}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        theme={theme}
      />

      {/* 5. Pastillas de Filtro de Revista */}
      <CategoryPillsV2
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        counts={counts}
        theme={theme}
      />

      {/* 6. Biblioteca de Guías y Artículos Magazine (Grid 3 columnas) */}
      <FeaturedArticlesV2
        articles={filteredArticles}
        onOpenArticle={(id) => setActiveArticleId(id)}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        theme={theme}
      />

      {/* 7. Laboratorio Virtual de Prácticas y Glosario Solar Aprende.org */}
      <InteractiveLabV2
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        theme={theme}
      />

      {/* 8. Preguntas Frecuentes y Mitos en Córdoba */}
      <FaqSectionV2 />

      {/* 9. Boletín Informativo de la Comunidad Solar */}
      <NewsletterCommunityV2 />

      {/* 10. Pie de Página Institucional */}
      <FooterV2 onSwitchToV1={onSwitchToV1} />

      {/* Modal Interactivo de Curso (Aprende.org) */}
      <CourseModalV2
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenQuoteModal={() => {
          setSelectedCourse(null);
          setQuoteModalOpen(true);
        }}
        theme={theme}
      />

      {/* Modal Lector de Artículos (Tiendanube Blog) */}
      <ArticleModalV2
        article={activeArticle}
        isOpen={!!activeArticleId}
        onClose={() => setActiveArticleId(null)}
        onOpenQuoteModal={() => {
          setActiveArticleId(null);
          setQuoteModalOpen(true);
        }}
      />

      {/* Modal de Cotización */}
      <ContactModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      {/* Botón Flotante Amigable de WhatsApp */}
      <div className="fixed bottom-20 sm:bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hola%20ENERGREEN,%20deseo%20asesoría%20sobre%20energía%20solar%20fotovoltaica`}
          target="_blank"
          rel="noreferrer"
          className="relative p-4 bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
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
