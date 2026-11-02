import React from 'react';
import { Palette, Sparkles, Check } from 'lucide-react';
import { colorThemes } from '../theme/themeData';

export default function ThemeSelectorV2({ currentThemeId, onSelectTheme }) {
  const themesList = Object.values(colorThemes);

  const getDots = (themeId) => {
    switch (themeId) {
      case 'nordic':
        return ['#2563EB', '#6366F1', '#06B6D4'];
      case 'eco':
        return ['#0F766E', '#059669', '#D97706'];
      case 'editorial':
        return ['#18181B', '#4F46E5', '#F59E0B'];
      default: // caribe
        return ['#059669', '#0D9488', '#F59E0B'];
    }
  };

  return (
    <div className="bg-slate-50 border-b border-slate-200 py-2.5 px-4 sticky top-[69px] z-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Etiqueta didáctica */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
            <Palette className="w-3.5 h-3.5 text-slate-900" />
          </div>
          <span className="text-[11px] uppercase tracking-wider text-slate-500 font-extrabold">
            Explora Tonos y Colores en Vivo:
          </span>
        </div>

        {/* Botones de las 4 Paletas */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 max-w-full">
          {themesList.map((t) => {
            const isSelected = currentThemeId === t.id;
            const dots = getDots(t.id);

            return (
              <button
                key={t.id}
                onClick={() => onSelectTheme(t.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 border ${
                  isSelected
                    ? 'bg-slate-950 text-white border-slate-900 shadow-md ring-2 ring-slate-950/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                }`}
              >
                {/* Indicador de 3 puntos de color */}
                <div className="flex items-center -space-x-1">
                  {dots.map((d, dIdx) => (
                    <span
                      key={dIdx}
                      className="w-2.5 h-2.5 rounded-full border border-white"
                      style={{ backgroundColor: d }}
                    ></span>
                  ))}
                </div>

                <span className="text-[11px]">{t.name}</span>

                {isSelected && (
                  <Check className="w-3 h-3 text-amber-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
