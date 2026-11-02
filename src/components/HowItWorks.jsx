import React from 'react';
import { 
  FileText, 
  Wrench, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Smartphone,
  ShieldCheck,
  Zap,
  Sun
} from 'lucide-react';

export default function HowItWorks({ onOpenQuoteModal }) {
  const steps = [
    {
      number: "01",
      badge: "Paso 1 • Diagnóstico 100% Gratis",
      title: "Envíanos tu recibo de energía",
      desc: "Solo necesitas enviarnos una foto o PDF de tu última factura de luz (Afinia/comercializador). Evaluamos tus consumos y modelamos tu cubierta con satélite y software PVsyst.",
      time: "Respuesta en < 24 Horas",
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      color: "from-emerald-500 to-teal-500",
      lightColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      highlights: ["Estudio solar sin compromiso", "Cálculo de ahorro mensual exacto", "Propuesta de financiación Brilla o contado"]
    },
    {
      number: "02",
      badge: "Paso 2 • Montaje Rápido & Seguro",
      title: "Instalación certificada RETIE",
      desc: "Nuestros técnicos certificados SENA instalan los paneles solares de alta eficiencia, el inversor inteligente y las protecciones eléctricas sin alterar la estética ni romper tu propiedad.",
      time: "Instalación en 48 a 72 Horas",
      icon: <Wrench className="w-6 h-6 text-amber-600" />,
      color: "from-amber-500 to-orange-500",
      lightColor: "bg-amber-50 text-amber-700 border-amber-200",
      highlights: ["Mano de obra certificada RETIE", "Estructuras en aluminio anticorrosivo", "Cero cables a la vista y máxima seguridad"]
    },
    {
      number: "03",
      badge: "Paso 3 • Disfrute & Control",
      title: "Tu tejado genera dinero cada día",
      desc: "Conectamos tu sistema a la red con medidor bidireccional para venta de excedentes CREG. Abres la App en tu celular y ves cómo el sol de Córdoba reduce tu recibo hasta el 70%.",
      time: "Ahorro desde el Primer Mes",
      icon: <TrendingDown className="w-6 h-6 text-sky-600" />,
      color: "from-sky-500 to-blue-600",
      lightColor: "bg-sky-50 text-sky-700 border-sky-200",
      highlights: ["Monitoreo WiFi en tiempo real", "Garantía de generación por 25 años", "La cuota se paga sola con tu ahorro"]
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Luces sutiles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Transición Solar Simple & Amigable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Pasarse a la energía solar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              es más fácil de lo que crees
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Sin papeleos engorrosos ni sorpresas. Nos encargamos de todo el proceso técnico, legal y de ingeniería para que tú solo disfrutes del ahorro.
          </p>
        </div>

        {/* 3 Pasos en Tarjetas Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 relative"
            >
              {/* Número de fondo grande decorativo */}
              <div className="absolute top-4 right-6 font-display font-black text-6xl text-slate-200/60 select-none pointer-events-none group-hover:text-emerald-100 transition-colors">
                {step.number}
              </div>

              <div>
                {/* Icono y Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${step.lightColor}`}>
                    {step.time}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Lista de beneficios */}
                <div className="space-y-2.5 mb-6 pt-2 border-t border-slate-200/60">
                  {step.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-700 bg-white hover:bg-emerald-600 hover:text-white border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Iniciar con este paso</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Inferior Amigable */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-amber-200">
              <Sun className="w-3.5 h-3.5 fill-current" />
              <span>Visita Técnica Gratuita en Montería y Córdoba</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-display font-black">
              ¿Quieres saber cuántos paneles necesita tu predio?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Nuestros ingenieros van hasta tu casa, finca o negocio y te entregan el cálculo exacto sin costo ni compromiso.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="whitespace-nowrap px-7 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-2xl shadow-lg shadow-amber-500/20 transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Agendar Visita Gratuita</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
