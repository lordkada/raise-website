import React from 'react';

import { Hero } from '../components/Hero';
import { ProblemSolution } from '../components/ProblemSolution';
import { HowItWorks } from '../components/HowItWorks';
import { BentoFeatures } from '../components/BentoFeatures';
import { BlogSection } from '../components/BlogSection';

export const Home: React.FC = () => {
  return (
    <div className="bg-raise-black text-white selection:bg-raise-neon selection:text-black">
      <Hero title="RAISE | AI RDA Copilot" subtitle="Trasforma la creazione di Richieste d'Acquisto da onere burocratico a vantaggio competitivo." />
      <ProblemSolution />
      <HowItWorks />
      <BentoFeatures />
      <BlogSection />
    </div>
  );
};
