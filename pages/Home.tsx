import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemSolution } from '../components/ProblemSolution';
import { HowItWorks } from '../components/HowItWorks';
import { BentoFeatures } from '../components/BentoFeatures';
import { BlogSection } from '../components/BlogSection';

export const Home: React.FC = () => {
  return (
    <div className="bg-raise-black text-white selection:bg-raise-neon selection:text-black">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <BentoFeatures />
      <BlogSection />
    </div>
  );
};
