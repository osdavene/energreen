import React, { useState } from 'react';
import { 
  Calculator, 
  Sun, 
  TrendingDown, 
  Coins, 
  BookOpen 
} from 'lucide-react';
import { v2Glossary } from '../data/v2Data';

export default function InteractiveLabV2({ onOpenQuoteModal, theme, bgStyle }) {
  const [billAmount, setBillAmount] = useState(650000);
  const [selectedTerm, setSelectedTerm] = useState(48); // meses
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState(0);

  const textTitle = bgStyle?.isDark ? 'text-white' : 'text-slate-900';
  const textBody = bgStyle?.isDark ? 'text-emerald-100/90' : 'text-slate-600';
  const textMuted = bgStyle?.isDark ? 'text-emerald-200/60' : 'text-slate-500';

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
    <section id="laboratorio-v2" className={`py-16 md:py-24 ${bgStyle?.pageBg || 'bg-white'} border-b ${bgStyle?.sectionBorder || 'border-slate-200'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera del Laboratorio Aprende.org */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${theme.badge} text-[11px] font-black uppercase tracking-wider mb-3`}>
            <Calculator className="w-4 h-4" />
            <span>Laboratorio Virtual de Prácticas • Taller de Dimensionamiento</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-black font-display tracking-tight ${textTitle}`}>
            Calcula la amortización de tus paneles solares
          </h2>
          <p className={`mt-3 text-xs sm:text-sm ${textBody}`}>
            Aprende a calcular la potencia requerida para tu tejado y cómo pagar la instalación mes a mes en el recibo del gas sin cuota inicial.
          </p>
        </div>

        {/* Panel del Laboratorio en Dos Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda (7 cols): Simulador Interactivo */}
          <div className={`lg:col-span-7 ${bgStyle?.cardBgAlt || 'bg-slate-50'} rounded-3xl p-6 sm:p-8 border ${bgStyle?.cardBorder || 'border-slate-200'} ${bgStyle?.cardShadow || 'shadow-sm'} space-y-6`}>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`text-xs font-black uppercase tracking-wider ${textTitle}`}>
                  ¿Cuánto pagas actualmente a Afinia cada mes?
                </label>
                <span className={`text-lg font-black ${theme.accentText} font-display`}>
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
                className={`w-full h-3 bg-slate-200/80 rounded-lg appearance-none cursor-pointer ${theme.sliderAccent}`}
              />
              <div className={`flex justify-between text-[10px] ${textMuted} font-bold mt-1`}>
                <span>$200.000 (Estrato 2-3)</span>
                <span>$1.200.000 (Estrato 4-5)</span>
                <span>$2.500.000+ (Comercio)</span>
              </div>
            </div>

            {/* Plazos Brilla */}
            <div>
              <label className={`text-xs font-black uppercase tracking-wider ${textTitle} block mb-2`}>
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
                        : `${bgStyle?.cardBg || 'bg-white'} text-slate-700 border ${bgStyle?.cardBorder || 'border-slate-200'} hover:bg-emerald-50/50`
                    }`}
                  >
                    {term} Meses
                  </button>
                ))}
              </div>
            </div>

            {/* Resultados Técnicos Didácticos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className={`${bgStyle?.cardBg || 'bg-white'} p-4 rounded-2xl border ${bgStyle?.cardBorder || 'border-slate-200'} text-center`}>
                <Sun className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <p className={`text-[10px] uppercase font-bold ${textMuted}`}>Paneles Recomendados</p>
                <p className={`text-xl font-black ${textTitle} font-display`}>{estimatedPanels} módulos</p>
                <p className={`text-[10px] ${textMuted} font-semibold`}>{estimatedKwp} kWp en techo</p>
              </div>

              <div className={`${bgStyle?.cardBg || 'bg-white'} p-4 rounded-2xl border ${bgStyle?.cardBorder || 'border-slate-200'} text-center`}>
                <TrendingDown className={`w-5 h-5 ${theme.accentText} mx-auto mb-1`} />
                <p className={`text-[10px] uppercase font-bold ${textMuted}`}>Ahorro Mensual</p>
                <p className={`text-xl font-black ${theme.accentText} font-display`}>-${estimatedMonthlySavings.toLocaleString('es-CO')}</p>
                <p className={`text-[10px] ${theme.accentText} font-semibold`}>Reducción del 72%</p>
              </div>

              <div className={`${bgStyle?.cardBg || 'bg-white'} p-4 rounded-2xl border ${bgStyle?.cardBorder || 'border-slate-200'} text-center col-span-2 sm:col-span-1`}>
                <Coins className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                <p className={`text-[10px] uppercase font-bold ${textMuted}`}>Cuota Brilla</p>
                <p className={`text-xl font-black ${textTitle} font-display`}>~${brillaMonthlyInstallment.toLocaleString('es-CO')}</p>
                <p className={`text-[10px] ${textMuted} font-semibold`}>Sin cuota inicial</p>
              </div>
            </div>

            {/* Balance Financiero Neto */}
            <div className={`${theme.accentBgLight} rounded-2xl p-4 border ${theme.accentBorderLight} flex items-center justify-between`}>
              <div>
                <p className={`text-xs font-bold ${theme.accentText}`}>
                  {netMonthlyCashflow >= 0 ? '¡El ahorro supera la cuota desde el mes 1!' : 'Inversión casi neutra mes a mes'}
                </p>
                <p className={`text-[11px] ${theme.accentTextLight}`}>
                  Tu nuevo recibo de energía bajará a aprox: <strong>${newMonthlyBill.toLocaleString('es-CO')} COP/mes</strong>.
                </p>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className={`px-4 py-2 ${theme.primaryButton} font-bold text-xs rounded-xl transition-colors shrink-0`}
              >
                Solicitar Visita
              </button>
            </div>

          </div>

          {/* Columna Derecha (5 cols): Glosario Técnico Interactivo Aprende.org */}
          <div className={`lg:col-span-5 ${bgStyle?.cardBg || 'bg-white'} rounded-3xl p-6 sm:p-8 border ${bgStyle?.cardBorder || 'border-slate-200'} ${bgStyle?.cardShadow || 'shadow-sm'} space-y-4`}>
            <div className={`flex items-center gap-2 pb-3 border-b ${bgStyle?.cardBorder || 'border-slate-100'}`}>
              <BookOpen className={`w-5 h-5 ${theme.accentText}`} />
              <div>
                <h3 className={`text-sm font-black font-display uppercase tracking-wider ${textTitle}`}>
                  Glosario Técnico Solar (SENA)
                </h3>
                <p className={`text-[11px] ${textMuted}`}>Términos fundamentales que todo usuario debe conocer</p>
              </div>
            </div>

            <div className="space-y-2">
              {v2Glossary.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveGlossaryTerm(idx)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    activeGlossaryTerm === idx
                      ? `${theme.accentBgLight} ${theme.accentBorderLight} shadow-xs`
                      : `${bgStyle?.cardBgAlt || 'bg-slate-50/70'} ${bgStyle?.cardBorder || 'border-slate-200'} hover:bg-emerald-50/50`
                  }`}
                >
                  <p className={`font-bold flex items-center justify-between ${textTitle}`}>
                    <span>{item.term}</span>
                    <span className={`text-[10px] ${theme.accentText} font-extrabold`}>{activeGlossaryTerm === idx ? '▲' : '▼'}</span>
                  </p>
                  {activeGlossaryTerm === idx && (
                    <p className={`mt-2 leading-relaxed text-[11px] ${textBody}`}>
                      {item.def}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <p className={`text-[11px] ${textMuted}`}>
                Basado en el manual formativo de la Ficha SENA 3065832 • Montería, Córdoba.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
