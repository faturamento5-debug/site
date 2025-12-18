import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { Button } from './Button';

export const StickyScarcityBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Mostra a barra apenas após rolar 300px (para não atrapalhar a VSL de cara)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica do Contador Regressivo até o próximo Domingo às 23:59:59
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextSunday = new Date();
      
      // Ajusta para o próximo domingo
      const daysUntilSunday = 7 - now.getDay();
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(23, 59, 59, 999);

      const difference = nextSunday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-t border-red-900/50 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] animate-fade-in-up">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        
        {/* Texto de Aviso */}
        <div className="flex items-center gap-3 text-center md:text-left">
            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-red-900/20 border border-red-500/30 animate-pulse">
                <AlertTriangle className="text-red-500 w-5 h-5" />
            </div>
            <div>
                <p className="text-white font-bold text-sm md:text-base leading-tight">
                    <span className="text-brand-gold">ATENÇÃO:</span> Esse preço vai durar até Domingo!
                </p>
                <p className="text-xs text-gray-400 hidden md:block">
                    Garanta o valor promocional antes do reajuste.
                </p>
            </div>
        </div>

        {/* Contador (Sem Segundos) */}
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-white bg-black/40 px-4 py-2 rounded-lg border border-gray-800">
                <Clock size={16} className="text-brand-green animate-pulse" />
                <div className="flex gap-2 text-sm md:text-lg font-bold">
                    <div className="flex flex-col items-center leading-none">
                        <span>{String(timeLeft.days).padStart(2, '0')}</span>
                        <span className="text-[8px] text-gray-500 font-sans font-normal uppercase">Dias</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center leading-none">
                        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="text-[8px] text-gray-500 font-sans font-normal uppercase">Hr</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center leading-none">
                        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="text-[8px] text-gray-500 font-sans font-normal uppercase">Min</span>
                    </div>
                </div>
            </div>

            {/* CTA Compacto */}
            <Button 
                text="GARANTIR AGORA" 
                className="!py-2 !px-4 !text-sm md:!text-base whitespace-nowrap shadow-none"
            />
        </div>

      </div>
    </div>
  );
};