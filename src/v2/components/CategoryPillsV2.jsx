import React from 'react';
import { 
  Layers, 
  Sun, 
  Wheat, 
  Coins, 
  ShieldCheck, 
  GraduationCap, 
  Building2 
} from 'lucide-react';

export default function CategoryPillsV2({ selectedCategory, onSelectCategory, counts }) {
  const categories = [
    { id: 'all', label: 'Todos los Temas', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'hogar', label: '💡 Ahorro en el Hogar', icon: <Sun className="w-3.5 h-3.5" /> },
    { id: 'agro', label: '🌾 Bombeo & Agro Fincas', icon: <Wheat className="w-3.5 h-3.5" /> },
    { id: 'finanzas', label: '💰 Financiación Brilla', icon: <Coins className="w-3.5 h-3.5" /> },
    { id: 'retie', label: '🛡️ Seguridad & RETIE', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { id: 'sena', label: '🎓 Capacitación SENA', icon: <GraduationCap className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="py-4 bg-white border-b border-slate-200 sticky top-[73px] z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
            Filtrar:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-600/30'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                {counts && counts[cat.id] !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {counts[cat.id]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
