import React from 'react';
import { Sun, Zap, Sparkles, ShieldCheck, TrendingDown, Wheat, HeartHandshake, CheckCircle } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { text: "ENERGÍA SOLAR EN MONTERÍA & CÓRDOBA", icon: <Sun className="w-4 h-4 text-amber-400 fill-current" /> },
    { text: "HASTA 70% MENOS EN TU FACTURA", icon: <TrendingDown className="w-4 h-4 text-emerald-400" /> },
    { text: "FINANCIA A 0% INICIAL CON BRILLA", icon: <Zap className="w-4 h-4 text-amber-400 fill-current" /> },
    { text: "CERTIFICACIÓN NORMATIVA RETIE", icon: <ShieldCheck className="w-4 h-4 text-sky-400" /> },
    { text: "BOMBEO SOLAR GANADERO & RIEGO", icon: <Wheat className="w-4 h-4 text-emerald-400" /> },
    { text: "BENEFICIOS TRIBUTARIOS LEY 1715", icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
    { text: "GARANTÍA DE 25 AÑOS EN PANELES", icon: <CheckCircle className="w-4 h-4 text-emerald-400" /> },
    { text: "PROYECTO TÉCNICO SENA 2025", icon: <HeartHandshake className="w-4 h-4 text-teal-400" /> },
  ];

  return (
    <div className="bg-slate-950 text-white py-3.5 overflow-hidden border-y border-slate-800 relative z-20 select-none shadow-md">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0 px-4">
            <span className="p-1.5 rounded-lg bg-white/10 border border-white/10 shadow-sm">{item.icon}</span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider font-display uppercase text-slate-100">
              {item.text}
            </span>
            <span className="text-emerald-500 font-black">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
