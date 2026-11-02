import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sun, 
  Zap, 
  TrendingDown, 
  ShieldCheck, 
  Coins, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  Award
} from 'lucide-react';
import { companyInfo } from '../../data/energreenData';
import { v2Glossary } from '../data/v2Data';

export default function InteractiveLabV2({ onOpenQuoteModal }) {
  const [billAmount, setBillAmount] = useState(650000);
  const [selectedTerm, setSelectedTerm] = useState(48); // meses
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState(0);

  // Cálculos matemáticos solares
  const kwhRate = 1065; // COP por kWh en Córdoba
  const estimatedKwh = Math.round(billAmount / kwhRate);
  const estimatedPanels = Math.max(3, Math.ceil(estimatedKwh / 65));
  const estimatedKwp = (estimatedPanels * 0.55).toFixed(1);
  const estimatedMonthlySavings = Math.round(billAmount * 0.72);
  const newMonthlyBill = billAmount - estimatedMonthlySavings;

  // Financiación Brilla estimada
  const systemEstimatedCost = estimatedPanels * 2100000;
  const brillaMonthlyInstallment = Math.round((systemEstimatedCost * 1.35) / selectedTerm);
  const netMonthlyCashflow = estimatedMonthlySavings - brillaMonthlyInstallment;

  return (
    <section id="laboratorio-v2" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera del Laboratorio Aprende.org */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-black uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-emerald-700" />
            <span>Laboratorio Virtual de Prácticas • Taller de Dimensionamiento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Calcula la amortización de tus paneles solares
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm">
            Aprende a calcular la potencia requerida para tu tejado y cómo pagar la instalación mes a mes en el recibo del gas sin cuota inicial.
          </p>
        </div>

        {/* Panel del Laboratorio en Dos Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda (7 cols): Simulador Interactivo */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                  ¿Cuánto pagas actualmente a Afinia cada mes?
                </label>
                <span className="text-lg font-black text-emerald-700 font-display">
                  ${billAmount.toLocaleString('es-CO')} COP
                </span>
              </div>
              <input
                type="range"
                min={200000}
                max={2500000}
                step={25000}
                value={billAmount}
                onChange={(e) => setBillAmount(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>$200.000 (Estrato 2-3)</span>
                <span>$1.200.000 (Estrato 4-5)</span>
                <span>$2.500.000+ (Comercio)</span>
              </div>
            </div>

            {/* Plazos Brilla */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
                Plazo estimado con Crédito Brilla (Factura de Gas):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[36, 48, 60].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSelectedTerm(term)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      selectedTerm === term
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {term} Meses
                  </button>
                ))}
              </div>
            </div>

            {/* Resultados Técnicos Didácticos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                <Sun className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <p className="text-[10px] uppercase font-bold text-slate-400">Paneles Recomendados</p>
                <p className="text-xl font-black text-slate-900 font-display">{estimatedPanels} módulos</p>
                <p className="text-[10px] text-slate-500 font-semibold">{estimatedKwp} kWp en techo</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                <TrendingDown className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="text-[10px] uppercase font-bold text-slate-400">Ahorro Mensual</p>
                <p className="text-xl font-black text-emerald-700 font-display">-${estimatedMonthlySavings.toLocaleString('es-CO')}</p>
                <p className="text-[10px] text-emerald-600 font-semibold">Reducción del 72%</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center col-span-2 sm:col-span-1">
                <Coins className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                <p className="text-[10px] uppercase font-bold text-slate-400">Cuota Brilla</p>
                <p className="text-xl font-black text-slate-900 font-display">~${brillaMonthlyInstallment.toLocaleString('es-CO')}</p>
                <p className="text-[10px] text-slate-500 font-semibold">Sin cuota inicial</p>
              </div>
            </div>

            {/* Balance Financiero Neto */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-emerald-900">
                  {netMonthlyCashflow >= 0 ? '¡El ahorro supera la cuota desde el mes 1!' : 'Inversión casi neutra mes a mes'}
                </p>
                <p className="text-[11px] text-emerald-700">
                  Tu nuevo recibo de energía bajará a aprox: <strong>${newMonthlyBill.toLocaleString('es-CO')} COP/mes</strong>.
                </p>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-colors shrink-0"
              >
                Solicitar Visita
              </button>
            </div>

          </div>

          {/* Columna Derecha (5 cols): Glosario Técnico Interactivo Aprende.org */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="text-sm font-black font-display text-slate-900 uppercase tracking-wider">
                  Glosario Técnico Solar (SENA)
                </h3>
                <p className="text-[11px] text-slate-500">Términos fundamentales que todo usuario debe conocer</p>
              </div>
            </div>

            <div className="space-y-2">
              {v2Glossary.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveGlossaryTerm(idx)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    activeGlossaryTerm === idx
                      ? 'bg-blue-50/70 border-blue-300 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p className="font-bold text-slate-900 flex items-center justify-between">
                    <span>{item.term}</span>
                    <span className="text-[10px] text-blue-600 font-extrabold">{activeGlossaryTerm === idx ? '▲' : '▼'}</span>
                  </p>
                  {activeGlossaryTerm === idx && (
                    <p className="mt-2 text-slate-600 leading-relaxed text-[11px]">
                      {item.def}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <p className="text-[11px] text-slate-400">
                Basado en el manual formativo de la Ficha SENA 3065832 • Montería, Córdoba.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
