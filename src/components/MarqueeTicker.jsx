import React from 'react';
import { Sun, Zap, Sparkles, ShieldCheck, TrendingDown, Wheat } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { text: "ENERGÍA SOLAR EN MONTERÍA & CÓRDOBA", icon: <Sun className="w-4 h-4 text-amber-500 fill-current" /> },
    { text: "HASTA 70% MENOS EN TU FACTURA", icon: <TrendingDown className="w-4 h-4 text-emerald-500" /> },
    { text: "CONVENIO FINANCIACIÓN BRILLA", icon: <Zap className="w-4 h-4 text-amber-500 fill-current" /> },
    { text: "CERTIFICACIÓN NORMATIVA RETIE", icon: <ShieldCheck className="w-4 h-4 text-sky-500" /> },
    { text: "BOMBEO SOLAR GANADERO & RIEGO", icon: <Wheat className="w-4 h-4 text-emerald-500" /> },
    { text: "BENEFICIOS TRIBUTARIOS LEY 1715", icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
    { text: "PROYECTO TÉCNICO SENA 2025", icon: <Sun className="w-4 h-4 text-emerald-500" /> },
  ];

  return (
    <div className="bg-slate-900 text-white py-3 overflow-hidden border-y border-slate-800 relative z-20 select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0 px-4">
            <span className="p-1 rounded-md bg-white/10">{item.icon}</span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider font-display uppercase">
              {item.text}
            </span>
            <span className="text-slate-600 font-black">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
