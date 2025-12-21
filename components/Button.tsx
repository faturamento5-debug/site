
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  id?: string;
  text?: string;
  subtext?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  id,
  text = "SIM! QUERO GARANTIR MINHA CÓPIA", 
  subtext,
  onClick, 
  className = "",
  fullWidth = false
}) => {
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <button 
      id={id}
      onClick={handleClick}
      className={`
        group relative overflow-hidden rounded-lg bg-brand-green px-8 py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-white/20 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
      
      {/* A classe 'pointer-events-none' abaixo garante que o clique seja registrado no 'button' pai */}
      <div className="flex flex-col items-center justify-center text-center relative z-10 pointer-events-none">
        <div className="flex items-center gap-2 font-display text-xl md:text-2xl font-black uppercase tracking-wide text-white drop-shadow-md">
          {text}
          <ArrowRight className="h-6 w-6 md:h-8 md:w-8 animate-pulse" />
        </div>
        {subtext && (
          <span className="mt-1 text-sm font-medium text-green-50/90">
            {subtext}
          </span>
        )}
      </div>
    </button>
  );
};