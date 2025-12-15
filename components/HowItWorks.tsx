import React from 'react';
import { UploadCloud, Cpu, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Input',
    desc: 'Carica un preventivo PDF o scrivi la tua richiesta in chat ("Devo comprare 15 licenze...").',
    icon: <UploadCloud className="w-8 h-8 text-black" />,
  },
  {
    id: 2,
    title: 'Process',
    desc: 'L\'AI estrae i dati, controlla il budget, verifica la compliance e prepara la RDA.',
    icon: <Cpu className="w-8 h-8 text-black" />,
  },
  {
    id: 3,
    title: 'Output',
    desc: 'RDA creata in SAP e pronta per l\'approvazione con un solo click.',
    icon: <CheckCircle2 className="w-8 h-8 text-black" />,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-raise-black relative overflow-hidden">
        {/* Background decorative line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-raise-gray to-transparent hidden lg:block -translate-y-12"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <span className="text-raise-neon font-mono text-sm uppercase tracking-widest mb-2 block">Workflow</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Semplice come <span className="text-raise-yellow">1, 2, 3</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="relative group text-center">
              {/* Number BG */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] font-bold text-white/5 select-none font-mono">
                {step.id}
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-raise-neon flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform shadow-[0_0_25px_rgba(204,255,0,0.4)]">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
