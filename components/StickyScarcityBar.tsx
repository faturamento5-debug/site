import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { Button } from './Button';
import { CHECKOUT_URL } from '../constants';

export const StickyScarcityBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      
      endOfDay.setHours(23, 59, 59, 999);

      let difference = endOfDay.getTime() - now.getTime();

      if (difference < 0) {
        difference = 0;
      }

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); 

    return () => clearInterval(timer);
  }, []);

  const handleCheckout = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-t border-red-900/50 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] animate-fade-in-up pb-safe-area">
      <div className="container mx-auto px-3 py-2 md:py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
        
        <div className="flex items-center justify-center md:justify-start gap-2 text-center md:text-left w-full md:w-auto">
            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-red-900/20 border border-red-500/30 animate-pulse">
                <AlertTriangle className="text-red-500 w-5 h-5" />
            </div>
            <div>
                <p className="text-white font-bold text-[10px] sm:text-xs md:text-base leading-tight">
                    <span className="text-brand-gold mr-1">ATENÇÃO:</span> 
                    Preço válido somente até <span className="text-red-500 underline decoration-red-500/30 underline-offset-4 font-black">HOJE às 23:59!</span>
                </p>
                <p className="text-xs text-gray-400 hidden md:block">
                    O sistema encerrará as inscrições promocionais automaticamente.
                </p>
            </div>
        </div>

        <div className="flex items-center justify-between gap-2 w-full md:w-auto">
            
            <div className="flex flex-shrink-0 items-center gap-1.5 font-mono text-white bg-black/60 px-2 py-1.5 md:px-4 md:py-2 rounded-lg border border-red-900/30">
                <Clock size={14} className="text-red-500 animate-pulse hidden xs:block" />
                <div className="flex gap-1 md:gap-2 text-sm md:text-lg font-bold text-red-100 tabular-nums">
                    <div className="flex flex-col items-center leading-none">
                        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center leading-none">
                        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center leading-none">
                        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>

            <Button 
                id="btn-sticky-cta"
                text="GARANTIR AGORA" 
                className="!py-2 !px-3 !text-xs sm:!text-sm md:!text-base whitespace-nowrap shadow-none bg-red-600 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] flex-1 md:flex-none justify-center"
                onClick={handleCheckout}
            />
        </div>

      </div>
    </div>
  );
};