import React from 'react';
import { 
  Wheat, 
  Droplets, 
  Sun, 
  BatteryCharging, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  TrendingDown,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import solarPumpingImg from '../assets/images/solar_pumping_cattle.jpg';

export default function AgroRuralSolutions({ onOpenQuoteModal }) {
  const agroFeatures = [
    {
      title: "Bombeo Solar Directo para Pozos y Represas",
      desc: "Extracción y distribución de agua continua para hatos ganaderos y cultivos sin gastar un solo galón de combustible diésel.",
      benefits: ["Ahorro del 100% en combustible ACPM y aceites", "Operación automática con sensor de pozo y tanque", "Cero emisiones y mínimo mantenimiento", "Ideal para fincas en Cereté, Sahagún, San Carlos y Lorica"]
    },
    {
      title: "Energía Continua para Ordeño y Tanques de Frío",
      desc: "Evita pérdidas de leche por cortes en la red convencional mediante sistemas híbridos con almacenamiento de litio.",
      benefits: ["Arranque suave de motores y motobombas", "Respaldo automático instantáneo ante cortes de red", "Protección contra sobretensiones y picos de voltaje", "Mayor rentabilidad y conservación de lácteos"]
    },
    {
      title: "Riego Fotovoltaico para Arroz, Maíz y Pastos",
      desc: "Sistemas de alta capacidad (15 a 100+ kWp) para riego por goteo o aspersión en distritos de riego de los valles del Sinú y San Jorge.",
      benefits: ["Aprovechamiento máximo en horas de sol intenso", "Variadores de velocidad solares de alta precisión", "Amortización rápida en 2.5 a 3.5 años", "Incentivos tributarios de la Ley 1715 de 2014"]
    }
  ];

  const ruralLocations = [
    { city: "Tierralta & Valencia", note: "Proyectos en comunidades ZNI, plátano y cacao" },
    { city: "Lorica & San Antero", note: "Sistemas para piscicultura, arroceras y fincas costeras" },
    { city: "Sahagún & Cereté", note: "Bombeo solar ganadero y parcelas agrícolas" },
    { city: "Planeta Rica & Montelíbano", note: "Kits solares autónomos y hatos lecheros" },
    { city: "Ciénaga de Oro & San Carlos", note: "Pozos profundos y represas ganaderas" },
    { city: "Pueblo Nuevo & Ayapel", note: "Sistemas aislados off-grid para haciendas" }
  ];

  return (
    <section id="agro-rural" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      
      {/* Luz decorativa */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Wheat className="w-4 h-4 text-emerald-600" />
            <span>Desarrollo Agropecuario & Zonas Rurales ZNI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Agua y energía limpia para el <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">campo de Córdoba</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            El 15% del territorio de Córdoba se encuentra en Zonas No Interconectadas (ZNI). Llevamos agua continua y energía confiable para multiplicar la productividad ganadera y agrícola.
          </p>
        </div>

        {/* Banner Destacado con la Fotografía del Campo & Bombeo */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 mb-12">
          
          <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
            <img
              src={solarPumpingImg}
              alt="Bombeo solar de agua para ganadería en Córdoba"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-100 text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-sky-600" />
              <span>Bombeo Solar Sin Diésel • Córdoba Ganadero</span>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 space-y-5 flex flex-col justify-center">
            <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Autonomía Hídrica para Ganaderos
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-snug">
              Agua constante para tus bebederos las 24 horas del día
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Las plantas diésel tradicionales generan gastos mensuales elevados en ACPM, cambios de aceite y reparaciones mecánicas. Con un sistema solar ENERGREEN, el agua fluye a tus tanques y bebederos de forma 100% automática y silenciosa.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cero gasto en combustible diésel y transporte de galones</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Líneas de crédito agropecuario con Banco Agrario y Brilla</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bombas sumergibles en acero inoxidable para pozos profundos</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center gap-2 w-fit"
              >
                <span>Cotizar Sistema de Bombeo para Mi Finca</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Grid de Soluciones Agro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {agroFeatures.map((feat, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 text-emerald-600 group-hover:scale-110 transition-transform">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {feat.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {feat.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-emerald-600 hover:text-white border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Cotizar para mi predio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Zonas de Cobertura en Córdoba */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                Presencia Operativa en Córdoba y Sabanas
              </span>
              <h4 className="text-2xl font-display font-black text-slate-900">
                Cobertura logística y técnica directa en los municipios
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Contamos con vehículos utilitarios equipados y técnicos listos para desplazarse a zonas rurales y prestar asesoría técnica y mantenimiento en sitio.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              {ruralLocations.map((loc, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center lg:text-left hover:bg-emerald-50/50 transition-colors">
                  <p className="text-xs font-extrabold text-slate-900">{loc.city}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{loc.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
