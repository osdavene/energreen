import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { v2FaqList } from '../data/v2Data';
import { companyInfo } from '../../data/energreenData';

export default function FaqSectionV2() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-v2" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[11px] font-extrabold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Preguntas Frecuentes & Mitos Solares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Todo lo que necesitas saber antes de dar el paso
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm">
            Respuestas claras y fundamentadas por nuestro equipo de ingenieros en Montería.
          </p>
        </div>

        {/* Acordeón */}
        <div className="space-y-3">
          {v2FaqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-black text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition-colors"
                >
                  <span>{item.q}</span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-emerald-100 text-emerald-800 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout de WhatsApp si tienen otra duda */}
        <div className="mt-8 text-center bg-emerald-50 p-6 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-xs font-bold text-emerald-950">¿Tienes una pregunta específica sobre tu recibo?</p>
            <p className="text-[11px] text-emerald-700 mt-0.5">Envíanos tu duda o recibo de energía y te respondemos en minutos.</p>
          </div>
          <a
            href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hola%20ENERGREEN,%20tengo%20una%20pregunta%20sobre%20energ%C3%ADa%20solar`}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
