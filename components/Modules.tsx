import React from 'react';
import { MODULES } from '../constants';
import { BookOpen } from 'lucide-react';

export const Modules: React.FC = () => {
  return (
    <section className="bg-brand-gray py-20 border-y border-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-white">
                O Caminho da Transformação
            </h2>
            <p className="text-gray-400 mt-4">
                Sem enrolação. Leituras de 5 à 8 minutos + 1 Tarefa Prática por dia.
            </p>
        </div>

        <div className="space-y-8">
            {MODULES.map((module, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0">
                    {/* Timeline Line for Desktop */}
                    <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2"></div>
                    
                    <div className={`md:flex items-center justify-between gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Content Box */}
                        <div className="md:w-[45%] bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors shadow-lg relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-brand-dark text-brand-gold text-xs font-bold px-3 py-1 rounded border border-brand-gold/20">
                                    {module.days}
                                </span>
                                <BookOpen size={18} className="text-gray-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                            <p className="text-sm text-gray-400 mb-4 italic">"{module.goal}"</p>
                            <ul className="space-y-2">
                                {module.items.slice(0, 4).map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                                {module.items.length > 4 && (
                                    <li className="text-xs text-gray-500 mt-2">E muito mais...</li>
                                )}
                            </ul>
                        </div>

                        {/* Center Connector */}
                        <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-green z-20 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                             <span className="text-brand-green font-bold text-xs">{idx + 1}</span>
                        </div>

                        {/* Empty spacer for flex layout */}
                        <div className="md:w-[45%] hidden md:block"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};