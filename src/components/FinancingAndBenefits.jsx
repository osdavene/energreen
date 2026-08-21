import React from 'react';
import { 
  CreditCard, 
  FileText, 
  Percent, 
  ShieldCheck, 
  Globe2, 
  CheckCircle2, 
  TrendingUp, 
  Building2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { companyInfo } from '../data/energreenData';

export default function FinancingAndBenefits({ onOpenQuoteModal }) {
  const financingOptions = [
    {
      title: "Programa Brilla - Gases de Córdoba",
      tag: "Sin Trámites Bancarios",
      desc: "Financia tu sistema solar fotovoltaico para tu casa o negocio con cargo directo y cuotas mensuales en tu recibo de gas natural domiciliario.",
      bullets: [
        "Aprobación rápida según cupo de tu factura",
        "Plazos cómodos de 12 hasta 60 meses",
        "Tu ahorro en energía cubre el valor de la cuota mensual",
        "Disponible para estratos 2, 3, 4, 5 y 6 en Córdoba"
      ],
      highlight: true
    },
    {
      title: "Créditos Verdes Bancarios",
      tag: "Tasas de Fomento Especiales",
      desc: "Líneas de crédito sostenibles con Bancolombia, Banco Agrario y Banco de Bogotá diseñadas para proyectos de energía solar residencial, comercial e industrial.",
      bullets: [
        "Tasas de interés preferenciales para energía limpia",
        "Plazos de pago de hasta 7 años",
        "Periodos de gracia para el sector agropecuario",
        "Acompañamiento en la radicación técnica del proyecto"
      ],
      highlight: false
    },
    {
      title: "Recursos Propios & Contado",
      tag: "Descuento Directo",
      desc: "Pago de contado con bonificaciones especiales y asesoría para aplicar a convocatorias de capital semilla, Fondo Emprender y programas del Ministerio de Minas y Energía.",
      bullets: [
        "Descuento del 5% por pronto pago",
        "Trámite de conexión de excedentes CREG bonificado",
        "Prioridad en cronograma de instalación",
        "Garantías extendidas de mantenimiento posventa"
      ],
      highlight: false
    }
  ];

  const lawBenefits = [
    {
      title: "Deducción de Renta hasta el 50%",
      desc: "Puedes deducir hasta el 50% del valor total de la inversión en tu declaración de renta durante los primeros 15 años."
    },
    {
      title: "0% IVA (Exclusión Total)",
      desc: "Los paneles solares, inversores, controladores y servicios de instalación están 100% exentos del cobro de IVA."
    },
    {
      title: "0% Aranceles de Importación",
      desc: "Exención arancelaria completa para la importación de maquinaria y equipos certificados de generación fotovoltaica."
    },
    {
      title: "Depreciación Acelerada de Activos",
      desc: "Permite una tasa de depreciación contable acelerada de hasta el 33.3% anual para reducir la carga tributaria empresarial."
    }
  ];

  return (
    <section id="financiacion" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Percent className="w-4 h-4 text-amber-600" />
            <span>Accesibilidad & Beneficios Económicos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            La energía solar ahora está al <span className="gradient-solar-fresh">alcance de todos</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Rompemos la barrera de inversión inicial. Diseñamos planes inclusivos donde el sistema solar se autofinancia con el mismo dinero que hoy pagas en tu factura.
          </p>
        </div>

        {/* Opciones de Financiación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {financingOptions.map((opt, idx) => (
            <div
              key={idx}
              className={`glass-fresh-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between relative transition-all ${
                opt.highlight 
                  ? 'border-2 border-emerald-500 ring-2 ring-emerald-500/20 bg-gradient-to-b from-emerald-50/50 to-white shadow-xl' 
                  : 'border border-slate-200'
              }`}
            >
              {opt.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  Más Elegido en Córdoba
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {opt.tag}
                  </span>
                  <CreditCard className="w-5 h-5 text-emerald-600" />
                </div>

                <h3 className="text-xl font-display font-black text-slate-900 mb-2.5">
                  {opt.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {opt.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {opt.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className={`w-full py-3 px-4 text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 ${
                  opt.highlight
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>Consultar Disponibilidad</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Sección Especial: Ley 1715 de 2014 e Incentivos Tributarios */}
        <div className="glass-fresh-card p-6 sm:p-10 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/40 relative overflow-hidden mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase">
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                <span>Marco Normativo Colombiano</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                Incentivos y Exenciones de la <span className="text-amber-700">Ley 1715 de 2014</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                El Gobierno de Colombia otorga beneficios tributarios de alto impacto a personas naturales y jurídicas que inviertan en energía solar. ENERGREEN te asesora con todo el trámite de certificación UPME y DIAN.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-5 py-3 text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-md transition-all"
                >
                  Asesorarme en Beneficios Tributarios
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lawBenefits.map((law, lIdx) => (
                <div key={lIdx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{law.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {law.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Compromiso con los ODS */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
            <Globe2 className="w-4 h-4 text-emerald-600" />
            <span>Alineados con los Objetivos de Desarrollo Sostenible (ONU)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyInfo.ods.map((item) => (
              <div key={item.number} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 font-display font-black text-xl flex items-center justify-center shrink-0 border border-emerald-200">
                  ODS {item.number}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
