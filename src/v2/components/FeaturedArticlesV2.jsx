import React from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Tag, 
  User, 
  CheckCircle2,
  Calendar,
  Sparkles,
  FileQuestion
} from 'lucide-react';

export default function FeaturedArticlesV2({ 
  articles, 
  onOpenArticle, 
  searchQuery, 
  selectedCategory 
}) {
  return (
    <section id="guias-v2" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Tipo Tiendanube Blog */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>Biblioteca de Guías & Artículos Prácticos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
              Aprende con nuestras guías técnicas y casos reales
            </h2>
          </div>

          <div className="text-xs text-slate-500 font-semibold">
            Mostrando <strong>{articles.length}</strong> {articles.length === 1 ? 'guía' : 'guías'}
            {searchQuery && <span> para "{searchQuery}"</span>}
          </div>
        </div>

        {/* Estado Vacío si no hay resultados */}
        {articles.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <FileQuestion className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No encontramos guías con ese término</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Intenta buscar por palabras clave como "bombeo", "hogar", "recibo", "Brilla" o "RETIE".
            </p>
          </div>
        )}

        {/* Grid de Artículos Tipo Tiendanube */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => onOpenArticle(art.id)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group hover:-translate-y-1"
            >
              <div>
                {/* Imagen del Artículo con Badge */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-black uppercase text-slate-900 shadow-sm">
                    {art.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded-md text-[10px] font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-300" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {art.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-display font-black text-slate-900 leading-snug mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Pie del Card: Autor y Enlace */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                    {art.author.avatar}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-800 line-clamp-1">{art.author.name}</p>
                    <p className="text-[9px] text-slate-400">{art.date}</p>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Leer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
