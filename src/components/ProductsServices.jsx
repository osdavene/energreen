import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Settings, 
  Activity, 
  Coins, 
  Sun, 
  Cpu, 
  Battery, 
  Layers, 
  Droplets, 
  Radio, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Zap,
  Check
} from 'lucide-react';
import { productsCatalog, servicesCatalog } from '../data/energreenData';
import techInstallationImg from '../assets/images/solar_tech_installation.jpg';

export default function ProductsServices({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('servicios');
  const [selectedProductCategory, setSelectedProductCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos los Equipos' },
    { id: 'Equipos Principales', name: 'Paneles & Inversores' },
    { id: 'Soluciones Agropecuarias', name: 'Agro & Bombeo Solar' },
    { id: 'Soluciones Rurales', name: 'Zonas Rurales / ZNI' },
    { id: 'Accesorios', name: 'Baterías & Accesorios' },
  ];

  const filteredProducts = selectedProductCategory === 'all'
    ? productsCatalog
    : productsCatalog.filter(p => p.category === selectedProductCategory);

  const getServiceIcon = (iconName) => {
    switch(iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-amber-600" />;
      case 'Settings': return <Settings className="w-6 h-6 text-sky-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-teal-600" />;
      case 'Coins': return <Coins className="w-6 h-6 text-amber-600" />;
      default: return <Sun className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="productos" className="py-20 md:py-28 bg-white relative border-t border-slate-100">
      
      {/* Luz sutil de fondo */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Amigable */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Equipos Tier-1 & Servicios Certificados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
            Tecnología solar duradera y <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">servicios RETIE</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Desde la ingeniería previa con dron y software especializado hasta el montaje certificado bajo norma RETIE con 25 años de garantía de generación.
          </p>

          {/* Selector de Pestaña Principal */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner">
            <button
              onClick={() => setActiveTab('servicios')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'servicios'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Servicios Técnicos RETIE</span>
            </button>
            <button
              onClick={() => setActiveTab('productos')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'productos'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-400 fill-current" />
              <span>Catálogo de Equipos</span>
            </button>
          </div>
        </div>

        {/* CONTENIDO: SERVICIOS TÉCNICOS */}
        {activeTab === 'servicios' && (
          <div id="servicios" className="space-y-10">
            
            {/* Banner Destacado con Fotografía del Técnico */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Ingeniería SENA & Dictamen RETIE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-snug">
                  Mano de obra técnica calificada y materiales que soportan el clima del Caribe
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  En el Caribe la brisa marina, la radiación intensa y la humedad exigen perfiles de aluminio anodizado estructural, conectores MC4 sellados y protecciones contra sobretensiones certificadas.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                    <p className="text-xs font-extrabold text-emerald-950">Garantía de Instalación</p>
                    <p className="text-[11px] text-emerald-700 mt-0.5">Soporte técnico continuo</p>
                  </div>
                  <div className="p-3 bg-white rounded-2xl border border-amber-100 shadow-sm">
                    <p className="text-xs font-extrabold text-amber-950">Inspección con Dron</p>
                    <p className="text-[11px] text-amber-700 mt-0.5">Cámara termográfica</p>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={onOpenQuoteModal}
                    className="px-6 py-3 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Agendar Diagnóstico en Mi Predio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 h-72 sm:h-96 lg:h-full relative overflow-hidden">
                <img
                  src={techInstallationImg}
                  alt="Técnico instalador de paneles solares ENERGREEN"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Grid de Servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesCatalog.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getServiceIcon(service.icon)}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {service.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-black text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenQuoteModal}
                    className="w-full py-2.5 px-4 text-xs font-extrabold text-slate-700 bg-slate-100 hover:bg-emerald-600 hover:text-white border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Solicitar este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* CONTENIDO: PRODUCTOS Y EQUIPOS */}
        {activeTab === 'productos' && (
          <div className="space-y-8">
            
            {/* Filtros por Categoría */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedProductCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                    selectedProductCategory === cat.id
                      ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-md shadow-amber-400/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {prod.category}
                      </span>
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {prod.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {prod.description}
                    </p>

                    <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Especificaciones Clave:</p>
                      {prod.specs.map((spec, sidx) => (
                        <div key={sidx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenQuoteModal}
                    className="w-full py-2.5 px-4 text-xs font-extrabold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Cotizar este equipo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
