import React from 'react';
import { COPY } from '../constants';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-full flex items-center justify-center border-4 border-brand-green shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-brand-green" />
                </div>
            </div>

            <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
                    {COPY.guaranteeTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                    {COPY.guaranteeText}
                </p>
                <p className="mt-4 text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Risco Zero • Reembolso Automático
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};