import React from 'react';
import { Sun, Heart, ShieldCheck, ArrowUp, Zap } from 'lucide-react';
import { companyInfo } from '../data/energreenData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Columna 1 & 2: Branding y Filosofía */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-energreen-500 via-emerald-400 to-ocean-500 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-solar-400 animate-spin-slow" />
                </div>
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                ENER<span className="text-emerald-400">GREEN</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Empresa líder en diseño, instalación, mantenimiento y reparación de sistemas fotovoltaicos en Montería, el departamento de Córdoba y la Costa Caribe.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px]">
              <p className="text-slate-400 font-semibold">Lema Oficial:</p>
              <p className="text-emerald-300 font-bold mt-0.5">“{companyInfo.slogan}”</p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-[10px] font-bold text-emerald-300">
                RETIE Certificado
              </span>
              <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-[10px] font-bold text-amber-300">
                Convenio Brilla
              </span>
              <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-[10px] font-bold text-sky-300">
                Ley 1715
              </span>
            </div>
          </div>

          {/* Columna 3: Enlaces Rápidos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-emerald-400 transition-colors">Inicio</a></li>
              <li><a href="#calculadora" className="hover:text-emerald-400 transition-colors">Calculadora Solar</a></li>
              <li><a href="#productos" className="hover:text-emerald-400 transition-colors">Equipos & Paneles</a></li>
              <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Servicios RETIE</a></li>
              <li><a href="#agro-rural" className="hover:text-emerald-400 transition-colors">Soluciones Agro & ZNI</a></li>
              <li><a href="#iot-demo" className="hover:text-emerald-400 transition-colors">Monitoreo IoT en Vivo</a></li>
            </ul>
          </div>

          {/* Columna 4: Cobertura y Segmentos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sectores</h4>
            <ul className="space-y-2">
              <li><a href="#calculadora" className="hover:text-amber-400 transition-colors">Hogares (Estratos 2 al 6)</a></li>
              <li><a href="#calculadora" className="hover:text-amber-400 transition-colors">Comercial & Hoteles</a></li>
              <li><a href="#agro-rural" className="hover:text-amber-400 transition-colors">Ganadería & Bombeo Solar</a></li>
              <li><a href="#agro-rural" className="hover:text-amber-400 transition-colors">Zonas No Interconectadas (ZNI)</a></li>
              <li><a href="#financiacion" className="hover:text-amber-400 transition-colors">Financiación con Brilla</a></li>
              <li><a href="#financiacion" className="hover:text-amber-400 transition-colors">Incentivos Ley 1715</a></li>
            </ul>
          </div>

          {/* Columna 5: Origen SENA */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Proyecto SENA 2025</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Técnico en Mantenimiento y Ensamble de Equipos Electrónicos • Ficha 3065832 • Montería.
            </p>
            <div className="text-[11px] text-slate-300 space-y-1 pt-1 font-medium">
              <p>• Oscar David Vega</p>
              <p>• Samir Padilla</p>
              <p>• Cristian Ospina</p>
              <p className="text-slate-400 pt-1">Instructor: Jhonatan Marmol</p>
            </div>
          </div>

        </div>

        {/* Barra inferior de copyright y back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-slate-400 text-center sm:text-left">
            © 2025 - 2026 ENERGREEN S.A.S. Todos los derechos reservados. Montería, Córdoba - Región Caribe, Colombia.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
