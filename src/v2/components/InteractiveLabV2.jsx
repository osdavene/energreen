import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Activity, 
  Sun, 
  Zap, 
  TrendingDown, 
  BatteryCharging, 
  ShieldCheck, 
  Coins, 
  Leaf, 
  Trees, 
  Send,
  CloudSun,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../../data/energreenData';

export default function InteractiveLabV2({ onOpenQuoteModal }) {
  const [labTab, setLabTab] = useState('calculadora'); // 'calculadora' | 'iot'

  // Estados Calculadora
  const [clientType, setClientType] = useState('residencial');
  const [monthlyBill, setMonthlyBill] = useState(500000);
  const [installMonths, setInstallMonths] = useState(48);

  // Estados IoT
  const [weatherMode, setWeatherMode] = useState('soleado');
  const [currentKw, setCurrentKw] = useState(4.82);
  const [batterySoc, setBatterySoc] = useState(98);
  const [energyToday, setEnergyToday] = useState(26.4);

  const handleWeatherChange = (mode) => {
    setWeatherMode(mode);
    if (mode === 'soleado') {
      setCurrentKw(4.82);
      setBatterySoc(98);
      setEnergyToday(26.4);
    } else if (mode === 'nublado') {
      setCurrentKw(2.15);
      setBatterySoc(84);
      setEnergyToday(15.2);
    } else {
      setCurrentKw(0.0);
      setBatterySoc(76);
      setEnergyToday(28.2);
    }
  };

  // Cálculos Solares
  const calcs = useMemo(() => {
    const tariffPerKwh = clientType === 'comercial' ? 1080 : clientType === 'agro' ? 1020 : 1050;
    const monthlyKwh = monthlyBill / tariffPerKwh;
    const targetCoverage = 0.72;
    const dailyKwhNeeded = (monthlyKwh * targetCoverage) / 30;
    const hsp = 4.6;
    const kwpRequired = Math.max(1.2, Number((dailyKwhNeeded / (hsp * 0.8)).toFixed(1)));
    const panelsCount = Math.max(2, Math.ceil(kwpRequired / 0.55));
    const monthlySavings = Math.round(monthlyBill * targetCoverage);
    const annualSavings = monthlySavings * 12;
    const estimatedCost = kwpRequired * 3800000;
    const roiYears = (estimatedCost / annualSavings).toFixed(1);
    const monthlyQuotaBrilla = Math.round((estimatedCost * 1.22) / installMonths);
    const co2Tons = ((monthlyKwh * targetCoverage * 12 * 0.45) / 1000).toFixed(1);

    return {
      monthlyKwh: Math.round(monthlyKwh),
      kwpRequired,
      panelsCount,
      monthlySavings,
      annualSavings,
      roiYears,
      monthlyQuotaBrilla,
      co2Tons
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
    const text = `Hola ENERGREEN! 👋 Estuve practicando en el Laboratorio Solar Virtual:
- *Tipo:* ${clientType.toUpperCase()}
- *Factura Actual:* ${formatCOP(monthlyBill)}
- *Ahorro Estimado:* ${formatCOP(calcs.monthlySavings)} / mes
- *Sistema Sugerido:* ${calcs.kwpRequired} kWp (${calcs.panelsCount} paneles)
- *Cuota Brilla:* ${formatCOP(calcs.monthlyQuotaBrilla)} / mes

¿Podrían realizar un estudio formal de mi predio?`;
    return `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="laboratorio-v2" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Tipo Aprende.org */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Laboratorio Virtual Solar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Experimenta y simula tu energía en tiempo real
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm">
            Herramientas interactivas desarrolladas con datos técnicos reales de radiación solar en Córdoba.
          </p>

          {/* Selector de Pestaña del Laboratorio */}
          <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setLabTab('calculadora')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                labTab === 'calculadora'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Simulador de Factura & ROI</span>
            </button>
            <button
              onClick={() => setLabTab('iot')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                labTab === 'iot'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Simulador de Telemetría IoT</span>
            </button>
          </div>
        </div>

        {/* PESTAÑA 1: CALCULADORA Y RETORNO */}
        {labTab === 'calculadora' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controles */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">
                  1. Selecciona tu perfil:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'residencial', label: 'Hogar' },
                    { id: 'comercial', label: 'Comercio' },
                    { id: 'agro', label: 'Finca/Agro' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setClientType(p.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                        clientType === p.id
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <label className="font-extrabold text-slate-700 uppercase tracking-wider">
                    2. ¿Cuánto pagas hoy de luz al mes?
                  </label>
                  <span className="text-sm font-black font-display text-slate-900">
                    {formatCOP(monthlyBill)}
                  </span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="3000000"
                  step="50000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full my-3"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>Min: $200.000</span>
                  <span>Max: $3.000.000+</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">
                  3. Plazo estimado de Financiación Brilla:
                </label>
                <div className="flex gap-2">
                  {[24, 36, 48, 60].map((m) => (
                    <button
                      key={m}
                      onClick={() => setInstallMonths(m)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        installMonths === m
                          ? 'bg-amber-400 border-amber-500 text-slate-950 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {m} meses
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <p className="font-extrabold">💡 Dato Clave de Ingeniería:</p>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Con este consumo necesitas aproximadamente <strong>{calcs.panelsCount} paneles solares de 550W</strong> ({calcs.kwpRequired} kWp instalados).
                </p>
              </div>
            </div>

            {/* Resultados */}
            <div className="lg:col-span-7 bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                    Diagnóstico Automático
                  </span>
                  <h3 className="text-xl font-display font-black text-slate-900">
                    Tu Ahorro Proyectado en Montería
                  </h3>
                </div>
                <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                  ⚡ 72% Reducción
                </span>
              </div>

              {/* Métricas Principales */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-md shadow-emerald-600/20">
                  <span className="text-[10px] font-extrabold uppercase text-emerald-100 block">Ahorro Mensual</span>
                  <p className="text-2xl font-black font-display mt-0.5">{formatCOP(calcs.monthlySavings)}</p>
                  <span className="text-[10px] text-emerald-200">Dinero que dejas de pagar</span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-extrabold uppercase text-slate-500 block">Cuota Brilla Gas</span>
                  <p className="text-2xl font-black font-display text-slate-900 mt-0.5">{formatCOP(calcs.monthlyQuotaBrilla)}</p>
                  <span className="text-[10px] text-emerald-700 font-semibold">¡El ahorro cubre la cuota!</span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-extrabold uppercase text-slate-500 block">Retorno Inversión</span>
                  <p className="text-2xl font-black font-display text-amber-600 mt-0.5">{calcs.roiYears} Años</p>
                  <span className="text-[10px] text-slate-500">Y +20 años de ganancia</span>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppShareUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Diagnóstico por WhatsApp</span>
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="py-3 px-5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-all"
                >
                  Agendar Visita Gratuita
                </button>
              </div>

            </div>

          </div>
        )}

        {/* PESTAÑA 2: SIMULADOR IOT */}
        {labTab === 'iot' && (
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-black text-white">Telemetría Solar IoT en Vivo</h3>
                  <p className="text-xs text-slate-400">Monitoreo en tiempo real de inversor híbrido en Montería</p>
                </div>
              </div>

              {/* Selector de Clima */}
              <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => handleWeatherChange('soleado')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    weatherMode === 'soleado' ? 'bg-amber-400 text-slate-950 font-black' : 'text-slate-400'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" /> Soleado
                </button>
                <button
                  onClick={() => handleWeatherChange('nublado')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    weatherMode === 'nublado' ? 'bg-sky-500 text-white font-black' : 'text-slate-400'
                  }`}
                >
                  <CloudSun className="w-3.5 h-3.5" /> Nublado
                </button>
                <button
                  onClick={() => handleWeatherChange('noche')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    weatherMode === 'noche' ? 'bg-indigo-600 text-white font-black' : 'text-slate-400'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" /> Noche
                </button>
              </div>
            </div>

            {/* Métricas IoT */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <span className="text-xs text-slate-400 font-semibold block">Potencia de Paneles (kW)</span>
                <p className="text-3xl font-black font-display text-amber-400 mt-1">{currentKw} kW</p>
                <p className="text-[11px] text-slate-400 mt-2">
                  {weatherMode === 'soleado' ? '☀️ Pico solar del mediodía' : weatherMode === 'nublado' ? '☁️ Radiación solar difusa' : '🌙 Sin radiación solar'}
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <span className="text-xs text-slate-400 font-semibold block">Baterías LiFePO4 (SOC)</span>
                <p className="text-3xl font-black font-display text-emerald-400 mt-1">{batterySoc}%</p>
                <p className="text-[11px] text-emerald-300 mt-2">Almacenamiento seguro ante apagones</p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <span className="text-xs text-slate-400 font-semibold block">Energía Generada Hoy</span>
                <p className="text-3xl font-black font-display text-teal-300 mt-1">{energyToday} kWh</p>
                <p className="text-[11px] text-slate-400 mt-2">
                  Equivalente a ${(energyToday * 1065).toLocaleString('es-CO')} COP
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 pt-2">
              Todos los proyectos instalados por EnerGreen incluyen conectividad WiFi/4G para que puedas ver esta misma pantalla en tu celular en cualquier lugar del mundo.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}
