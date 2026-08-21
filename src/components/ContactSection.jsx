import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Send, 
  Sun,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/energreenData';

export default function ContactSection({ onOpenQuoteModal }) {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      
      {/* Luces decorativas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-fresh-card p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Columna Izquierda: Información de Contacto */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
                <span>Atención Presencial & Digital en Córdoba</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 leading-tight">
                ¿Listo para pasarte a la <span className="gradient-fresh-hero">energía solar</span>?
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Agenda un diagnóstico técnico sin costo. Evaluamos las condiciones de tu cubierta o predio, tus consumos energéticos y te entregamos un diseño personalizado con retorno de inversión garantizado.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 text-sm text-slate-700">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Sede Principal:</p>
                    <p className="font-extrabold text-slate-900">{companyInfo.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-700">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Línea Telefónica & WhatsApp:</p>
                    <p className="font-extrabold text-slate-900">{companyInfo.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-700">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Correo Electrónico:</p>
                    <p className="font-extrabold text-slate-900">{companyInfo.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-700">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Horario de Atención:</p>
                    <p className="font-extrabold text-slate-900">{companyInfo.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta de Contacto Directo */}
            <div className="lg:col-span-6 bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/50 p-6 sm:p-8 rounded-3xl border border-emerald-200 text-center space-y-6 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 text-white">
                <MessageSquare className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-display font-black text-slate-900">
                  Chatea directamente con nuestro equipo técnico
                </h3>
                <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto">
                  Atención rápida para resolver dudas sobre el programa Brilla, tarifas de energía o solicitud de visita técnica en Montería.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-4 px-6 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-emerald-600 via-energreen-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Abrir Formulario de Cotización Rápida</span>
                </button>

                <a
                  href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hola%20ENERGREEN,%20deseo%20asesoría%20sobre%20energía%20solar%20para%20mi%20inmueble`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Cumplimiento normativo RETIE • Asesoría técnica sin compromiso</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
