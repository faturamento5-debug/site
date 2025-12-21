import React from 'react';
import { COPY, CHECKOUT_URL } from '../constants';
import { Button } from './Button';
import { Check, Sparkles, TrendingUp, AlertCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  const installmentParts = COPY.price.installments.split('R$');
  const prefix = installmentParts[0]; 
  const value = "R$" + installmentParts[1];

  const handleCheckout = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  return (
    <section id="pricing" className="bg-brand-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-dark to-brand-dark pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-lg relative z-10">
        
        <div className="mb-4 bg-red-950/40 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 animate-pulse-slow">
            <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
                <p className="text-red-200 text-sm font-bold uppercase tracking-wide mb-1">
                    Aviso de Reajuste
                </p>
                <p className="text-xs text-red-200/70">
                    Devido à alta demanda, o preço será reajustado automaticamente às <span className="font-bold text-white bg-red-500/20 px-1 rounded">23:59 de HOJE</span>.
                </p>
            </div>
        </div>

        <div className="bg-gray-900 rounded-2xl border-2 border-brand-gold/50 shadow-[0_0_50px_rgba(245,158,11,0.1)] overflow-hidden relative">
            
            <div className="absolute -right-12 top-6 rotate-45 bg-red-600 text-white text-[10px] font-bold py-1 w-40 text-center shadow-lg z-20">
                ÚLTIMOS LOTES
            </div>

            <div className="bg-brand-gold p-3 text-center relative z-10">
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
                
                <div className="flex items-baseline justify-center gap-2 text-brand-green mb-2 flex-wrap">
                    <span className="text-2xl md:text-3xl font-bold text-brand-green/90">{prefix}</span>
                    <span className="text-6xl md:text-7xl font-black tracking-tighter shadow-green-500/20 drop-shadow-lg">{value}</span>
                </div>
                
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
                    <div className="flex items-center gap-3 text-gray-200">
                        <TrendingUp className="text-brand-red w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-brand-red/90 font-bold">Preço congela em sua conta</span>
                    </div>
                </div>

                <Button 
                    id="btn-pricing-cta"
                    fullWidth 
                    text="RESGATAR OFERTA AGORA" 
                    onClick={handleCheckout}
                />
                
                <p className="mt-4 text-xs text-gray-500">
                    *Pagamento único. Sem mensalidades. Acesso imediato.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};