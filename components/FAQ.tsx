import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-dark py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-white mb-12 font-display">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg transition-all duration-300 ${openIndex === index ? 'border-brand-gold/50 bg-gray-900' : 'border-gray-800 bg-transparent'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => toggle(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-gold' : 'text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-gold" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-300 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};