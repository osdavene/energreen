import React from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Award, 
  Users, 
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { companyInfo, physicalResources, techResources, teamStructure } from '../../data/energreenData';

export default function CourseModulesV2({ onOpenQuoteModal }) {
  const competencies = [
    {
      code: "COMP-01",
      title: "Diagnóstico y Ensamble de Circuitos Fotovoltaicos",
      desc: "Medición de curvas I-V con trazador, pruebas de circuito abierto (Voc) y corriente de cortocircuito (Isc) en módulos monocristalinos y policristalinos.",
      duration: "40 Horas Prácticas",
      level: "Técnico Especializado"
    },
    {
      code: "COMP-02",
      title: "Configuración y Programación de Inversores Híbridos",
      desc: "Parametrización de algoritmos MPPT, voltajes de flotación y ecualización de bancos de litio LiFePO4, e integración a plataformas de telemetría IoT.",
      duration: "30 Horas Prácticas",
      level: "Técnico Especializado"
    },
    {
      code: "COMP-03",
      title: "Seguridad Eléctrica & Cumplimiento Normativo RETIE",
      desc: "Implementación de mallas de puesta a tierra con telurómetro digital, DPS para descargas atmosféricas y protocolos de seguridad en alturas SST.",
      duration: "45 Horas Prácticas",
      level: "Normativa Oficial"
    },
    {
      code: "COMP-04",
      title: "Bombeo Solar Directo para el Sector Agropecuario",
      desc: "Cálculo de altura manométrica total (ADT), caudales requeridos para hatos ganaderos y dimensionamiento de variadores solares de bombeo sumergible.",
      duration: "35 Horas Prácticas",
      level: "Agro-Energía"
    }
  ];

  return (
    <section id="sena-v2" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Tipo Aprende.org */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-emerald-600" />
            <span>Formación Profesional & Origen SENA 2025</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Competencias técnicas y rigor de ingeniería
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Programa: <strong>{companyInfo.program}</strong> • Ficha: <strong>{companyInfo.ficha}</strong> • Centro de Comercio, Industria y Turismo de Córdoba - Montería.
          </p>
        </div>

        {/* Tarjeta de Respaldo Institucional */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Instructor Líder
            </span>
            <h4 className="text-lg font-display font-black text-slate-900">{companyInfo.instructor}</h4>
            <p className="text-xs text-slate-500">Ingeniero Instructor • SENA Regional Córdoba</p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Equipo Fundador
            </span>
            <div className="text-xs text-slate-700 font-bold space-y-0.5">
              <p>• Oscar David Vega</p>
              <p>• Samir Padilla</p>
              <p>• Cristian Ospina</p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              Dotación & Herramientas
            </span>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              40 herramientas físicas y tecnológicas empleadas en el proyecto (AutoCAD Electrical, PVsyst, Telurómetro, Multímetro True RMS, Cámara Termográfica).
            </p>
          </div>
        </div>

        {/* Módulos de Competencias Estilo Aprende.org */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {competencies.map((comp) => (
            <div
              key={comp.code}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {comp.code}
                  </span>
                  <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase">
                    {comp.level}
                  </span>
                </div>

                <h3 className="text-lg font-display font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {comp.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {comp.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">⏱️ {comp.duration}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Certificado
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
