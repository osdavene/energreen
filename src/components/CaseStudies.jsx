import React from 'react';
import { caseStudies } from '../data/energreenData';
import { Award, TrendingDown, Sun, Quote, CheckCircle2, Trees, Sparkles, Building2 } from 'lucide-react';
import commercialCaribeImg from '../assets/images/commercial_solar_caribe.jpg';

export default function CaseStudies({ onOpenQuoteModal }) {
  return (
    <section id="casos-exito" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Casos de Éxito en Córdoba & Caribe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Resultados tangibles y <span className="gradient-fresh-hero">clientes satisfechos</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Proyectos reales que ya disfrutan de independencia energética y reducción radical en sus costos operativos y facturas en el Caribe.
          </p>
        </div>

        {/* Banner Destacado del Hotel Boutique Caribe */}
        <div className="glass-fresh-card rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-6 h-72 sm:h-96 lg:h-auto relative overflow-hidden">
            <img
              src={commercialCaribeImg}
              alt="Instalación solar comercial en Hotel Caribe San Antero"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-xl shadow-md border border-slate-100 text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Proyecto Comercial • San Antero / Lorica (35 kWp)</span>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center space-y-4">
            <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider">
              Caso Comercial Destacado
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
              Hotel Boutique Sol & Mar (San Antero)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Instalación de 35 kWp con banco de acumulación en baterías de litio para garantizar aire acondicionado y refrigeración continua a turistas durante todo el año, eliminando pérdidas por cortes de red.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                <p className="text-[10px] font-bold text-emerald-800 uppercase">Ahorro Mensual</p>
                <p className="text-xl font-display font-black text-emerald-700 mt-0.5">$5.800.000 COP</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                <p className="text-[10px] font-bold text-amber-800 uppercase">Reducción Emisiones</p>
                <p className="text-xl font-display font-black text-amber-700 mt-0.5">41.5 Ton CO₂ / año</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all"
              >
                Cotizar Proyecto para Hotel o Comercio
              </button>
            </div>
          </div>
        </div>

        {/* Grid de Casos Adicionales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="glass-fresh-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between relative group hover:-translate-y-1 transition-all"
            >
              <div>
                {/* Badge de Categoría */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    {item.category}
                  </span>
                  <span className="text-xs font-extrabold text-amber-700 flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    <Sun className="w-3.5 h-3.5 text-amber-600" />
                    {item.capacity}
                  </span>
                </div>

                <h3 className="text-lg font-display font-black text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                {/* Métricas del Caso */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-100">
                    <p className="text-[10px] text-emerald-800 font-bold">Ahorro Logrado</p>
                    <p className="text-base font-display font-black text-emerald-700 mt-0.5">
                      {item.results.savingsPercent}
                    </p>
                  </div>

                  <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-100">
                    <p className="text-[10px] text-amber-800 font-bold">Ahorro Mensual</p>
                    <p className="text-base font-display font-black text-amber-700 mt-0.5">
                      {item.results.monthlySaved}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <p className="text-[10px] text-slate-500 font-medium">Paneles</p>
                    <p className="text-base font-display font-black text-slate-900 mt-0.5">
                      {item.results.panelsCount} Módulos
                    </p>
                  </div>

                  <div className="bg-sky-50 p-3 rounded-2xl border border-sky-100">
                    <p className="text-[10px] text-sky-800 font-bold">CO₂ Evitado</p>
                    <p className="text-base font-display font-black text-sky-700 mt-0.5">
                      {item.results.co2Reduced}
                    </p>
                  </div>
                </div>

                {/* Cita / Testimonio */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-4 relative">
                  <Quote className="w-4 h-4 text-emerald-600 mb-1 opacity-60" />
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-slate-700">{item.client}</span>
                <span className="text-[10px] text-emerald-700 font-extrabold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all"
          >
            Quiero un Proyecto Solar Similar para mi Inmueble
          </button>
        </div>

      </div>
    </section>
  );
}
