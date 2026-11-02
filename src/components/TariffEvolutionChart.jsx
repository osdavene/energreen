import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { tariffHistory } from '../data/energreenData';
import { TrendingUp, ShieldCheck, Sun, AlertTriangle, ArrowRight } from 'lucide-react';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler
);

export default function TariffEvolutionChart() {
  const years = tariffHistory.map(item => item.year);
  const monteriaTariffs = tariffHistory.map(item => item.monteria);
  const caribeTariffs = tariffHistory.map(item => item.caribe);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Tarifa Montería ($/kWh)',
        data: monteriaTariffs,
        borderColor: '#d97706',
        backgroundColor: 'rgba(245, 158, 11, 0.15)',
        fill: true,
        tension: 0.35,
        pointBackgroundColor: '#d97706',
        pointBorderColor: '#ffffff',
        pointHoverRadius: 7,
        pointRadius: 5,
        borderWidth: 3,
      },
      {
        label: 'Promedio Costa Caribe ($/kWh)',
        data: caribeTariffs,
        borderColor: '#0284c7',
        backgroundColor: 'rgba(2, 132, 199, 0.06)',
        fill: true,
        tension: 0.35,
        pointBackgroundColor: '#0284c7',
        pointBorderColor: '#ffffff',
        pointHoverRadius: 6,
        pointRadius: 4,
        borderWidth: 2,
        borderDash: [5, 5],
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#334155',
          font: {
            family: 'Plus Jakarta Sans',
            size: 12,
            weight: 'bold'
          },
          boxWidth: 15,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        borderColor: '#cbd5e1',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: $${context.raw.toLocaleString('es-CO')} COP / kWh`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: '#64748b',
          font: {
            family: 'Plus Jakarta Sans',
            weight: '600'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: '#64748b',
          callback: function(value) {
            return '$' + value;
          }
        },
        min: 450,
        max: 1200
      }
    }
  };

  return (
    <section id="tarifas" className="py-20 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      
      {/* Luz sutil */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Texto Contextual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
              <span>Realidad Tarifaria en Montería & Córdoba</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Las tarifas convencionales subieron <span className="text-rose-600">+97%</span> en solo 5 años
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              En nuestro estudio técnico del SENA comprobamos que el kWh en Montería pasó de <strong>$540 COP en 2019 a $1.065 COP en 2024</strong>. En el Caribe pagamos la energía más costosa de Colombia debido a pérdidas no técnicas y altas temperaturas.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200/80 shadow-md space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 text-amber-700 rounded-xl shrink-0 mt-0.5">
                  <Sun className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Tu Energía Solar Fija</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Con paneles solares ENERGREEN generas tu propia energía por los próximos 25 años, blindando tu bolsillo contra futuras alzas de Afinia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Independencia de Apagones</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Sistemas híbridos con baterías de litio para que no se apaguen tus aires acondicionados, neveras ni bombas de agua cuando la red falle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico Interactivo Chart.js */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-xl relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-sm font-extrabold text-slate-900">
                    Evolución del Costo por kWh (2019 - 2024)
                  </span>
                  <p className="text-[11px] text-slate-500">Comparativa oficial Montería vs Costa Caribe</p>
                </div>
                <span className="self-start sm:self-auto text-[11px] font-extrabold px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200 shadow-sm">
                  ⚡ +97.2% Aumento Acumulado
                </span>
              </div>

              <div className="h-[280px] sm:h-[320px] w-full">
                <Line data={data} options={options} />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-100 font-medium gap-2">
                <span>Fuente: Investigación SENA Ficha 3065832 / Datos CREG & XM</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  ☀️ Solución: Solar Fotovoltaica ENERGREEN
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
