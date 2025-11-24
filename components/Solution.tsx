import React from 'react';
import { Lock, CheckCircle2, Star, Quote, BadgeCheck } from 'lucide-react';
import { BENEFITS } from '../constants';

export const Solution: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      age: "29 anos",
      text: "Em 5 dias, recebi 3x mais atenção feminina só mudando a postura de ombros e o olhar. É bizarro como funciona rápido.",
      highlight: "3x Mais Atenção"
    },
    {
      name: "Renato S.",
      age: "33 anos",
      text: "Minha namorada estava fria há meses. Apliquei o 'Detox' e ela disse que eu 'virei homem' de novo. O Código salvou meu namoro.",
      highlight: "Salvou o Namoro"
    },
    {
      name: "Matheus B.",
      age: "24 anos",
      text: "Sempre fui o 'amiguinho' das mulheres. Ontem, pela primeira vez, a garota mais gata do bar veio falar COMIGO.",
      highlight: "Fim da Friendzone"
    },
    {
      name: "Diogo L.",
      age: "35 anos",
      text: "Usando a técnica do silêncio, fechei um contrato que estava travado. Ninguém me interrompe mais em reuniões. Respeito total.",
      highlight: "Autoridade no Trabalho"
    },
    {
      name: "Igor T.",
      age: "27 anos",
      text: "Eu tremia pra falar oi. Hoje sustento o olhar de qualquer um. A sensação de não precisar agradar ninguém é libertadora.",
      highlight: "Confiança Blindada"
    }
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">O Mecanismo Único</span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mt-4 mb-6">
            Desintoxicação de Aprovação
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Mulheres têm um radar biológico. Elas não rejeitam você; elas rejeitam o <span className="text-red-500 font-bold">personagem fraco</span> que você criou para agradá-las. Para virar o jogo, você precisa matar esse personagem.
          </p>
        </div>

        {/* Main Benefit Box */}
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl mb-20">
            <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Apresento:</h3>
                    <h1 className="font-display text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-6">
                        O CÓDIGO DA<br/><span className="text-brand-gold">PRESENÇA</span>
                    </h1>
                    <p className="text-gray-300 mb-8 border-l-4 border-brand-green pl-4">
                        Um protocolo de 30 dias focado em remover as travas que te impedem de ser o homem que você nasceu para ser.
                    </p>
                    <div className="flex items-center gap-3 text-brand-gold bg-brand-gold/10 w-fit px-4 py-2 rounded-lg">
                        <Lock size={20} />
                        <span className="font-bold text-sm uppercase">Segredo Revelado</span>
                    </div>
                </div>
                <div className="bg-gray-800 p-8 md:p-12 border-l border-gray-700">
                    <h4 className="text-white font-bold text-xl mb-6">O que vai acontecer em 14 dias:</h4>
                    <ul className="space-y-6">
                        {BENEFITS.map((benefit, index) => (
                            <li key={index} className="flex gap-4">
                                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <h5 className="text-white font-bold">{benefit.title}</h5>
                                    <p className="text-sm text-gray-400 mt-1">{benefit.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* Social Proof Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gray-700"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Resultados Reais</span>
            <div className="h-px w-12 bg-gray-700"></div>
          </div>
          
          <h3 className="text-center font-display text-2xl md:text-3xl font-bold text-white mb-10">
            Eles mataram o "Bom Moço" e o <span className="text-brand-green">mundo respondeu:</span>
          </h3>

          {/* Flex Wrap Layout for 5 items centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="w-full md:w-[calc(33.33%-1rem)] lg:w-[calc(30%-1rem)] min-w-[300px] bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-brand-green/30 transition-colors relative group flex flex-col shadow-lg">
                {/* Green accent top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  <Quote size={20} className="text-gray-700 group-hover:text-brand-green/50 transition-colors" />
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow font-medium">
                  "{item.text}"
                </p>

                <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-auto">
                  <div>
                    <p className="text-white font-bold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.age}</p>
                  </div>
                  <div className="flex flex-col items-end">
                     <div className="flex items-center gap-1 bg-green-900/20 px-2 py-1 rounded border border-green-900/30 mb-1">
                        <BadgeCheck size={12} className="text-brand-green" />
                        <span className="text-[10px] font-bold text-brand-green uppercase tracking-wide">Verificado</span>
                     </div>
                     <span className="text-[10px] text-brand-gold font-bold">{item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};