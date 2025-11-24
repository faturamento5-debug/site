import React from 'react';
import { COPY } from '../constants';
import { Button } from './Button';
import { Check, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  // Split "10x de R$ 6,79" into parts for styling
  // COPY.price.installments is "10x de R$ 6,79"
  const installmentParts = COPY.price.installments.split('R$');
  const prefix = installmentParts[0]; // "10x de "
  const value = "R$" + installmentParts[1]; // "R$ 6,79"

  return (
    <section id="pricing" className="bg-brand-dark py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-dark to-brand-dark pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-lg relative z-10">
        
        <div className="bg-gray-900 rounded-2xl border-2 border-brand-gold/50 shadow-[0_0_50px_rgba(245,158,11,0.1)] overflow-hidden">
            {/* Header */}
            <div className="bg-brand-gold p-3 text-center">
                <span className="text-brand-dark font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                    <Sparkles size={16} />
                    Oferta Por Tempo Limitado
                </span>
            </div>

            <div className="p-8 md:p-10 text-center">
                <h3 className="text-gray-400 uppercase tracking-wide text-sm font-semibold mb-2">Preço Regular</h3>
                <div className="text-gray-500 text-xl line-through mb-6 font-medium decoration-red-500 decoration-2">
                    {COPY.price.full}
                </div>

                <h3 className="text-white font-display font-bold text-2xl mb-4">Comece hoje por apenas:</h3>
                
                {/* New Main Focus: Installments */}
                <div className="flex items-baseline justify-center gap-2 text-brand-green mb-2 flex-wrap">
                    <span className="text-2xl md:text-3xl font-bold text-brand-green/90">{prefix}</span>
                    <span className="text-6xl md:text-7xl font-black tracking-tighter shadow-green-500/20 drop-shadow-lg">{value}</span>
                </div>
                
                {/* Secondary: Cash Price */}
                <p className="text-gray-500 text-base font-medium mb-8">
                    ou <span className="text-gray-400 font-bold">{COPY.price.discounted}</span> à vista
                </p>

                <div className="space-y-4 mb-8 text-left bg-gray-950/50 p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center gap-3 text-gray-200">
                        <Check className="text-brand-gold w-5 h-5 flex-shrink-0" />
                        <span className="font-medium"> O Código da Presença</span>
                    </div>                    
                    <div className="flex items-center gap-3 text-gray-200">
                        <Check className="text-brand-gold w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">Acesso Vitalício e Atualizações</span>
                    </div>
                </div>

                <Button fullWidth text="RESGATAR OFERTA AGORA" />
                
                <p className="mt-4 text-xs text-gray-500">
                    *Pagamento único. Sem mensalidades. Acesso imediato.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};