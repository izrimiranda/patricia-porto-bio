import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, MapPin, User, MessageSquare, Tag } from 'lucide-react';
import { EventType } from '../types';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: EventType | null;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, initialType }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    date: '',
    details: '',
    eventType: '' as EventType | ''
  });

  useEffect(() => {
    if (initialType) {
      setFormData(prev => ({ ...prev, eventType: initialType }));
    } else {
      // Reset event type if opening without a specific type, or keep it if user selected inside
      // Decided to reset only if needed, but for now let's keep it simple.
    }
  }, [initialType, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.eventType) {
      alert("Por favor, selecione o tipo de evento.");
      return;
    }

    // Format message for WhatsApp
    const message = `Olá! Me chamo *${formData.name}*.\nGostaria de solicitar um orçamento para um evento de *${formData.eventType}*.\n\n📍 Cidade: ${formData.city}\n📅 Data Prevista: ${formData.date}\n📝 Detalhes: ${formData.details}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/553192282543?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">

        {/* Header */}
        <div className="bg-nude-100 p-6 flex justify-between items-center border-b border-stone-100">
          <h2 className="text-xl font-semibold text-stone-800">
            Solicitar Orçamento
          </h2>
          <button onClick={onClose} className="text-stone-500 hover:text-stone-800 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-sm text-stone-500 mb-4">
            Preencha as informações abaixo para iniciar o atendimento via WhatsApp.
          </p>

          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-600 uppercase tracking-wide ml-1">Tipo de Evento</label>
            <div className="relative">
              <Tag className="absolute left-3 top-3 text-stone-400" size={18} />
              <select
                required
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all appearance-none text-stone-700"
              >
                <option value="" disabled>Selecione uma opção</option>
                <option value={EventType.CHURCH}>Igreja / Culto</option>
                <option value={EventType.CITY_HALL}>Prefeitura / Evento Público</option>
                <option value="Casamento">Casamento</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-600 uppercase tracking-wide ml-1">Seu Nome / Responsável</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-stone-400" size={18} />
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Pr. João Silva"
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-stone-600 uppercase tracking-wide ml-1">Cidade/UF</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-stone-400" size={18} />
                <input
                  required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ex: Belo Horizonte - MG"
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-stone-600 uppercase tracking-wide ml-1">Data Prevista</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-stone-400" size={18} />
                <input
                  required
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all text-stone-600"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-600 uppercase tracking-wide ml-1">Detalhes Adicionais</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-stone-400" size={18} />
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Ex: Congresso de jovens, festividade..."
                rows={3}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-stone-200 active:scale-95"
          >
            <span>Enviar para WhatsApp</span>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventModal;