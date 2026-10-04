import React, { useState } from 'react';
import { Gift, CreditCard, Mail, ExternalLink, Check, Copy } from 'lucide-react';

export const GiftRegistry: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stores' | 'envelope' | 'transfer'>('stores');
  const [copiedClabe, setCopiedClabe] = useState(false);

  const clabeNumber = "012 180 0154896234 1";

  const handleCopyClabe = () => {
    navigator.clipboard.writeText("01218001548962341");
    setCopiedClabe(true);
    setTimeout(() => setCopiedClabe(false), 2500);
  };

  return (
    <section className="relative py-24 bg-transparent border-t border-[#F472B6]/15 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-pink-50 border border-[#F472B6]/40 text-[#DB2777] mb-4 shadow-xs">
            <Gift className="w-5 h-5" />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#DB2777] font-semibold mb-3">
            Mesa de Regalos
          </p>
          <h2 className="text-3xl sm:text-5xl font-cinzel text-[#2D1047] mb-4">
            Tu presencia es nuestro mejor regalo
          </h2>
          <p className="text-sm text-[#553569] font-normal max-w-lg mx-auto">
            Si deseas tener un detalle conmigo, puedes consultar nuestra mesa de regalos en las siguientes opciones:
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-purple-50/70 border border-[#C084FC]/30 rounded-2xl w-full max-w-md mx-auto mb-8 shadow-xs">
          <button
            onClick={() => setActiveTab('stores')}
            className={`flex-1 py-2 px-1.5 sm:px-3 text-[11px] sm:text-xs uppercase tracking-normal sm:tracking-wider font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'stores'
                ? 'bg-gradient-to-r from-[#F472B6] to-[#9333EA] text-white shadow-md'
                : 'text-[#6B4D7B] hover:text-[#DB2777]'
            }`}
          >
            Tiendas
          </button>
          <button
            onClick={() => setActiveTab('envelope')}
            className={`flex-1 py-2 px-1.5 sm:px-3 text-[11px] sm:text-xs uppercase tracking-normal sm:tracking-wider font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'envelope'
                ? 'bg-gradient-to-r from-[#F472B6] to-[#9333EA] text-white shadow-md'
                : 'text-[#6B4D7B] hover:text-[#DB2777]'
            }`}
          >
            Lluvia de Sobres
          </button>
          <button
            onClick={() => setActiveTab('transfer')}
            className={`flex-1 py-2 px-1.5 sm:px-3 text-[11px] sm:text-xs uppercase tracking-normal sm:tracking-wider font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'transfer'
                ? 'bg-gradient-to-r from-[#F472B6] to-[#9333EA] text-white shadow-md'
                : 'text-[#6B4D7B] hover:text-[#DB2777]'
            }`}
          >
            Transferencia
          </button>
        </div>

        {/* Tab Content */}
        <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-[#F472B6]/30 p-8 shadow-lg">
          {activeTab === 'stores' && (
            <div className="space-y-4">
              {/* Liverpool */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-pink-50/40 border border-purple-100 gap-4">
                <div>
                  <h4 className="text-base font-cinzel text-[#2D1047] mb-1 font-medium">
                    Liverpool · Mesa de Regalos
                  </h4>
                  <p className="text-xs text-[#553569]">
                    Número de Evento: <span className="text-[#DB2777] font-mono font-semibold">51289472</span>
                  </p>
                </div>
                <a
                  href="https://mesaderegalos.liverpool.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#F472B6] to-[#EC4899] hover:brightness-110 shadow-sm transition-all"
                >
                  <span>VER MESA DE REGALOS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* El Palacio de Hierro */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-pink-50/40 border border-purple-100 gap-4">
                <div>
                  <h4 className="text-base font-cinzel text-[#2D1047] mb-1 font-medium">
                    El Palacio de Hierro
                  </h4>
                  <p className="text-xs text-[#553569]">
                    Código de Festejada: <span className="text-[#7E22CE] font-mono font-semibold">PH-984021</span>
                  </p>
                </div>
                <a
                  href="https://www.elpalaciodehierro.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#2D1047] bg-white hover:text-[#DB2777] border border-[#C084FC]/40 transition-colors shadow-xs"
                >
                  <span>Consultar Tienda</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Amazon */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-pink-50/40 border border-purple-100 gap-4">
                <div>
                  <h4 className="text-base font-cinzel text-[#2D1047] mb-1 font-medium">
                    Amazon Wishlist
                  </h4>
                  <p className="text-xs text-[#553569]">
                    Mesa de Quince Años de Valentina Sofía
                  </p>
                </div>
                <a
                  href="https://www.amazon.com.mx/baby-reg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#2D1047] bg-white hover:text-[#DB2777] border border-[#C084FC]/40 transition-colors shadow-xs"
                >
                  <span>Ver en Amazon</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {activeTab === 'envelope' && (
            <div className="text-center py-6 px-4">
              <div className="w-16 h-16 rounded-full bg-pink-50 border border-[#F472B6]/40 flex items-center justify-center mx-auto mb-4 text-[#DB2777] shadow-xs">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-cinzel text-[#2D1047] mb-3 font-medium">
                Lluvia de Sobres
              </h4>
              <p className="text-sm font-serif italic text-[#4C2663] max-w-md mx-auto mb-4 leading-relaxed">
                &ldquo;Si deseas hacernos un presente en efectivo, dispondremos de un buzón especial en la recepción del salón para depositar tu sobre con buenos deseos.&rdquo;
              </p>
              <p className="text-xs text-[#7E22CE] font-medium">
                ¡Gracias de corazón por acompañarme en este sueño!
              </p>
            </div>
          )}

          {activeTab === 'transfer' && (
            <div className="py-4">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-[#DB2777]" />
                <h4 className="text-lg font-cinzel text-[#2D1047] font-medium">
                  Datos para Transferencia Electrónica
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
                <div className="p-4 rounded-2xl bg-pink-50/40 border border-purple-100">
                  <span className="text-[#7E578F] block mb-1">Banco:</span>
                  <strong className="text-[#2D1047] text-sm">BBVA México</strong>
                </div>
                <div className="p-4 rounded-2xl bg-pink-50/40 border border-purple-100">
                  <span className="text-[#7E578F] block mb-1">Titular:</span>
                  <strong className="text-[#2D1047] text-sm">María Fernanda Hernández (Mamá)</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/50 border border-[#F472B6]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-[#7E578F] text-xs block mb-0.5">CLABE Interbancaria:</span>
                  <span className="text-[#DB2777] font-mono text-sm sm:text-base font-semibold tracking-wider">
                    {clabeNumber}
                  </span>
                </div>

                <button
                  onClick={handleCopyClabe}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#F472B6]/50 text-xs text-[#2D1047] hover:text-[#DB2777] transition-all cursor-pointer font-medium shadow-xs"
                >
                  {copiedClabe ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">¡CLABE Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#DB2777]" />
                      <span>Copiar CLABE</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
