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
import { TrendingUp, ShieldCheck, Sun, AlertTriangle } from 'lucide-react';

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
    <section className="py-16 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Texto Contextual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-bold uppercase">
              <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
              <span>Crisis Tarifaria en la Costa Caribe</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
              Las tarifas convencionales subieron <span className="text-rose-600">+97% en 5 años</span>
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Según el estudio de mercado de nuestro proyecto SENA, el costo del kWh en Montería pasó de <strong>$540 COP en 2019 a $1.065 COP en 2024</strong>. En el Caribe pagamos la energía más costosa de Colombia debido a pérdidas y costos de red.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2.5">
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700">
                  <strong className="text-slate-900">La solución definitiva:</strong> Con un sistema solar fotovoltaico fijas el costo de tu energía a $0 pesos durante los próximos 25 años.
                </p>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-emerald-100">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700">
                  <strong className="text-slate-900">Independencia total:</strong> Olvídate de los apagones y fluctuaciones de voltaje comunes en Córdoba.
                </p>
              </div>
            </div>
          </div>

          {/* Gráfico Interactivo Chart.js */}
          <div className="lg:col-span-7">
            <div className="glass-fresh-card p-5 sm:p-7 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-slate-800">
                  Evolución Histórica de la Tarifa Eléctrica (COP / kWh)
                </span>
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                  +97.2% Aumento
                </span>
              </div>

              <div className="h-[280px] sm:h-[320px] w-full">
                <Line data={data} options={options} />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-100 font-medium">
                <span>Fuente: Estudio de Mercado ENERGREEN / Datos CREG & XM</span>
                <span className="text-emerald-700 font-bold">Montería vs Promedio Caribe</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
