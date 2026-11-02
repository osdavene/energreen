import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Flame,
  Award,
  Sun
} from 'lucide-react';
import { v2Articles } from '../data/v2Data';

export default function HeroV2({ onOpenArticle, onOpenQuoteModal, theme }) {
  const featuredArticle = v2Articles[0]; // Guía Hogar 2026
  const trendingArticles = v2Articles.slice(1, 4); // Las siguientes 3 más leídas

  return (
    <section id="inicio-v2" className="pt-6 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial Limpia Tipo Tiendanube Blog */}
        <div className="text-center max-w-3xl mx-auto mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Revista Digital & Academia Solar del Caribe</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight leading-tight">
            Aprende a transformar el sol en <br className="hidden sm:inline" />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>
              ahorro real en tu factura
            </span>
          </h1>
          <p className="mt-3 text-slate-600 text-xs sm:text-base leading-relaxed">
            Guías maestras, cursos abiertos tipo Aprende.org y dimensionamiento financiero con crédito Brilla para Córdoba y la Costa Caribe.
          </p>
        </div>

        {/* Layout Tiendanube: Destacado Grande + Lo Más Leído */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda (7 cols): Artículo Portada de la Semana */}
          <div className={`lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-lg ${theme.cardBorderHover} transition-all duration-300 overflow-hidden flex flex-col justify-between group`}>
            <div>
              {/* Imagen Grande de Cabecera */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute top-4 left-4 ${theme.heroBadge} font-black text-xs uppercase px-3 py-1 rounded-full shadow-md tracking-wider`}>
                  ⭐ Guía Portada
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-xl flex items-center gap-1.5 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              {/* Contenido Editorial */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-black ${theme.accentText} ${theme.accentBgLight} px-2.5 py-1 rounded-lg border ${theme.accentBorderLight}`}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-slate-400">• {featuredArticle.views}</span>
                </div>

                <h2 
                  onClick={() => onOpenArticle(featuredArticle.id)}
                  className={`text-2xl sm:text-3xl font-black font-display text-slate-900 group-hover:${theme.accentText} transition-colors cursor-pointer leading-tight`}
                >
                  {featuredArticle.title}
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                {/* Bullets clave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className={`w-4 h-4 ${theme.accentTextLight} shrink-0`} />
                    <span>Costos reales del kWh en Córdoba</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className={`w-4 h-4 ${theme.accentTextLight} shrink-0`} />
                    <span>0% cuota inicial con Crédito Brilla</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie del Card con Autor y Botón de Lectura */}
            <div className="p-6 sm:p-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center">
                  {featuredArticle.author.avatar}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{featuredArticle.author.name}</p>
                  <p className="text-[10px] text-slate-500">{featuredArticle.author.role}</p>
                </div>
              </div>

              <button
                onClick={() => onOpenArticle(featuredArticle.id)}
                className={`px-5 py-2.5 ${theme.primaryButton} font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Leer Guía</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha (5 cols): Ranking "Lo Más Leído" Tipo Tiendanube */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500 fill-current" />
                <h3 className="text-base font-black font-display text-slate-900">
                  Lo Más Leído de la Semana
                </h3>
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Córdoba 2026
              </span>
            </div>

            {/* Lista numerada de artículos */}
            <div className="space-y-4">
              {trendingArticles.map((art, idx) => (
                <div
                  key={art.id}
                  onClick={() => onOpenArticle(art.id)}
                  className={`bg-white rounded-2xl border border-slate-200 p-4 ${theme.cardBorderHover} shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4 cursor-pointer group`}
                >
                  {/* Número de Ranking 01, 02, 03 */}
                  <span className={`text-2xl font-black font-display text-slate-300 group-hover:${theme.accentText} transition-colors shrink-0`}>
                    0{idx + 1}
                  </span>

                  {/* Info del artículo */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <span className={`text-[10px] font-black uppercase ${theme.accentText} ${theme.accentBgLight} px-2 py-0.5 rounded`}>
                      {art.category}
                    </span>
                    <h4 className={`text-xs sm:text-sm font-bold text-slate-900 group-hover:${theme.accentText} transition-colors line-clamp-2 leading-snug`}>
                      {art.title}
                    </h4>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-500" />
                        {art.readTime}
                      </span>
                      <span>• {art.views}</span>
                    </div>
                  </div>

                  {/* Mini thumbnail */}
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>

            {/* Banner Compacto de Cotización Rápida con Gradiente de la Paleta */}
            <div className={`bg-gradient-to-br ${theme.bannerGradient} text-white rounded-3xl p-6 shadow-xl relative overflow-hidden`}>
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] uppercase font-black bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
                  Asesoría Gratuita
                </span>
                <h4 className="text-lg font-bold font-display leading-tight">
                  ¿Quieres saber cuántos paneles necesita tu casa o finca?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Envíanos una foto de tu recibo de energía y nuestros técnicos SENA te entregan un estudio técnico sin costo en menos de 2 horas.
                </p>
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Solicitar Estudio Técnico Gratis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
