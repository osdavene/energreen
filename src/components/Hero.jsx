import React, { useState } from 'react';
import { 
  Sun, 
  ArrowRight, 
  ShieldCheck, 
  TrendingDown, 
  Zap, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Calculator,
  MessageCircle,
  ThumbsUp,
  Clock,
  PiggyBank
} from 'lucide-react';
import { companyInfo } from '../data/energreenData';
import monteriaArchImg from '../assets/images/monteria_solar_architecture.jpg';
import heroSolarHouseImg from '../assets/images/hero_solar_house.jpg';
import solarPumpingCattleImg from '../assets/images/solar_pumping_cattle.jpg';

export default function Hero({ onOpenQuoteModal }) {
  // Mini calculadora rápida interactiva dentro del Hero
  const [quickBill, setQuickBill] = useState(600000); // 600.000 COP
  const estimatedSavings = Math.round(quickBill * 0.72);
  const newBill = quickBill - estimatedSavings;
  const annualSavings = estimatedSavings * 12;

  const quickPresets = [
    { label: '$350k', value: 350000 },
    { label: '$600k', value: 600000 },
    { label: '$1.2M', value: 1200000 },
    { label: '$2.5M+', value: 2500000 },
  ];

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50">
      
      {/* Luces y esferas ambientales sutiles */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[350px] bg-amber-200/35 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-5 w-[450px] h-[350px] bg-emerald-200/35 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial & Amigable */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-7 space-y-5">
            {/* Badge de Confianza Local */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm text-xs font-bold text-slate-800">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-700 font-extrabold">Montería & Córdoba</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">Instalación Solar RETIE & SENA 2025</span>
            </div>

            {/* Título Principal Amigable y de Gran Impacto */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-slate-900 leading-[1.05]">
              El sol de Córdoba puede <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">pagar tu recibo</span> de energía.
            </h1>

            {/* Bajada Explicativa Amigable */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              En el Caribe las tarifas de electricidad siguen en aumento. Con <strong className="text-slate-900 font-bold">ENERGREEN</strong> instalas paneles solares de alta eficiencia en tu techo o finca, reduces hasta el <strong className="text-emerald-700 font-bold">70% de tu factura</strong> y financias sin trámites bancarios con tu recibo de gas <strong>Brilla</strong>.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#calculadora"
                className="px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-2xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transform hover:-translate-y-0.5"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Simular Mi Ahorro en COP</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all shadow-sm flex items-center gap-2"
              >
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Visita Técnica Gratuita</span>
              </button>
            </div>

            {/* Micro-Prueba Social y Garantías */}
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">SENA</div>
                  <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">RETIE</div>
                  <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-teal-600 text-white font-bold text-[10px] flex items-center justify-center">BRILLA</div>
                </div>
                <span className="font-semibold text-slate-700">Respaldado por ingeniería certificada</span>
              </div>

              <div className="flex items-center gap-1.5 font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garantía de 25 años en paneles</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Interactiva "Simulador Express en Vivo" */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-emerald-100 shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
              
              {/* Sticker Mr. Tasty Style */}
              <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-display font-black text-[11px] px-3 py-1.5 rounded-xl shadow-md rotate-2">
                ⚡ AHORRA 72%
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">Simulador Exprés de Ahorro</h3>
                  <p className="text-[11px] text-slate-500">¿Cuánto pagas hoy en tu recibo de luz?</p>
                </div>
              </div>

              {/* Botones Rápidos de Selección */}
              <div className="grid grid-cols-4 gap-1.5 my-3">
                {quickPresets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setQuickBill(preset.value)}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all ${
                      quickBill === preset.value
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Slider de factura mensual */}
              <div className="space-y-1.5 my-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Factura actual:</span>
                  <span className="text-base font-black text-slate-900 font-display">
                    ${quickBill.toLocaleString('es-CO')} COP
                  </span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="3500000"
                  step="50000"
                  value={quickBill}
                  onChange={(e) => setQuickBill(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Resultados en vivo */}
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-100 my-4">
                <div>
                  <p className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">Ahorro Mensual</p>
                  <p className="text-xl font-black font-display text-emerald-700 mt-0.5">
                    +${estimatedSavings.toLocaleString('es-CO')}
                  </p>
                  <p className="text-[10px] text-emerald-600 font-medium">Dinero libre para ti</p>
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">Tu Nuevo Recibo</p>
                  <p className="text-xl font-black font-display text-slate-900 mt-0.5">
                    ~${newBill.toLocaleString('es-CO')}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">Solo cargos fijos mínimos</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-4">
                <span className="flex items-center gap-1.5 font-bold">
                  <PiggyBank className="w-4 h-4 text-amber-500" />
                  Ahorro en 1 año:
                </span>
                <span className="font-extrabold text-emerald-700 font-display">
                  ${annualSavings.toLocaleString('es-CO')} COP
                </span>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-extrabold shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar Estudio de Mi Tejado Sin Costo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

        {/* Mosaico Visual de Impacto (Editorial Architectural Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Imagen Principal Grande (Arquitectura Sostenible en Montería) */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl group min-h-[380px] sm:min-h-[440px]">
            <img
              src={monteriaArchImg}
              alt="Proyecto solar arquitectónico en Montería Córdoba"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

            {/* Badge Flotante Superior */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg text-xs font-extrabold text-slate-900 flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
              <span>Proyecto Arquitectónico • Montería Sostenible</span>
            </div>

            {/* Sticker de Ahorro tipo Mr. Tasty */}
            <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-display font-black text-xs px-3.5 py-2 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
              ☀️ 12H SOL DIARIO
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
                  Generación de energía limpia y confort térmico para edificaciones urbanas, institucionales y comerciales.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/30 text-center shrink-0">
                <span className="text-[10px] uppercase font-bold text-slate-200 block">Radiación Solar en Córdoba</span>
                <span className="text-lg font-black font-display text-amber-300">5.2 kWh / m² / día</span>
              </div>
            </div>
          </div>

          {/* Columna Lateral con 2 Tarjetas Editorial */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Tarjeta 1: Residencial */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group flex-1 min-h-[210px]">
              <img
                src={heroSolarHouseImg}
                alt="Instalación solar residencial en Montería"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-extrabold text-slate-900 shadow-sm">
                Hogares Estratos 2 a 6
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold text-emerald-300">Residencial On-Grid</p>
                <h4 className="text-base font-display font-black text-white">Viviendas & Conjuntos</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Financia tus paneles a través de tu factura de gas con Brilla.</p>
              </div>
            </div>

            {/* Tarjeta 2: Agropecuario */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group flex-1 min-h-[210px]">
              <img
                src={solarPumpingCattleImg}
                alt="Bombeo solar en Córdoba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2.5 py-1 rounded-lg text-[11px] font-extrabold shadow-sm">
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
