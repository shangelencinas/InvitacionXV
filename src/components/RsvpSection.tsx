import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Sparkles, MessageCircle, RefreshCw, UserCheck } from 'lucide-react';
import { RsvpData } from '../types';

export const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    attendance: 'attending' as 'attending' | 'declined',
    guestsCount: 1,
    phone: '',
    message: '',
    dietaryNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRsvp, setSubmittedRsvp] = useState<RsvpData | null>(null);

  // Load existing confirmation from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('xv_valentina_rsvp');
      if (saved) {
        setSubmittedRsvp(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Por favor ingresa tu nombre completo.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = 'Ingresa un número telefónico o WhatsApp válido.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const record: RsvpData = {
        ...formData,
        id: 'rsvp-' + Date.now(),
        submittedAt: new Date().toLocaleDateString('es-MX', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      try {
        localStorage.setItem('xv_valentina_rsvp', JSON.stringify(record));
      } catch {
        // Fallback
      }

      setSubmittedRsvp(record);
      setIsSubmitting(false);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedRsvp(null);
    setFormData({
      fullName: '',
      attendance: 'attending',
      guestsCount: 1,
      phone: '',
      message: '',
      dietaryNotes: '',
    });
  };

  const shareWhatsApp = () => {
    if (!submittedRsvp) return;
    const text = encodeURIComponent(
      `¡Hola Valentina! Acabo de confirmar mi asistencia para tus XV años 🎉\nNombre: ${submittedRsvp.fullName}\nAsistencia: ${
        submittedRsvp.attendance === 'attending' ? '¡Sí asistiré!' : 'Lamentablemente no podré asistir'
      }\nPases: ${submittedRsvp.guestsCount}\n${
        submittedRsvp.message ? `Mensaje: "${submittedRsvp.message}"\n` : ''
      }¡Nos vemos el 21 de Noviembre!`
    );
    window.open(`https://wa.me/526621234567?text=${text}`, '_blank');
  };

  return (
    <section id="rsvp" className="relative py-24 sm:py-32 bg-transparent border-t border-[#F472B6]/15 overflow-hidden">
      {/* Background glow in Pink & Purple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#F472B6]/15 via-[#C084FC]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-[#DB2777] font-semibold mb-3">
            Confirmación de Asistencia
          </p>
          <h2 className="text-3xl sm:text-5xl font-cinzel text-[#2D1047] mb-4">
            Acompáñame
          </h2>
          <p className="text-sm text-[#553569] font-normal mb-6">
            Por favor confirma tu lugar antes del <strong>1 de Noviembre de 2026</strong> para coordinar cada detalle de tu recepción.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F472B6]/40 bg-pink-50 text-[11px] uppercase tracking-wider text-[#DB2777] font-semibold shadow-xs">
            <span>Fecha límite: 1 de Noviembre 2026</span>
          </div>
        </div>

        {/* Form Card or Success Confirmation */}
        <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-[#F472B6]/30 p-6 sm:p-10 shadow-xl">
          {submittedRsvp ? (
            /* Confirmation Card */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-xs">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-widest text-emerald-600 font-semibold block mb-1">
                ¡Confirmación Exitosa!
              </span>

              <h3 className="text-2xl sm:text-3xl font-cinzel text-[#2D1047] mb-2 font-medium">
                Gracias, {submittedRsvp.fullName}
              </h3>

              <p className="text-sm font-normal text-[#553569] max-w-md mx-auto mb-8">
                Tu respuesta ha quedado registrada correctamente. Nos emociona mucho compartir este momento contigo.
              </p>

              {/* Digital Pass Card */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 to-purple-50/50 border border-[#F472B6]/40 text-left mb-8 relative shadow-sm">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3 mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#DB2777] font-semibold block">
                      Pase Digital de Invitado
                    </span>
                    <h4 className="text-base font-cinzel text-[#2D1047] font-medium">
                      {submittedRsvp.fullName}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-100/70 border border-[#F472B6]/40 flex items-center justify-center text-[#DB2777]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div>
                    <span className="text-[#7E578F] block text-[11px]">Estado:</span>
                    <strong className="text-[#DB2777]">
                      {submittedRsvp.attendance === 'attending' ? 'Confirmado ✓' : 'Declinado'}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#7E578F] block text-[11px]">Pases Reservados:</span>
                    <strong className="text-[#2D1047]">{submittedRsvp.guestsCount} {submittedRsvp.guestsCount === 1 ? 'persona' : 'personas'}</strong>
                  </div>
                  <div>
                    <span className="text-[#7E578F] block text-[11px]">Fecha:</span>
                    <span className="text-[#4C3259]">21 Nov 2026 · 7:00 PM</span>
                  </div>
                  <div>
                    <span className="text-[#7E578F] block text-[11px]">Lugar:</span>
                    <span className="text-[#4C3259]">Jardín Imperial</span>
                  </div>
                </div>

                {submittedRsvp.message && (
                  <div className="pt-3 border-t border-purple-100 text-xs">
                    <span className="text-[#7E578F] block text-[11px] mb-1">Dedicatoria:</span>
                    <p className="italic text-[#4C2663]">&ldquo;{submittedRsvp.message}&rdquo;</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={shareWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Confirmación a WhatsApp</span>
                </button>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#2D1047] bg-white hover:text-[#DB2777] border border-purple-200 transition-all cursor-pointer shadow-xs"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Modificar Datos</span>
                </button>
              </div>
            </div>
          ) : (
            /* RSVP Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2D1047] font-semibold mb-2">
                  Nombre Completo <span className="text-[#DB2777]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ej. Familia Rodríguez Hernández o Laura Gómez"
                  className={`w-full px-4 py-3 rounded-xl bg-pink-50/40 border ${
                    errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-purple-200 focus:border-[#DB2777]'
                  } text-[#2D1047] placeholder-slate-400 text-sm focus:outline-none transition-colors`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>
                )}
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2D1047] font-semibold mb-2">
                  ¿Podrás asistir? <span className="text-[#DB2777]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      formData.attendance === 'attending'
                        ? 'bg-pink-50/80 border-[#DB2777] text-[#2D1047] shadow-xs'
                        : 'bg-white border-purple-200 text-[#553569] hover:border-[#F472B6]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      checked={formData.attendance === 'attending'}
                      onChange={() => setFormData({ ...formData, attendance: 'attending' })}
                      className="accent-[#EC4899] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs font-semibold">Sí, asistiré con gusto</span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      formData.attendance === 'declined'
                        ? 'bg-purple-50/80 border-[#7E22CE] text-[#2D1047] shadow-xs'
                        : 'bg-white border-purple-200 text-[#553569] hover:border-[#F472B6]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      checked={formData.attendance === 'declined'}
                      onChange={() => setFormData({ ...formData, attendance: 'declined' })}
                      className="accent-[#7E22CE] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs font-semibold">Lamentablemente no podré asistir</span>
                  </label>
                </div>
              </div>

              {/* Number of guests (only if attending) */}
              {formData.attendance === 'attending' && (
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#2D1047] font-semibold mb-2">
                    Número de pases / acompañantes:
                  </label>
                  <div className="flex items-center gap-2 max-w-full overflow-x-auto pb-1 no-scrollbar">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setFormData({ ...formData, guestsCount: num })}
                        className={`w-10 sm:w-11 h-10 sm:h-11 shrink-0 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                          formData.guestsCount === num
                            ? 'bg-gradient-to-r from-[#F472B6] to-[#9333EA] text-white shadow-md scale-105'
                            : 'bg-white border border-purple-200 text-[#2D1047] hover:border-[#DB2777]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <span className="block text-[11px] text-[#7E22CE] mt-1 font-medium">
                    Indica cuántas personas asistirán contigo.
                  </span>
                </div>
              )}

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2D1047] font-semibold mb-2">
                  Teléfono / WhatsApp <span className="text-[#DB2777]">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ej. 662 123 4567"
                  className={`w-full px-4 py-3 rounded-xl bg-pink-50/40 border ${
                    errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-purple-200 focus:border-[#DB2777]'
                  } text-[#2D1047] placeholder-slate-400 text-sm focus:outline-none transition-colors`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>
                )}
              </div>

              {/* Dietary notes or allergies */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2D1047] font-semibold mb-2">
                  Restricciones alimenticias o alergias (opcional)
                </label>
                <input
                  type="text"
                  value={formData.dietaryNotes}
                  onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                  placeholder="Ej. Vegetariano, celíaco, alergia a mariscos..."
                  className="w-full px-4 py-3 rounded-xl bg-pink-50/40 border border-purple-200 focus:border-[#DB2777] text-[#2D1047] placeholder-slate-400 text-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Message to Valentina */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2D1047] font-semibold mb-2">
                  Mensaje o Dedicatoria para Valentina (opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escríbele un deseo especial para esta nueva etapa..."
                  className="w-full px-4 py-3 rounded-xl bg-pink-50/40 border border-purple-200 focus:border-[#DB2777] text-[#2D1047] placeholder-slate-400 text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#9333EA] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_4px_25px_rgba(236,72,153,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin text-white" />
                    <span>Guardando tu confirmación...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>CONFIRMAR ASISTENCIA</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
