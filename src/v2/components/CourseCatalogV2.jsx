import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  PlayCircle, 
  CheckCircle, 
  Award, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Users,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { v2Courses } from '../data/v2Data';

export default function CourseCatalogV2({ onSelectCourse, onOpenQuoteModal }) {
  return (
    <section id="cursos-v2" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Aprende.org Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-[11px] font-black uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Plataforma de Formación • Estilo Aprende.org</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
              Capacítate en Energía Solar: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-700 to-emerald-700">
                Cursos Abiertos y Oficios Técnicos
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              Programas pedagógicos modulares diseñados por técnicos electrónicos del <strong>SENA Montería</strong> para empoderar a familias, técnicos e instaladores del departamento de Córdoba.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm shrink-0">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">100% Acceso Gratuito</p>
              <p className="text-[11px] text-slate-500">Con aval formativo SENA (Ficha 3065832)</p>
            </div>
          </div>
        </div>

        {/* Grilla de Cursos Estilo Aprende.org */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {v2Courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              <div>
                {/* Portada del Curso */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-xs ${course.badgeColor}`}>
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white px-2 py-0.5 rounded-md text-[10px] font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Contenido del Card */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{course.level}</span>
                  </div>

                  <h3 className="text-base font-black font-display text-slate-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {course.shortDesc}
                  </p>
                </div>
              </div>

              {/* Pie del Card con Botón de Temario */}
              <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50/50 space-y-3">
                <div className="text-[11px] text-slate-500 font-medium">
                  Instructor: <strong>{course.instructor.split('(')[0]}</strong>
                </div>

                <button
                  onClick={() => onSelectCourse(course)}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ver Temario & Clases</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fila Informativa de Certificación SENA */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                ¿Deseas homologar tus conocimientos con certificación oficial SENA?
              </h4>
              <p className="text-xs text-slate-600">
                EnerGreen apoya la vinculación laboral de jóvenes egresados del Centro de Comercio, Industria y Turismo de Córdoba (Ficha 3065832).
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="w-full md:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 shrink-0 transition-all"
          >
            <span>Postular Hoja de Vida / Alianza</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
