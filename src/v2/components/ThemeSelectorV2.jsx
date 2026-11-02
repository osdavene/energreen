import React from 'react';
import { Palette, Sparkles, Check, Droplets } from 'lucide-react';
import { greenBackgrounds, colorThemes } from '../theme/themeData';

export default function ThemeSelectorV2({ 
  currentBgId, 
  onSelectBg,
  currentThemeId, 
  onSelectTheme 
}) {
  const bgList = Object.values(greenBackgrounds);
  const themesList = Object.values(colorThemes);

  const getBgPreviewColor = (bgId) => {
    switch (bgId) {
      case 'sinu':
        return 'linear-gradient(135deg, #e3f2ea 0%, #edf7f2 50%, #d6ede0 100%)';
      case 'oliva':
        return '#eef4eb';
      case 'bosque':
        return '#06241c';
      default: // salvia
        return '#eef7f2';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-emerald-200/60 py-3 px-4 sticky top-[69px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Título del Selector de Fondo Verde */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
          <div className="w-7 h-7 rounded-xl bg-teal-100 border border-teal-300 flex items-center justify-center text-teal-800 shadow-xs">
            <Droplets className="w-4 h-4 text-teal-700" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-teal-900 block">
              🌿 Elige tu Tono de Fondo Verde:
            </span>
            <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">
              Fondo blanco reemplazado por tonos ecológicos de Córdoba
            </span>
          </div>
        </div>

        {/* Botones de las 4 Opciones de Fondo Verde */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-full">
          {bgList.map((bg) => {
            const isSelected = currentBgId === bg.id;
            const bgPreview = getBgPreviewColor(bg.id);

            return (
              <button
                key={bg.id}
                onClick={() => onSelectBg(bg.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 border ${
                  isSelected
                    ? 'bg-slate-950 text-white border-slate-900 shadow-md ring-2 ring-teal-500/30 scale-105'
                    : 'bg-white text-slate-700 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                }`}
                title={bg.desc}
              >
                {/* Muestra circular con el color del fondo */}
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0 shadow-xs"
                  style={{ background: bgPreview }}
                ></span>

                <span className="text-[11px] font-extrabold">{bg.name}</span>

                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
