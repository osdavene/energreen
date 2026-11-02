import React from 'react';
import { X, Clock, Calendar, Share2, CheckCircle2, MessageCircle, ArrowRight, Sun, Sparkles } from 'lucide-react';
import { companyInfo } from '../../data/energreenData';

export default function ArticleModalV2({ article, isOpen, onClose, onOpenQuoteModal }) {
  if (!isOpen || !article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace de la guía copiado al portapapeles!');
    }
  };

  const getWhatsAppArticleUrl = () => {
    const text = `Hola ENERGREEN! 👋 Estuve leyendo la guía "${article.title}" en su portal web y me gustaría recibir asesoría personalizada para mi predio en Córdoba.`;
    return `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col my-auto">
        
        {/* Cabecera del Modal */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 uppercase border border-emerald-200">
              {article.category}
            </span>
            <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-500" />
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition-colors"
              title="Compartir guía"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contenido Scrolleable */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          
          {/* Título Principal */}
          <h1 className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-tight">
            {article.title}
          </h1>

          {/* Autor y Fecha */}
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
              {article.author.avatar}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{article.author.name}</p>
              <p className="text-[11px] text-slate-500">{article.author.role} • {article.date}</p>
            </div>
          </div>

          {/* Imagen del Artículo */}
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Puntos Clave Destacados */}
          {article.keyTakeaways && (
            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 space-y-2">
              <p className="text-xs font-extrabold uppercase text-emerald-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Puntos Clave que Aprenderás:
              </p>
              <ul className="space-y-1.5 pt-1">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Texto Completo */}
          <div className="prose prose-slate prose-sm max-w-none text-slate-700 leading-relaxed text-xs sm:text-sm space-y-4">
            {article.fullContent.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={pIdx} className="text-lg font-display font-black text-slate-900 mt-5 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={pIdx} className="list-disc pl-5 space-y-1">
                    {paragraph.split('\n').map((li, lIdx) => (
                      <li key={lIdx}>{li.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ')) {
                return (
                  <ol key={pIdx} className="list-decimal pl-5 space-y-1">
                    {paragraph.split('\n').map((li, lIdx) => (
                      <li key={lIdx}>{li.replace(/^[0-9]+\.\s*/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Llamado a la Acción Inferior */}
          <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold text-slate-900">¿Quieres aplicar esto a tu factura o predio?</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Realizamos el estudio de sombras y cálculo de paneles gratis.</p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={getWhatsAppArticleUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Asesoría por WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 transition-all"
              >
                Cotizar
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
