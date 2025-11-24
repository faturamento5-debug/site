import React from 'react';
import { AlertTriangle, ChevronLeft, Video, Phone } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="bg-brand-gray py-20 border-t border-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Você conhece esse cenário?
          </h2>
          <div className="h-1 w-24 bg-brand-red mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            Você conhece uma mulher interessante. Você é educado, responde rápido, ouve os problemas dela, paga a conta e se esforça para ser o <span className="text-white font-bold">"cara perfeito"</span>.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Você sente que está indo bem. Até que chega a mensagem temida:
          </p>

          {/* Realistic iPhone Message UI */}
          <div className="mx-auto w-full max-w-[380px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden relative">
            {/* Top Notch & Status Bar Area */}
            <div className="bg-[#1c1c1e] pb-4 pt-8 px-4 border-b border-gray-800/50 relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                <div className="flex items-center justify-between text-blue-500">
                    <div className="flex items-center gap-1">
                        <ChevronLeft size={24} />
                        <span className="text-base">Voltar</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-1 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Ela" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold text-white">Rafaela</span>
                    </div>
                    <div className="flex items-center gap-4">
                         <Video size={22} />
                         <Phone size={20} />
                    </div>
                </div>
            </div>

            {/* Message Area */}
            <div className="bg-black p-4 min-h-[300px] flex flex-col gap-3 font-sans text-[15px]">
                <div className="text-center text-gray-500 text-[10px] font-medium my-2">Ontem 23:42</div>

                {/* Sent Message (The Nice Guy) */}
                <div className="self-end max-w-[85%]">
                    <div className="bg-[#0A84FF] text-white px-4 py-2 rounded-2xl rounded-tr-sm">
                        <p>Adorei o jantar hoje! Foi muito bom te ver. Pensa com calma sobre aquilo...😉</p>
                    </div>
                    <span className="text-[10px] text-gray-500 text-right block mt-1 mr-1">Lida</span>
                </div>

                {/* Typing Indicator */}
                <div className="self-start mb-1 ml-1">
                   <span className="text-gray-500 text-[10px]">Ela desativou as confirmações de leitura</span>
                </div>

                {/* Received Message (The Rejection) */}
                <div className="self-start max-w-[90%]">
                    <div className="bg-[#262628] text-white px-4 py-3 rounded-2xl rounded-tl-sm leading-snug">
                        <p>Oii Caio... Adorei o jantar, de verdade! Você é um doce, me ouviu como ninguém me ouve... Mas sendo super sincera? Você é incrível demais, tipo um irmão mais velho que eu nunca tive. Não quero estragar nossa amizade tentando algo a mais. Você vai fazer uma mulher muito feliz um dia! ❤️</p>
                    </div>
                </div>
            </div>

            {/* Bottom Input Area (Visual only) */}
            <div className="bg-[#1c1c1e] p-3 flex items-center gap-3 border-t border-gray-800/50">
                <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400">
                    <span className="text-lg">+</span>
                </div>
                <div className="flex-1 h-9 rounded-full border border-gray-700/50 px-3 flex items-center">
                    <span className="text-sm text-gray-500">iMessage</span>
                </div>
            </div>
          </div>


          <div className="mt-12 p-6 bg-red-950/20 border border-red-900/30 rounded-xl">
             <div className="flex gap-4">
                <AlertTriangle className="text-red-500 w-8 h-8 flex-shrink-0" />
                <div>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Enquanto isso, você vê caras que não fazem metade do seu esforço, que não são mais ricos nem mais bonitos que você, saindo com as mulheres que você desejava.
                    </p>
                    <p className="text-xl font-bold text-red-400">
                        A culpa não é sua aparência. A culpa não é da sua conta bancária.
                    </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};