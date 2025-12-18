import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Modules } from './components/Modules';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { StickyScarcityBar } from './components/StickyScarcityBar';

const App: React.FC = () => {
  return (
    <div className="font-sans text-white antialiased selection:bg-brand-red selection:text-white pb-20 md:pb-0">
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <Pricing />
      <Guarantee />
      <FAQ />
      
      {/* Barra de Escassez Fixa */}
      <StickyScarcityBar />
      
      <footer className="bg-black py-8 border-t border-gray-900 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; {new Date().getFullYear()} O Código da Presença. Todos os direitos reservados.</p>
          <p>Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;