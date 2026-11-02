import React from 'react';
import { 
  Sun, 
  Wheat, 
  Coins, 
  ShieldCheck, 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { v2LearningTracks } from '../data/v2Data';

export default function LearningPathsV2({ onSelectTrack, onOpenQuoteModal }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wheat': return <Wheat className="w-6 h-6" />;
      case 'Coins': return <Coins className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      default: return <Sun className="w-6 h-6" />;
    }
  };

  return (
    <section id="rutas-v2" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Tipo Aprende.org */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ejes Temáticos & Rutas de Aprendizaje</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-slate-900 tracking-tight">
              ¿Qué deseas aprender o implementar hoy?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Módulos estructurados con metodología técnica SENA para entender la energía solar, calcular tu inversión y tomar decisiones informadas en Córdoba.
          </p>
        </div>

        {/* Grid de Rutas Estilo Aprende.org */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {v2LearningTracks.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Cabecera de la Tarjeta */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-tr ${track.color} shadow-md group-hover:scale-110 transition-transform`}>
                    {getIcon(track.icon)}
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${track.lightBg} ${track.border} ${track.textColor} uppercase tracking-wider block`}>
                      {track.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold mt-1 block">
                      {track.modulesCount} Módulos
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-black text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mb-3">
                  {track.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {track.desc}
                </p>
              </div>

              {/* Botón de Acción */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  {track.readTime}
                </span>
                <button
                  onClick={() => onSelectTrack(track.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
                >
                  <span>Explorar Módulo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Tarjeta de Diagnóstico Gratis Personalizado */}
          <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 block mb-1">
                Servicio en Sitio
              </span>
              <h3 className="text-xl font-display font-black mb-2 text-white">
                ¿Prefieres que un técnico revise tu predio?
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed mb-6">
                Evaluamos tu tejado o pozo profundo en Montería, Cereté o cualquier municipio de Córdoba sin costo de visita.
              </p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black rounded-xl transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>Agendar Visita Gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
