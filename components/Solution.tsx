import React, { useState, useEffect, useRef } from 'react';
import { Lock, CheckCircle2, Star, Quote, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { BENEFITS } from '../constants';

export const Solution: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      age: "29 anos",
      text: "Em 5 dias, recebi 3x mais atenção das mulheres só mudando a postura de ombros e o olhar. É bizarro como funciona rápido.",
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
      text: "Sempre fui o 'amiguinho' das mulheres. Ontem, pela primeira vez, uma garota muito gata do bar veio falar COMIGO.",
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
      text: "Eu tremia pra falar oi. Hoje sustento o olhar de qualquer uma. A sensação de não precisar agradar ninguém é libertadora.",
      highlight: "Confiança Blindada"
    },
    {
      name: "Gabriel F.",
      age: "31 anos",
      text: "O capítulo sobre 'Pisar em Ovos' abriu meus olhos. Parei de ser o capacho e agora ela que me procura rs.",
      highlight: "Inversão de Jogo"
    },
    {
      name: "Lucas V.",
      age: "22 anos",
      text: "Achei que era por ser baixo, mas era minha energia. O Código me deu a presença que eu não tinha. Mudei da água pro vinho.",
      highlight: "Presença Magnética"
    },
    {
      name: "Rodrigo P.",
      age: "40 anos",
      text: "Divorciado aos 40, achei que tinha acabado. O livro me ensinou a me valorizar de novo. O respeito das pessoas mudou na hora.",
      highlight: "Recomeço Forte"
    },
    {
      name: "Samuel K.",
      age: "26 anos",
      text: "Técnica de contato visual matadora. Funciona até em ambiente de festa barulhento. Você não precisa falar nada, elas sentem.",
      highlight: "Tensão Sexual"
    },
    {
      name: "Henrique J.",
      age: "29 anos",
      text: "Direto ao ponto, sem enrolação teórica de PNL chata. São tarefas práticas que dão resultado se aplicadas. Vale cada centavo.",
      highlight: "Prático e Direto"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // Calcula o máximo de slides baseado no tamanho da tela
  // No desktop mostramos 3, então o índice máximo é testimonials.length - 3
  // No mobile mostramos 1, então o índice máximo é testimonials.length - 1
  const getMaxIndex = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile ? testimonials.length - 1 : testimonials.length - 3;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= getMaxIndex() ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? getMaxIndex() : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = window.setInterval(nextSlide, 6000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, currentIndex]);

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
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl mb-24">
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

        {/* Testimonials Carousel Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gray-700"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Resultados Reais</span>
            <div className="h-px w-12 bg-gray-700"></div>
          </div>
          
          <h3 className="text-center font-display text-2xl md:text-3xl font-bold text-white mb-10">
            Eles mataram o "Bom Moço" e o <span className="text-brand-green">mundo respondeu:</span>
          </h3>

          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Carousel Outer Wrapper - Hidden Overflow */}
            <div className="overflow-hidden">
                {/* 
                  O Segredo da Simetria: 
                  - Usamos -mx-3 no container pai para compensar o px-3 dos filhos.
                  - O translateX agora usa 100% no mobile e 33.333% no desktop fixos.
                */}
                <div 
                    className="flex transition-transform duration-700 ease-in-out -mx-3"
                    style={{ transform: `translateX(-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.3333)}%)` }}
                >
                    {testimonials.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="w-full md:w-1/3 flex-shrink-0 px-3"
                        >
                            <div className="bg-gray-900/50 border border-gray-800 p-6 md:p-8 rounded-xl hover:border-brand-green/30 transition-colors relative group/card flex flex-col shadow-lg h-full">
                                {/* Green accent top */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-30 group-hover/card:opacity-100 transition-opacity"></div>
                                
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                                        ))}
                                    </div>
                                    <Quote size={20} className="text-gray-700 group-hover/card:text-brand-green/50 transition-colors" />
                                </div>
                                
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow font-medium italic">
                                    "{item.text}"
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-800 pt-6 mt-auto">
                                    <div className="min-w-0">
                                        <p className="text-white font-bold text-sm truncate">{item.name}</p>
                                        <p className="text-xs text-gray-500">{item.age}</p>
                                    </div>
                                    <div className="flex flex-col items-end flex-shrink-0 ml-2">
                                        <div className="flex items-center gap-1 bg-green-900/20 px-2 py-1 rounded border border-green-900/30 mb-1">
                                            <BadgeCheck size={10} className="text-brand-green" />
                                            <span className="text-[9px] font-bold text-brand-green uppercase tracking-wide">Verificado</span>
                                        </div>
                                        <span className="text-[9px] text-brand-gold font-bold whitespace-nowrap">{item.highlight}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (Desktop Only) - Aligned outside for better look */}
            <button 
                onClick={prevSlide}
                className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 border border-gray-800 rounded-full items-center justify-center text-white hover:bg-brand-dark hover:border-brand-green transition-all z-20 shadow-xl"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextSlide}
                className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 border border-gray-800 rounded-full items-center justify-center text-white hover:bg-brand-dark hover:border-brand-green transition-all z-20 shadow-xl"
                aria-label="Próximo"
            >
                <ChevronRight size={24} />
            </button>

            {/* Pagination Dots - Dynamic indicators */}
            <div className="flex justify-center gap-2 mt-10">
                {Array.from({ length: getMaxIndex() + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-brand-green' : 'w-2 bg-gray-700 hover:bg-gray-500'}`}
                        aria-label={`Ir para depoimento ${idx + 1}`}
                    />
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};