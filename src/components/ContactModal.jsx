import React, { useState } from 'react';
import { X, Send, Sun, Zap, CheckCircle2, Phone, MapPin, Building, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/energreenData';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Montería',
    type: 'Residencial',
    billValue: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const message = `⚡ *SOLICITUD DE COTIZACIÓN - ENERGREEN*
- *Nombre:* ${formData.name}
- *Teléfono:* ${formData.phone}
- *Ciudad/Municipio:* ${formData.city} (Córdoba)
- *Tipo de Proyecto:* ${formData.type}
- *Factura mensual:* ${formData.billValue ? '$' + formData.billValue + ' COP' : 'Por evaluar'}
- *Detalles adicionales:* ${formData.notes || 'Ninguno'}

Solicito visita técnica y asesoría de financiación con Brilla.`;

    const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-800">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">
              <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
              <span>Cotización & Diagnóstico Gratuito</span>
            </div>
            
            <h3 className="text-2xl font-display font-black text-slate-900">
              Inicia tu proyecto solar con <span className="text-emerald-600">ENERGREEN</span>
            </h3>
            
            <p className="text-xs text-slate-600 mt-1 mb-6">
              Déjanos tus datos y un ingeniero se pondrá en contacto para agendar la visita en sitio en Montería o municipios de Córdoba.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Celular / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 3001234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Municipio (Córdoba) *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  >
                    <option value="Montería">Montería</option>
                    <option value="Cereté">Cereté</option>
                    <option value="Lorica">Lorica</option>
                    <option value="Sahagún">Sahagún</option>
                    <option value="Tierralta">Tierralta</option>
                    <option value="Planeta Rica">Planeta Rica</option>
                    <option value="San Antero">San Antero</option>
                    <option value="Montelíbano">Montelíbano</option>
                    <option value="Valencia">Valencia</option>
                    <option value="Otro municipio del Caribe">Otro municipio del Caribe</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tipo de Proyecto *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  >
                    <option value="Residencial (Estratos 2-6)">Residencial (Estratos 2-6)</option>
                    <option value="Comercial / Hoteles / Clínicas">Comercial / Hoteles / Clínicas</option>
                    <option value="Agropecuario (Bombeo / Finca)">Agropecuario (Bombeo / Finca)</option>
                    <option value="Zonas Rurales / ZNI">Zonas Rurales / ZNI</option>
                    <option value="Mantenimiento de Sistema Existente">Mantenimiento de Sistema Existente</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Valor mensual del recibo (COP)</label>
                  <input
                    type="text"
                    placeholder="Ej. 650.000"
                    value={formData.billValue}
                    onChange={(e) => setFormData({ ...formData, billValue: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Comentarios o necesidades específicas</label>
                <textarea
                  rows="2"
                  placeholder="¿Interesado en convenio Brilla, bombeo de pozo, aires acondicionados, etc.?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitud a un Ingeniero por WhatsApp</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900">¡Solicitud Generada con Éxito!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Te estamos redirigiendo a nuestro canal de WhatsApp para atender tu cotización personalizada al instante.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 text-xs font-extrabold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
            >
              Cerrar Ventana
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
