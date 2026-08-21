import React from 'react';
import { Sun, ArrowRight, ShieldCheck, TrendingDown, Zap, Award, Sparkles, CheckCircle2, MapPin, Play } from 'lucide-react';
import { companyInfo } from '../data/energreenData';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Luces sutiles de fondo */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-emerald-100/40 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial tipo The Way Studio */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Montería • Córdoba • Región Caribe</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-slate-900 uppercase leading-[0.95]">
              Energía Solar <br className="hidden sm:block" />
              <span className="text-emerald-600">Sostenible</span> & <span className="text-amber-500">Rentable</span>
            </h1>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Diseñamos, instalamos y mantenemos sistemas fotovoltaicos certificados bajo norma <strong>RETIE</strong> para hogares, fincas ganaderas y empresas en Córdoba. Reduce hasta el <strong>70% en tu factura</strong> con financiación Brilla.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#calculadora"
                className="px-6 py-3.5 text-xs font-extrabold text-white bg-slate-900 hover:bg-emerald-600 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-slate-900/10"
              >
                <span>Calcular Ahorro en COP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-all"
              >
                Solicitar Visita Técnica
              </button>
            </div>
          </div>
        </div>

        {/* Mosaico Visual de Impacto (Editorial Architectural Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Imagen Principal Grande (Arquitectura Sostenible en Montería) */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl group min-h-[380px] sm:min-h-[460px]">
            <img
              src="/images/monteria_solar_architecture.jpg"
              alt="Proyecto solar arquitectónico en Montería Córdoba"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

            {/* Badge Flotante Superior */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg text-xs font-extrabold text-slate-900 flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
              <span>Proyecto Arquitectónico • Montería Sostenible</span>
            </div>

            {/* Sticker de Ahorro tipo Mr. Tasty */}
            <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-display font-black text-xs px-3.5 py-2 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
              ⚡ HASTA 70% AHORRO
            </div>

            {/* Información Inferior */}
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300">
                  Infraestructura Fotovoltaica
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white mt-0.5">
                  Centro Sostenible del Sinú
                </h3>
                <p className="text-xs text-slate-300 max-w-sm mt-1">
                  Generación de energía limpia y confort térmico para edificaciones urbanas e institucionales.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/30 text-center shrink-0">
                <span className="text-[10px] uppercase font-bold text-slate-200 block">Irradiancia Solar</span>
                <span className="text-lg font-black font-display text-amber-300">5.2 kWh / m² / día</span>
              </div>
            </div>
          </div>

          {/* Columna Lateral con 2 Tarjetas Editorial */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Tarjeta 1: Residencial */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group flex-1 min-h-[220px]">
              <img
                src="/images/hero_solar_house.jpg"
                alt="Instalación solar residencial en Montería"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-extrabold text-slate-900">
                Hogares Estratos 2-6
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold text-emerald-300">Residencial On-Grid</p>
                <h4 className="text-base font-display font-black text-white">Viviendas & Conjuntos</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Financia tus paneles a través de tu factura de gas con Brilla.</p>
              </div>
            </div>

            {/* Tarjeta 2: Agropecuario */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group flex-1 min-h-[220px]">
              <img
                src="/images/solar_pumping_cattle.jpg"
                alt="Bombeo solar en Córdoba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2.5 py-1 rounded-lg text-[11px] font-extrabold">
                Agro & Ganadería
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold text-amber-300">Bombeo Solar Sin Diésel</p>
                <h4 className="text-base font-display font-black text-white">Pozos, Riego & Fincas</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Agua constante las 24 horas en Cereté, Lorica y Sahagún.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
