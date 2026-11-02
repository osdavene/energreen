import React, { useState } from 'react';
import { 
  X, 
  PlayCircle, 
  FileText, 
  CheckCircle, 
  Award, 
  GraduationCap, 
  ArrowRight
} from 'lucide-react';

export default function CourseModalV2({ course, isOpen, onClose, onOpenQuoteModal, theme }) {
  if (!isOpen || !course) return null;

  const [activeLesson, setActiveLesson] = useState(
    course.modules?.[0]?.lessons?.[0]?.title || ''
  );
  const [completedLessons, setCompletedLessons] = useState([
    course.modules?.[0]?.lessons?.[0]?.title || ''
  ]);

  const toggleLessonComplete = (lessonTitle) => {
    if (completedLessons.includes(lessonTitle)) {
      setCompletedLessons(completedLessons.filter((l) => l !== lessonTitle));
    } else {
      setCompletedLessons([...completedLessons, lessonTitle]);
    }
  };

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const progressPercent = Math.round((completedLessons.length / totalLessons) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col my-auto">
        
        {/* Cabecera Aprende.org Modal */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-emerald-500 flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white/10 text-amber-300 border border-white/20">
                {course.category} • {course.level}
              </span>
              <h3 className="text-base sm:text-xl font-bold font-display text-white line-clamp-1">
                {course.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Cerrar curso"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Progreso del Alumno (Estilo LMS Aprende.org) */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Progreso: {completedLessons.length} de {totalLessons} lecciones completadas</span>
              <span className={`font-bold ${theme.accentText}`}>{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div 
                className={`bg-gradient-to-r ${theme.progressGradient} h-full transition-all duration-500`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Award className="w-3.5 h-3.5" />
            <span>Certificado SENA al completar</span>
          </span>
        </div>

        {/* Contenido Modular */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Columna Izquierda: Temario y Módulos Desplegables */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
              Temario y Lecciones Modulares
            </h4>

            {course.modules.map((mod, mIdx) => (
              <div key={mIdx} className="border border-slate-200 rounded-2xl p-3.5 bg-slate-50/70">
                <p className="text-xs font-black text-slate-800 mb-2.5 flex items-center gap-1.5">
                  <span className={`w-5 h-5 rounded-full ${theme.accentBgLight} ${theme.accentText} border ${theme.accentBorderLight} text-[10px] flex items-center justify-center font-bold`}>
                    {mIdx + 1}
                  </span>
                  <span>{mod.title}</span>
                </p>

                <div className="space-y-1.5">
                  {mod.lessons.map((les, lIdx) => {
                    const isCompleted = completedLessons.includes(les.title);
                    const isActive = activeLesson === les.title;

                    return (
                      <button
                        key={lIdx}
                        onClick={() => setActiveLesson(les.title)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                          isActive
                            ? `${theme.primaryButtonAlt} font-bold shadow-sm`
                            : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          {les.type === 'video' ? (
                            <PlayCircle className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                          ) : (
                            <FileText className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                          )}
                          <span className="truncate">{les.title}</span>
                        </div>
                        <span className={`text-[10px] shrink-0 ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                          {les.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Columna Derecha: Vista de la Lección Activa */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-6">
            <div>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${theme.accentBgLight} ${theme.accentText} text-[11px] font-bold mb-3 border ${theme.accentBorderLight}`}>
                <PlayCircle className="w-3.5 h-3.5" />
                <span>Lección Activa</span>
              </div>

              <h4 className="text-xl font-black font-display text-slate-900 mb-3">
                {activeLesson || 'Selecciona una lección para comenzar'}
              </h4>

              {/* Reproductor / Visualizador de Lección Educativa */}
              <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-center p-6 text-white relative overflow-hidden group shadow-inner">
                <div className={`absolute inset-0 bg-radial from-slate-800 to-slate-950 opacity-90`}></div>
                <div className="relative z-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-300">Video Explicativo SENA Montería</p>
                    <p className="text-sm font-bold text-slate-200">Conceptos Clave para el Caribe Colombiano</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <p className="font-bold text-slate-800">📋 Resumen Pedagógico de esta lección:</p>
                <p>
                  En esta sesión se detalla cómo calcular la radiación solar incidente en Montería y municipios aledaños (Cereté, Sahagún, Lorica) y cómo contrastar la potencia pico de los módulos con las tarifas reguladas de Afinia.
                </p>
                <p className="text-slate-500 italic">
                  Instructor asignado: {course.instructor}
                </p>
              </div>
            </div>

            {/* Acciones de la Lección */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => toggleLessonComplete(activeLesson)}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  completedLessons.includes(activeLesson)
                    ? 'bg-slate-100 text-slate-800 border border-slate-300'
                    : `${theme.primaryButton} shadow-md`
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>
                  {completedLessons.includes(activeLesson) ? 'Lección Marcada como Completada ✓' : 'Marcar como Completada'}
                </span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Cotizar Proyecto Real</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
