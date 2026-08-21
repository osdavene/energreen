import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Sun, 
  BatteryCharging, 
  Zap, 
  ShieldCheck, 
  Wifi, 
  Smartphone, 
  Clock, 
  CloudSun, 
  RefreshCw,
  Cpu,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export default function IoTDashboard() {
  const [weatherMode, setWeatherMode] = useState('soleado');
  const [currentKw, setCurrentKw] = useState(4.82);
  const [energyToday, setEnergyToday] = useState(24.6);
  const [batterySoc, setBatterySoc] = useState(94);
  const [gridStatus, setGridStatus] = useState('Inyectando a Red (+1.8 kW)');
  const [liveSavings, setLiveSavings] = useState(285400);

  useEffect(() => {
    if (weatherMode === 'soleado') {
      setCurrentKw(4.82);
      setEnergyToday(26.4);
      setBatterySoc(98);
      setGridStatus('Inyectando Excedentes (+1.8 kW)');
    } else if (weatherMode === 'nublado') {
      setCurrentKw(2.15);
      setEnergyToday(14.8);
      setBatterySoc(82);
      setGridStatus('Autoconsumo Equilibrado (0.0 kW)');
    } else {
      setCurrentKw(0.0);
      setEnergyToday(28.2);
      setBatterySoc(74);
      setGridStatus('Alimentando desde Baterías (-1.2 kW)');
    }
  }, [weatherMode]);

  const hourlyData = [
    { hour: '6 AM', kw: weatherMode === 'noche' ? 0 : 0.4 },
    { hour: '8 AM', kw: weatherMode === 'noche' ? 0 : weatherMode === 'nublado' ? 1.1 : 2.2 },
    { hour: '10 AM', kw: weatherMode === 'noche' ? 0 : weatherMode === 'nublado' ? 2.0 : 4.3 },
    { hour: '12 PM', kw: weatherMode === 'noche' ? 0 : weatherMode === 'nublado' ? 2.5 : 5.2 },
    { hour: '2 PM', kw: weatherMode === 'noche' ? 0 : weatherMode === 'nublado' ? 2.3 : 4.9 },
    { hour: '4 PM', kw: weatherMode === 'noche' ? 0 : weatherMode === 'nublado' ? 1.2 : 2.8 },
    { hour: '6 PM', kw: weatherMode === 'noche' ? 0 : 0.5 },
  ];

  return (
    <section id="iot-demo" className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-emerald-50/40 relative overflow-hidden border-t border-slate-200">
      
      {/* Efectos de fondo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-4 h-4 text-sky-600" />
            <span>Monitoreo Remoto IoT 24/7 en Tiempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Control total de tu energía desde tu <span className="gradient-fresh-hero">teléfono celular</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Nuestros sistemas integran telemetría inteligente. Supervisa la generación de tus paneles, el estado de tus baterías y tus ahorros acumulados en tiempo real.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="glass-fresh-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl relative">
          
          {/* Header del Dashboard */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-ocean-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">ENERGREEN Telemetría en Vivo</h3>
                  <span className="flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> En Línea
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Ubicación: Montería, Barrio El Recreo • Inversor Híbrido 5.5 kWp (Certificado RETIE)
                </p>
              </div>
            </div>

            {/* Selector de Simulación de Clima */}
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
              <span className="text-[11px] text-slate-600 font-semibold px-2 hidden sm:inline">Simular Clima:</span>
              <button
                type="button"
                onClick={() => setWeatherMode('soleado')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                  weatherMode === 'soleado' 
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Soleado</span>
              </button>

              <button
                type="button"
                onClick={() => setWeatherMode('nublado')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                  weatherMode === 'nublado' 
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CloudSun className="w-3.5 h-3.5" />
                <span>Nublado</span>
              </button>

              <button
                type="button"
                onClick={() => setWeatherMode('noche')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                  weatherMode === 'noche' 
                    ? 'bg-slate-800 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Noche</span>
              </button>
            </div>
          </div>

          {/* Tarjetas de Métricas en Vivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            
            {/* 1. Potencia Instantánea */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs mb-1 font-medium">
                <span>Potencia Actual</span>
                <Zap className="w-4 h-4 text-amber-500 fill-current" />
              </div>
              <p className="text-3xl font-display font-black text-amber-600">
                {currentKw} <span className="text-sm font-semibold text-slate-400">kW</span>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                {weatherMode === 'soleado' ? 'Pico solar de mediodía' : weatherMode === 'nublado' ? 'Generación difusa' : 'Sin radiación solar'}
              </p>
            </div>

            {/* 2. Energía Hoy */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs mb-1 font-medium">
                <span>Energía Hoy</span>
                <Sun className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-3xl font-display font-black text-emerald-600">
                {energyToday} <span className="text-sm font-semibold text-slate-400">kWh</span>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Equivalente a ${(energyToday * 1065).toLocaleString('es-CO')} COP
              </p>
            </div>

            {/* 3. Batería / Almacenamiento */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs mb-1 font-medium">
                <span>Baterías LiFePO4</span>
                <BatteryCharging className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-3xl font-display font-black text-slate-900">
                {batterySoc}% <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Óptimo</span>
              </p>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2 border border-slate-200">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${batterySoc}%` }}
                ></div>
              </div>
            </div>

            {/* 4. Ahorro Acumulado Mes */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs mb-1 font-medium">
                <span>Ahorro este Mes</span>
                <TrendingUp className="w-4 h-4 text-sky-600" />
              </div>
              <p className="text-2xl font-display font-black text-slate-900">
                ${liveSavings.toLocaleString('es-CO')} <span className="text-xs font-normal text-slate-500">COP</span>
              </p>
              <p className="text-[11px] text-emerald-700 mt-1 font-bold">
                74.8% reducción en recibo
              </p>
            </div>

          </div>

          {/* Gráfica de Producción Horaria Visual */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold text-slate-800">Curva de Generación Solar Diaria (Horas Sol Pico en Montería)</span>
              <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                <Wifi className="w-3.5 h-3.5 text-emerald-600" /> Telemetría activa
              </span>
            </div>

            <div className="grid grid-cols-7 gap-2 items-end h-32 pt-4">
              {hourlyData.map((item, idx) => {
                const heightPercent = (item.kw / 5.5) * 100;
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-bold text-slate-700">
                      {item.kw > 0 ? `${item.kw}k` : '0'}
                    </span>
                    <div className="w-full bg-slate-200/80 rounded-t-lg h-24 flex items-end p-1">
                      <div
                        className="w-full bg-gradient-to-t from-emerald-500 to-amber-400 rounded-t transition-all duration-700 shadow-sm"
                        style={{ height: `${Math.max(4, heightPercent)}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">{item.hour}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Barra de Estado y Dispositivos Conectados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="flex items-center gap-2.5 bg-white px-3.5 py-3 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900">Estado del Inversor:</p>
                <p className="text-slate-500 text-[11px]">{gridStatus}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-white px-3.5 py-3 rounded-xl border border-slate-200 shadow-sm">
              <Smartphone className="w-4 h-4 text-sky-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900">App Móvil para Clientes:</p>
                <p className="text-slate-500 text-[11px]">Notificaciones de fallas y reportes</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-white px-3.5 py-3 rounded-xl border border-slate-200 shadow-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900">Mantenimiento Predictivo:</p>
                <p className="text-slate-500 text-[11px]">Detección de polvo en módulos</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
