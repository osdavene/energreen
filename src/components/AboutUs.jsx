import React, { useState } from 'react';
import { 
  companyInfo, 
  physicalResources, 
  techResources, 
  teamStructure 
} from '../data/energreenData';
import { 
  Leaf, 
  Cpu, 
  ShieldCheck, 
  Users, 
  Award, 
  HeartHandshake, 
  Target, 
  Compass, 
  Wrench, 
  GraduationCap, 
  Sparkles,
  CheckCircle,
  Building
} from 'lucide-react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('identidad');

  const getValueIcon = (name) => {
    switch(name) {
      case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-sky-600" />;
      case 'Users': return <Users className="w-5 h-5 text-teal-600" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-rose-600" />;
      default: return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-4 h-4 text-emerald-600" />
            <span>Identidad Institucional & Origen Técnico SENA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Nuestra visión para transformar la <span className="gradient-fresh-hero">energía del Caribe</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Un proyecto empresarial integral gestado en Montería, respaldado por formación técnica de excelencia y pasión por la sostenibilidad ambiental.
          </p>

          {/* Selector de Pestañas */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-md">
            {[
              { id: 'identidad', label: 'Misión & Visión 2030' },
              { id: 'valores', label: 'Valores Corporativos' },
              { id: 'dotacion', label: 'Dotación Técnica (40 Recursos)' },
              { id: 'equipo', label: 'Talento Humano & SENA' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: IDENTIDAD, MISIÓN Y VISIÓN */}
        {activeTab === 'identidad' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Explicación de la Marca ENER + GREEN */}
            <div className="glass-fresh-card p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider block mb-2">
                  El Significado de Nuestra Marca
                </span>
                <h3 className="text-2xl font-display font-black text-slate-900 mb-3">
                  ENER<span className="text-emerald-600">GREEN</span>: Energía + Verde Sostenible
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  <strong>ENER:</strong> Hace referencia a la energía como motor de desarrollo, progreso y transformación eficiente de recursos.<br/>
                  <strong>GREEN:</strong> Simboliza nuestro compromiso ambiental irrenunciable, respeto por la naturaleza y economía circular.
                </p>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 inline-block">
                  <p className="text-xs text-emerald-800 font-semibold">Lema oficial de la empresa:</p>
                  <p className="text-sm font-extrabold text-emerald-950 mt-0.5">“{companyInfo.slogan}”</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                  <p className="text-xs font-extrabold text-amber-900">Amarillo Solar</p>
                  <p className="text-[11px] text-amber-700 mt-1">Vitalidad, optimismo y abundancia energética inagotable.</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                  <p className="text-xs font-extrabold text-emerald-900">Verde Ecológico</p>
                  <p className="text-[11px] text-emerald-700 mt-1">Sostenibilidad, equilibrio natural y cuidado del planeta.</p>
                </div>
                <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200">
                  <p className="text-xs font-extrabold text-sky-900">Azul Tecnológico</p>
                  <p className="text-[11px] text-sky-700 mt-1">Ciencia, rigor técnico, innovación y confianza profesional.</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  <p className="text-xs font-extrabold text-slate-900">Montería 2025</p>
                  <p className="text-[11px] text-slate-600 mt-1">Centro de operaciones y expansión a toda la región Caribe.</p>
                </div>
              </div>
            </div>

            {/* Misión y Visión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="glass-fresh-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-black text-slate-900 mb-3">Nuestra Misión</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {companyInfo.mission}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Impacto social, económico y ambiental medible</span>
                </div>
              </div>

              <div className="glass-fresh-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-black text-slate-900 mb-3">Nuestra Visión 2030</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {companyInfo.vision}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-700 font-bold">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>Liderazgo en la transición energética del Caribe</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: VALORES CORPORATIVOS */}
        {activeTab === 'valores' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {companyInfo.values.map((val, idx) => (
              <div key={idx} className="glass-fresh-card p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                    {getValueIcon(val.icon)}
                  </div>
                  <h3 className="text-lg font-display font-black text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
                <span className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider mt-4">
                  Pilar #{idx + 1} ENERGREEN
                </span>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: DOTACIÓN TÉCNICA (20 FÍSICOS + 20 TECNOLÓGICOS) */}
        {activeTab === 'dotacion' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            
            {/* 20 Recursos Físicos */}
            <div className="glass-fresh-card p-6 sm:p-7 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-200">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">20 Herramientas y Equipos Físicos</h3>
                  <p className="text-xs text-slate-500">Dotación certificada de seguridad y precisión RETIE</p>
                </div>
              </div>

              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-2">
                {physicalResources.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 py-1.5 border-b border-slate-100">
                    <span className="text-amber-700 font-extrabold text-[11px] w-6 shrink-0">#{idx+1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 20 Recursos Tecnológicos */}
            <div className="glass-fresh-card p-6 sm:p-7 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200">
                <div className="p-2.5 rounded-xl bg-sky-100 text-sky-800 border border-sky-200">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">20 Recursos Tecnológicos & Software</h3>
                  <p className="text-xs text-slate-500">PVsyst, AutoCAD Electrical, Monitoreo IoT y Cloud</p>
                </div>
              </div>

              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-2">
                {techResources.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 py-1.5 border-b border-slate-100">
                    <span className="text-sky-700 font-extrabold text-[11px] w-6 shrink-0">#{idx+1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: TALENTO HUMANO & PROYECTO SENA */}
        {activeTab === 'equipo' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Banner de Créditos SENA 2025 */}
            <div className="glass-fresh-card p-6 sm:p-8 rounded-3xl border border-emerald-300 bg-gradient-to-r from-emerald-50 via-white to-sky-50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                    {companyInfo.institution}
                  </span>
                  <h3 className="text-2xl font-display font-black text-slate-900">
                    {companyInfo.program}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                    Proyecto de Instalación y Reparación de Sistemas Fotovoltaicos ENERGREEN • Montería, Córdoba ({companyInfo.year}) • Ficha {companyInfo.ficha}.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shrink-0 shadow-sm">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Instructor Asesor:</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5">{companyInfo.instructor}</p>
                </div>
              </div>

              {/* Integrantes Fundadores */}
              <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {companyInfo.founders.map((founder, fIdx) => (
                  <div key={fIdx} className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-extrabold mx-auto flex items-center justify-center mb-2 border border-emerald-200 text-xs">
                      {founder.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                    </div>
                    <p className="text-sm font-extrabold text-slate-900">{founder.name}</p>
                    <p className="text-[11px] text-slate-500">{founder.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Estructura de 13 Colaboradores */}
            <div className="glass-fresh-card p-6 sm:p-7 rounded-3xl">
              <h4 className="text-base font-bold text-slate-900 mb-4">
                Estructura Organizacional Compacta (13 Especialistas)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {teamStructure.map((team, tIdx) => (
                  <div key={tIdx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-amber-700 uppercase">{team.area}</span>
                      <p className="text-xs font-bold text-slate-900 mt-1">{team.role}</p>
                      <p className="text-[10px] text-slate-500 mt-1 leading-tight">{team.profile}</p>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-bold mt-3 block border-t border-slate-100 pt-1.5">
                      {team.qty} {team.qty === 1 ? 'Persona' : 'Personas'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
