import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sun, 
  Zap, 
  TrendingDown, 
  Leaf, 
  Trees, 
  Sparkles, 
  Calendar, 
  Send, 
  CheckCircle,
  HelpCircle,
  PiggyBank,
  BadgePercent,
  ChevronRight
} from 'lucide-react';
import { companyInfo } from '../data/energreenData';

export default function SolarCalculator({ onOpenQuoteModal }) {
  // Estados del calculador
  const [clientType, setClientType] = useState('residencial'); // 'residencial', 'comercial', 'agro', 'zni'
  const [monthlyBill, setMonthlyBill] = useState(450000); // en COP
  const [stratum, setStratum] = useState('3');
  const [financingPlan, setFinancingPlan] = useState('brilla'); // 'contado', 'brilla', 'banco'
  const [installMonths, setInstallMonths] = useState(48);

  // Rangos según tipo de cliente
  const clientProfiles = {
    residencial: {
      name: 'Residencial (Estratos 2 a 6)',
      desc: 'Casas urbanas, apartamentos y casas campestres en Montería y Córdoba.',
      minBill: 120000,
      maxBill: 2500000,
      step: 20000,
      defaultBill: 450000,
      icon: 'Home'
    },
    comercial: {
      name: 'Comercial & Servicios',
      desc: 'Hoteles, clínicas, colegios, restaurantes y locales comerciales en la Costa.',
      minBill: 1500000,
      maxBill: 15000000,
      step: 100000,
      defaultBill: 3500000,
      icon: 'Building'
    },
    agro: {
      name: 'Agropecuario & Fincas',
      desc: 'Hatos ganaderos, bombeo solar, arroceras y cultivos en Sinú y San Jorge.',
      minBill: 2000000,
      maxBill: 25000000,
      step: 250000,
      defaultBill: 5000000,
      icon: 'Wheat'
    },
    zni: {
      name: 'Zonas Rurales / ZNI',
      desc: 'Comunidades y viviendas sin red eléctrica en Tierralta, Planeta Rica o el Caribe.',
      minBill: 200000,
      maxBill: 3000000,
      step: 50000,
      defaultBill: 600000,
      icon: 'BatteryCharging'
    }
  };

  const handleTypeChange = (type) => {
    setClientType(type);
    setMonthlyBill(clientProfiles[type].defaultBill);
  };

  // Cálculos solares realistas basados en datos de Córdoba
  const calculations = useMemo(() => {
    const tariffPerKwh = clientType === 'comercial' ? 1080 : clientType === 'agro' ? 1020 : 1050;
    const monthlyKwh = monthlyBill / tariffPerKwh;
    
    // Horas Sol Pico en Córdoba: ~4.6 horas/día promedio
    const hsp = 4.6;
    const performanceRatio = 0.80;
    
    // Potencia requerida en kWp para cubrir aprox el 75% - 85% de la factura
    const targetCoverage = clientType === 'zni' ? 0.95 : 0.75;
    const dailyKwhNeeded = (monthlyKwh * targetCoverage) / 30;
    const kwpRequired = Math.max(1.2, Number((dailyKwhNeeded / (hsp * performanceRatio)).toFixed(1)));
    
    // Paneles monocristalinos de 550W (0.55 kW cada uno)
    const panelPower = 0.55;
    const panelsCount = Math.max(2, Math.ceil(kwpRequired / panelPower));
    
    // Ahorro mensual en dinero
    const monthlySavings = Math.round(monthlyBill * targetCoverage);
    const annualSavings = monthlySavings * 12;
    const savings25Years = annualSavings * 25;
    
    // Inversión estimada del sistema
    let estimatedCost = kwpRequired * 3800000;
    if (clientType === 'zni') estimatedCost *= 1.25;
    if (kwpRequired > 20) estimatedCost *= 0.88;
    
    // Retorno de inversión (ROI) en años
    const roiYears = (estimatedCost / annualSavings).toFixed(1);
    
    // Impacto ambiental
    const co2TonsPerYear = ((monthlyKwh * targetCoverage * 12 * 0.45) / 1000).toFixed(1);
    const treesEquivalent = Math.round(co2TonsPerYear * 6);
    
    // Simulación de cuota financiera (Brilla)
    const monthlyQuotaBrilla = Math.round((estimatedCost * 1.22) / installMonths);

    return {
      monthlyKwh: Math.round(monthlyKwh),
      kwpRequired,
      panelsCount,
      monthlySavings,
      annualSavings,
      savings25Years,
      estimatedCost: Math.round(estimatedCost),
      roiYears,
      co2TonsPerYear,
      treesEquivalent,
      monthlyQuotaBrilla
    };
  }, [monthlyBill, clientType, installMonths]);

  const formatCOP = (num) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(num);
  };

  const getWhatsAppShareUrl = () => {
    const text = `Hola ENERGREEN! 👋 Acabo de simular mi proyecto solar en la página web:
- *Perfil:* ${clientProfiles[clientType].name}
- *Factura actual:* ${formatCOP(monthlyBill)} / mes
- *Sistema estimado:* ${calculations.kwpRequired} kWp (${calculations.panelsCount} paneles)
- *Ahorro proyectado:* ${formatCOP(calculations.monthlySavings)} / mes
- *Ubicación:* Córdoba / Costa Caribe

Me gustaría solicitar un diagnóstico formal y cotización.`;
    return `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculadora" className="py-20 md:py-28 relative bg-gradient-to-b from-white via-emerald-50/40 to-slate-50 border-t border-slate-200">
      
      {/* Fondo con puntos sutiles */}
      <div className="absolute inset-0 bg-fresh-dots opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>Simulador de Ahorro Solar en Tiempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Descubre cuánto dinero puedes <span className="gradient-fresh-hero">ahorrar cada mes</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Calcula la potencia fotovoltaica requerida, número de paneles solares, retorno de inversión y tu cuota mensual con el programa <strong className="text-slate-900">Brilla</strong> o crédito verde.
          </p>
        </div>

        {/* Panel del Simulador en 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Parámetros del Usuario */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Selector de Tipo de Cliente */}
            <div className="glass-fresh-card p-6 sm:p-7 rounded-3xl">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-3">
                1. Selecciona tu tipo de inmueble o actividad
              </label>
              
              <div className="grid grid-cols-2 gap-2.5">
                {Object.entries(clientProfiles).map(([key, profile]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleTypeChange(key)}
                    className={`p-3.5 rounded-2xl text-left transition-all border text-xs font-bold ${
                      clientType === key
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 shadow-md shadow-emerald-500/10'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold">{profile.name.split(' ')[0]}</span>
                      {clientType === key && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <p className="text-[10px] text-slate-500 font-normal line-clamp-1">{profile.name}</p>
                  </button>
                ))}
              </div>

              {/* Estrato para Residencial */}
              {clientType === 'residencial' && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-700 mb-2 font-medium">
                    <span>Estrato socioeconómico:</span>
                    <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Estrato {stratum}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {['2', '3', '4', '5', '6'].map((est) => (
                      <button
                        key={est}
                        type="button"
                        onClick={() => setStratum(est)}
                        className={`flex-1 py-1.5 text-xs rounded-xl font-extrabold transition-all border ${
                          stratum === est 
                            ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-sm' 
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {est}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-[11px] text-slate-500 mt-3 italic">
                {clientProfiles[clientType].desc}
              </p>
            </div>

            {/* 2. Slider de Valor de Factura */}
            <div className="glass-fresh-card p-6 sm:p-7 rounded-3xl">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  2. ¿Cuánto pagas de luz al mes?
                </label>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                  Afinia / Red
                </span>
              </div>

              <div className="my-4 text-center bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/70 p-5 rounded-2xl border border-amber-200/60 shadow-inner">
                <span className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                  {formatCOP(monthlyBill)}
                </span>
                <span className="text-xs text-slate-500 block mt-1 font-medium">
                  Consumo estimado: ~{calculations.monthlyKwh} kWh / mes
                </span>
              </div>

              <input
                type="range"
                min={clientProfiles[clientType].minBill}
                max={clientProfiles[clientType].maxBill}
                step={clientProfiles[clientType].step}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
              />

              <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
                <span>Min: {formatCOP(clientProfiles[clientType].minBill)}</span>
                <span>Max: {formatCOP(clientProfiles[clientType].maxBill)}</span>
              </div>
            </div>

            {/* 3. Modalidad de Financiación */}
            <div className="glass-fresh-card p-6 sm:p-7 rounded-3xl">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-3">
                3. Modalidad de Financiación
              </label>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFinancingPlan('brilla')}
                  className={`p-2.5 rounded-xl text-center border text-xs font-extrabold transition-all ${
                    financingPlan === 'brilla'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p>Brilla</p>
                  <span className="text-[10px] font-normal block opacity-90">Recibo de Gas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFinancingPlan('banco')}
                  className={`p-2.5 rounded-xl text-center border text-xs font-extrabold transition-all ${
                    financingPlan === 'banco'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p>Crédito Verde</p>
                  <span className="text-[10px] font-normal block opacity-90">Bancolombia</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFinancingPlan('contado')}
                  className={`p-2.5 rounded-xl text-center border text-xs font-extrabold transition-all ${
                    financingPlan === 'contado'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p>Contado</p>
                  <span className="text-[10px] font-normal block opacity-90">Descuento 5%</span>
                </button>
              </div>

              {financingPlan !== 'contado' && (
                <div className="mt-4 flex items-center justify-between text-xs text-slate-700">
                  <span className="font-medium">Plazo de financiación:</span>
                  <div className="flex gap-2">
                    {[24, 36, 48, 60].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setInstallMonths(m)}
                        className={`px-2.5 py-1 text-[11px] rounded-lg font-bold transition-all ${
                          installMonths === m 
                            ? 'bg-amber-400 text-slate-950 shadow-sm' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {m}m
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Columna Derecha: Resultados y Diagnóstico Solar */}
          <div className="lg:col-span-7">
            <div className="glass-fresh-card p-6 sm:p-8 rounded-3xl border-2 border-emerald-300 relative overflow-hidden shadow-2xl">
              
              {/* Encabezado del resultado */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
                <div>
                  <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-solar-500" />
                    Propuesta Técnica y Financiera Preliminar
                  </span>
                  <h3 className="text-2xl font-display font-black text-slate-900 mt-1">
                    Sistema Sugerido: <span className="text-emerald-600">{calculations.kwpRequired} kWp</span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-xl self-start">
                  <Sun className="w-4 h-4 text-amber-600 animate-spin-slow" />
                  <span className="text-xs font-extrabold text-amber-900">{calculations.panelsCount} Paneles 550W</span>
                </div>
              </div>

              {/* Tarjetas de Ahorro Destacadas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                
                {/* Ahorro Mensual */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl text-white shadow-lg shadow-emerald-600/20">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-100 mb-1">
                    <TrendingDown className="w-4 h-4" />
                    <span>Ahorro Mensual</span>
                  </div>
                  <p className="text-2xl font-display font-black">
                    {formatCOP(calculations.monthlySavings)}
                  </p>
                  <p className="text-[10px] text-emerald-100 mt-1 font-semibold">
                    ~70% a 75% menos en recibo
                  </p>
                </div>

                {/* Ahorro Anual */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 mb-1">
                    <PiggyBank className="w-4 h-4" />
                    <span>Ahorro Anual</span>
                  </div>
                  <p className="text-2xl font-display font-black text-slate-900">
                    {formatCOP(calculations.annualSavings)}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Para reinversión familiar
                  </p>
                </div>

                {/* Retorno de Inversión */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 mb-1">
                    <BadgePercent className="w-4 h-4" />
                    <span>Retorno Inversión</span>
                  </div>
                  <p className="text-2xl font-display font-black text-slate-900">
                    {calculations.roiYears} Años
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Y +20 años de ganancia
                  </p>
                </div>

              </div>

              {/* Detalle Financiero & Cuota Brilla */}
              <div className="bg-slate-50/90 p-5 rounded-2xl border border-slate-200 space-y-3.5 mb-6">
                
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-600 font-medium">Inversión referencial del proyecto:</span>
                  <span className="font-extrabold text-slate-900">{formatCOP(calculations.estimatedCost)}</span>
                </div>

                {financingPlan !== 'contado' ? (
                  <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-slate-200">
                    <div>
                      <span className="text-slate-700 font-bold">
                        Cuota mensual estimada ({financingPlan === 'brilla' ? 'Convenio Brilla' : 'Crédito Verde'} {installMonths}m):
                      </span>
                      <span className="text-[11px] text-emerald-700 block font-semibold mt-0.5">
                        💡 ¡Tu ahorro mensual de {formatCOP(calculations.monthlySavings)} cubre la cuota!
                      </span>
                    </div>
                    <span className="text-lg font-display font-black text-emerald-700">
                      {formatCOP(calculations.monthlyQuotaBrilla)} / mes
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-slate-200">
                    <span className="text-slate-600">Beneficio pago de contado:</span>
                    <span className="text-xs font-extrabold text-emerald-700">5% descuento + Certificación RETIE bonificada</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-slate-200">
                  <span className="text-slate-600">Beneficios Ley 1715 de 2014:</span>
                  <span className="text-xs font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    50% deducción de renta + 0% IVA
                  </span>
                </div>

              </div>

              {/* Impacto Ecológico */}
              <div className="grid grid-cols-2 gap-3.5 mb-6">
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">{calculations.co2TonsPerYear} Ton CO₂ / año</p>
                    <p className="text-[10px] text-slate-500">Emisiones reducidas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">{calculations.treesEquivalent} Árboles</p>
                    <p className="text-[10px] text-slate-500">Equivalentes sembrados</p>
                  </div>
                </div>
              </div>

              {/* Botones de Acción Inmediata */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppShareUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-center"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Estimado a WhatsApp de un Asesor</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-all"
                >
                  <Zap className="w-4 h-4 text-amber-500 fill-current" />
                  <span>Solicitar Visita Técnica</span>
                </button>
              </div>

              <p className="text-[10px] text-slate-500 text-center mt-3 font-medium">
                * Estimación preliminar conforme a la irradiancia solar de Montería y normativas CREG/RETIE vigentes.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
