import React, { useState } from 'react';
import { 
  Sun, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Zap, 
  TrendingDown, 
  ShieldCheck, 
  Sparkles, 
  Calculator,
  CheckCircle2,
  Share2
} from 'lucide-react';
import monteriaArchImg from '../../assets/images/monteria_solar_architecture.jpg';

export default function HeroV2({ onOpenArticle, onOpenQuoteModal }) {
  // Mini simulador táctil integrado dentro del Hero
  const [sliderBill, setSliderBill] = useState(550000);
  const estimatedSavings = Math.round(sliderBill * 0.72);
  const newBill = sliderBill - estimatedSavings;

  return (
    <section id="inicio-v2" className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gradient-to-b from-slate-50 via-white to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Tipo Tiendanube Blog */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Portal de Conocimiento & Soluciones Solares</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Aprende, calcula y ahorra con <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                energía solar en el Caribe
              </span>
            </h1>
          </div>

          <div className="max-w-md text-slate-600 text-xs sm:text-sm leading-relaxed">
            Guías paso a paso, simuladores interactivos, soluciones de bombeo para el campo y proyectos certificados bajo normativa <strong>RETIE</strong> nacidos en el <strong>SENA Montería</strong>.
          </div>
        </div>

        {/* Tarjeta Principal Destacada (Featured Hero Card Estilo Tiendanube) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch hover:border-emerald-300 transition-all duration-300">
          
          {/* Contenido Editorial de la Guía */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-200 rounded-full text-[11px] font-black uppercase tracking-wider">
                  ⭐ Guía Destacada 2026
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5" /> 5 min de lectura
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  Nivel Principiante
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-slate-900 leading-tight">
                Cómo reducir el 70% de tu recibo de luz en Montería y Córdoba con energía solar
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                En el Caribe colombiano el costo del kilovatio-hora supera los $1.065 COP. Descubre cuántos paneles caben en tu techo, cómo calcular tu consumo exacto y cómo pagar la instalación mes a mes en tu factura de gas con Brilla.
              </p>

              {/* Puntos Clave de la Guía */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cálculo de paneles según tu estrato</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Financiación Brilla 0% cuota inicial</span>
                </div>
              </div>
            </div>

            {/* Autor y Acciones */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-sm">
                  OV
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Oscar David Vega</p>
                  <p className="text-[11px] text-slate-500">Técnico Electrónico SENA • EnerGreen</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenArticle('guia-hogar-2026')}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Leer Guía Completa</span>
                </button>
              </div>
            </div>

          </div>

          {/* Imagen y Mini Laboratorio Interactivo */}
          <div className="lg:col-span-5 relative min-h-[320px] bg-slate-900 flex flex-col justify-between overflow-hidden group">
            <img
              src={monteriaArchImg}
              alt="Edificación solar arquitectónica en Montería"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20"></div>

            {/* Badges superiores */}
            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-slate-900 shadow">
                ☀️ 5.2 kWh/m² Radiación en Córdoba
              </span>
              <span className="bg-amber-400 text-slate-950 px-2.5 py-1 rounded-xl text-[10px] font-black uppercase shadow">
                ⚡ AHORRO 72%
              </span>
            </div>

            {/* Mini Widget Interactivo Tipo Aprende.org */}
            <div className="relative z-10 p-5">
              <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-white/60 shadow-2xl">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5 text-amber-500" />
                    Calculador Rápido de Tejado:
                  </span>
                  <span className="font-black text-emerald-700 text-sm">
                    ${sliderBill.toLocaleString('es-CO')}
                  </span>
                </div>
                
                <input
                  type="range"
                  min="200000"
                  max="2000000"
                  step="50000"
                  value={sliderBill}
                  onChange={(e) => setSliderBill(Number(e.target.value))}
                  className="w-full my-2 h-2"
                />

                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
                  <span className="text-slate-500">Ahorro mensual:</span>
                  <span className="font-extrabold text-emerald-700">
                    +${estimatedSavings.toLocaleString('es-CO')} COP
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
