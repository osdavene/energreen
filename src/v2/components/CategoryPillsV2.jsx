import React from 'react';
import { 
  Layers, 
  Sun, 
  Wheat, 
  Coins, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';

export default function CategoryPillsV2({ selectedCategory, onSelectCategory, counts, theme }) {
  const categories = [
    { 
      id: 'all', 
      label: 'Todos los Temas', 
      icon: <Layers className="w-3.5 h-3.5" />,
      colorClass: 'hover:text-slate-900',
      activeClass: theme.activePill
    },
    { 
      id: 'hogar', 
      label: '💡 Ahorro Hogar', 
      icon: <Sun className="w-3.5 h-3.5" />,
      colorClass: 'hover:text-amber-700',
      activeClass: 'bg-amber-500 text-white border-amber-500 shadow-amber-500/30'
    },
    { 
      id: 'agro', 
      label: '🌾 Bombeo Agro', 
      icon: <Wheat className="w-3.5 h-3.5" />,
      colorClass: 'hover:text-emerald-700',
      activeClass: 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-600/30'
    },
    { 
      id: 'finanzas', 
      label: '💰 Financiación Brilla', 
      icon: <Coins className="w-3.5 h-3.5" />,
      colorClass: 'hover:text-teal-700',
      activeClass: 'bg-teal-600 text-white border-teal-600 shadow-teal-600/30'
    },
    { 
      id: 'retie', 
      label: '🛡️ Seguridad RETIE', 
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
      colorClass: 'hover:text-blue-700',
      activeClass: 'bg-blue-600 text-white border-blue-600 shadow-blue-600/30'
    },
    { 
      id: 'sena', 
      label: '🎓 Cursos SENA', 
      icon: <GraduationCap className="w-3.5 h-3.5" />,
      colorClass: 'hover:text-indigo-700',
      activeClass: 'bg-indigo-600 text-white border-indigo-600 shadow-indigo-600/30'
    },
  ];

  return (
    <div className="py-3.5 bg-white border-b border-slate-200 sticky top-[113px] z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
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
                    ? `${cat.activeClass} shadow-md scale-105`
                    : `bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 ${cat.colorClass}`
                }`}
              >
                <span>{cat.label}</span>
                {counts && counts[cat.id] !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
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
