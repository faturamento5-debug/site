
import React, { useState } from 'react';
import { COPY } from '../constants';
import { Button } from './Button';
import { ShieldCheck, Users, Lock } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const videoSrc = `https://iframe.mediadelivery.net/embed/567919/3b790dd5-546b-4c5d-8605-b4e3aa238170?autoplay=true&loop=false&muted=false&preload=true&responsive=true`;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-dark pb-12 pt-24 md:pt-32">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1505535162959-9bbcb4fe2271?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark pointer-events-none"></div>

      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center py-6 md:py-8">
        <div className="flex items-center gap-3 border border-white/5 bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <Lock className="w-4 h-4 text-brand-gold" />
            <div className="flex items-baseline gap-1.5 select-none">
                <span className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase font-sans">O Código da</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold font-display font-black tracking-tighter text-base md:text-lg uppercase drop-shadow-sm">
                    Presença
                </span>
            </div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 text-center z-10 max-w-6xl">
        <div className="mb-8 inline-flex items-center rounded-full border border-red-900/50 bg-red-950/30 px-5 py-2 backdrop-blur-sm shadow-[0_0_15px_rgba(220,38,38,0.2)]">
          <span className="mr-2 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-red-400">
            Atenção: Para homens que cansaram de ser ignorados
          </span>
        </div>

        <h1 className="relative font-display text-3xl md:text-5xl lg:text-7xl font-black leading-tight mb-8 tracking-tight">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-red/10 blur-[80px] rounded-full pointer-events-none"></div>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 drop-shadow-sm">
            Por que você faz tudo <span className="text-white italic">"certo"</span>
          </span>
          <span className="block mt-2 md:mt-4 relative">
             <span className="absolute inset-0 text-red-600 blur-[20px] opacity-40 select-none hidden md:block" aria-hidden="true">
               e ela escolhe o cara que não faz nada?
             </span>
             <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_2px_15px_rgba(220,38,38,0.6)]">
               e ela escolhe o cara que não faz nada?
             </span>
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
          {COPY.subheadline}
        </p>

        <div 
            className="relative mx-auto mb-10 w-full max-w-5xl aspect-video overflow-hidden rounded-xl border border-gray-800 bg-black shadow-2xl shadow-brand-red/10 group"
        >
            {!isVideoActive ? (
              <div 
                id="btn-vsl-play"
                className="absolute inset-0 cursor-pointer w-full h-full"
                onClick={() => setIsVideoActive(true)}
              >
                <div className="pointer-events-none w-full h-full relative">
                    <img 
                        src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" 
                        alt="Capa do Vídeo" 
                        className="h-full w-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-red/30 rounded-full animate-ping"></div>
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-red rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(220,38,38,0.6)] group-hover:scale-110 transition-transform duration-300 z-10">
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent"></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                        <p className="text-sm md:text-base font-bold text-white uppercase tracking-wider drop-shadow-md bg-black/50 inline-block px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
                        🔊 Ver vídeo agora (2 min)
                        </p>
                    </div>
                </div>
              </div>
            ) : (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={videoSrc}
                loading="eager" 
                title="Vídeo de Vendas"
                style={{border: 'none'}}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                allowFullScreen={true}
              ></iframe>
            )}
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button 
             id="btn-hero-cta"
             text={COPY.cta}
             subtext="Acesso Imediato + Garantia de 7 Dias"
             className="md:w-[400px] shadow-xl shadow-green-900/20"
          />
          
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-brand-gold" />
              <span>+1.200 Alunos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};