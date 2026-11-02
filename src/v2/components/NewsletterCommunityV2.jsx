import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Sparkles, Sun } from 'lucide-react';

export default function NewsletterCommunityV2() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Luces sutiles */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-[11px] font-extrabold uppercase tracking-wider mb-4 border border-white/10">
          <Sun className="w-3.5 h-3.5 fill-current" />
          <span>Comunidad Solar de Córdoba</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight">
          Aprende a pagar menos energía cada mes
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Recibe en tu correo nuestras guías actualizadas sobre alzas tarifarias de Afinia, novedades de créditos Brilla y casos de éxito reales en Montería y el Caribe.
        </p>

        {subscribed ? (
          <div className="mt-8 p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-2 text-emerald-300 text-xs font-bold animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>¡Excelente! Te has suscrito a la comunidad solar de EnerGreen.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="Ingresa tu correo electrónico..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-4 py-3 bg-white/10 text-white text-xs placeholder-slate-400 rounded-xl border border-white/20 focus:border-emerald-400 focus:bg-white/15 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Suscribirme Gratis</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[10px] text-slate-400 mt-3 font-medium">
          Cero spam. Solo contenido técnico de valor y consejos de ahorro real.
        </p>

      </div>
    </section>
  );
}
