import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { v2FaqList } from '../data/v2Data';
import { companyInfo } from '../../data/energreenData';

export default function FaqSectionV2({ theme, bgStyle }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const textTitle = bgStyle?.isDark ? 'text-white' : 'text-slate-900';
  const textBody = bgStyle?.isDark ? 'text-emerald-100/90' : 'text-slate-600';
  const textMuted = bgStyle?.isDark ? 'text-emerald-200/60' : 'text-slate-500';

  return (
    <section id="faq-v2" className={`py-16 md:py-24 ${bgStyle?.sectionMuted || 'bg-slate-50'} border-t ${bgStyle?.sectionBorder || 'border-slate-200'} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[11px] font-extrabold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Preguntas Frecuentes & Mitos Solares</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-black font-display tracking-tight ${textTitle}`}>
            Todo lo que necesitas saber antes de dar el paso
          </h2>
          <p className={`mt-3 text-xs sm:text-sm ${textBody}`}>
            Respuestas claras y fundamentadas por nuestro equipo de ingenieros en Montería.
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-3.5">
          {v2FaqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`${bgStyle?.cardBg || 'bg-white'} rounded-2xl border ${bgStyle?.cardBorder || 'border-slate-200'} overflow-hidden transition-all shadow-xs`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className={`w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm ${textTitle} hover:${theme?.accentText || 'text-emerald-700'} transition-colors`}
                >
                  <span className="flex-1">{faq.q}</span>
                  <span className={`w-7 h-7 rounded-full ${isOpen ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-500'} flex items-center justify-center shrink-0 transition-all`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className={`px-5 pb-5 pt-1 text-xs leading-relaxed border-t ${bgStyle?.cardBorder || 'border-slate-100'} ${textBody}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner de Contacto Directo */}
        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hola%20ENERGREEN,%20tengo%20una%20pregunta%20sobre%20mi%20factura%20de%20energ%C3%ADa`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>¿Tienes otra pregunta? Habla con un técnico por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
