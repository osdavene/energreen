import React from 'react';
import { Sun, Heart, ShieldCheck, ArrowUp, Zap, GraduationCap, MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/energreenData';

export default function FooterV2() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-amber-400 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <Sun className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                ENER<span className="text-emerald-400">GREEN</span>
              </span>
              <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 font-extrabold px-2 py-0.5 rounded">
                Academy & Solutions
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Plataforma de conocimiento y soluciones solares fotovoltaicas nacida en el SENA Montería para democratizar la energía limpia en el departamento de Córdoba y la Costa Caribe.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-[11px]">
              <p className="text-slate-400 font-semibold">Lema Oficial:</p>
              <p className="text-emerald-300 font-bold mt-0.5">“{companyInfo.slogan}”</p>
            </div>

            {/* Enlace directo a WhatsApp */}
            <div className="pt-1">
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hola%20ENERGREEN,%20deseo%20asesoría%20sobre%20energía%20solar`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-[11px] font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Hablar con un Asesor SENA</span>
              </a>
            </div>
          </div>

          {/* Col 3: Secciones de Aprendizaje */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Aprende Solar</h4>
            <ul className="space-y-2">
              <li><a href="#cursos-v2" className="hover:text-emerald-400 transition-colors">Cursos Aprende.org</a></li>
              <li><a href="#guias-v2" className="hover:text-emerald-400 transition-colors">Biblioteca de Guías</a></li>
              <li><a href="#laboratorio-v2" className="hover:text-emerald-400 transition-colors">Laboratorio de Ahorro</a></li>
              <li><a href="#laboratorio-v2" className="hover:text-emerald-400 transition-colors">Glosario Técnico</a></li>
              <li><a href="#faq-v2" className="hover:text-emerald-400 transition-colors">Preguntas & Mitos</a></li>
            </ul>
          </div>

          {/* Col 4: Líneas de Soluciones */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Soluciones Córdoba</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-300">Sistemas On-Grid Afinia</span></li>
              <li><span className="text-slate-300">Bombeo Solar en Pozos Profundos</span></li>
              <li><span className="text-slate-300">Financiación Brilla Surtigas</span></li>
              <li><span className="text-slate-300">Certificación y Planos RETIE</span></li>
              <li><span className="text-slate-300">Mantenimiento de Inversores</span></li>
            </ul>
          </div>

          {/* Col 5: Créditos SENA */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>SENA Montería</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Técnico en Mantenimiento y Ensamble de Equipos Electrónicos • Ficha 3065832.
            </p>
            <div className="text-[11px] text-slate-300 space-y-0.5 pt-1">
              <p>• Oscar David Vega</p>
              <p>• Samir Padilla</p>
              <p>• Cristian Ospina</p>
              <p className="text-slate-400 pt-1">Instructor: Jhonatan Marmol</p>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-slate-400 text-center sm:text-left">
            © 2025 - 2026 ENERGREEN S.A.S. • energreen.servigest.online • Montería, Córdoba - Región Caribe, Colombia.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
