import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-raise-black">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-raise-neon/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-raise-neon" />
            <span className="text-sm font-medium text-gray-300">AI RDA Copilot</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Eleva i tuoi <br />
            acquisti con <span className="text-transparent bg-clip-text bg-gradient-to-r from-raise-neon to-emerald-400">l'Intelligenza Artificiale</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Trasforma la creazione di Richieste d'Acquisto da onere burocratico a vantaggio competitivo. <br className="hidden md:block"/>
            <span className="text-white font-semibold">Zero moduli. Zero errori. 100% Compliance.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 bg-raise-neon rounded-lg font-bold text-raise-black text-lg hover:bg-raise-yellow transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.4)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Inizia Ora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 rounded-lg font-bold text-white text-lg hover:bg-white/5 transition-all">
              Guarda il Video
            </button>
          </div>
          
          <div className="pt-6 flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-500 font-mono">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-raise-neon" /> 70% più veloce
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-raise-neon" /> SAP Certified
            </div>
          </div>
        </div>

        {/* Visual Content - Abstract App Mockup */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center animate-float">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 border-4 border-raise-neon rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-12 h-12 bg-raise-yellow rounded-lg rotate-12 opacity-80"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>

          {/* Phone Mockup Representation */}
          <div className="relative w-[320px] h-[640px] bg-raise-gray rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="h-14 bg-raise-dark flex items-center px-6 border-b border-white/5">
              <div className="w-20 h-4 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Chat UI */}
            <div className="flex-1 p-6 space-y-4 font-sans text-sm relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-raise-gray/90 z-10"></div>
              
              {/* Message AI */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-raise-neon flex items-center justify-center text-black font-bold text-xs">AI</div>
                <div className="bg-raise-dark p-3 rounded-2xl rounded-tl-none border border-white/10 text-gray-200 max-w-[80%]">
                  Ciao Marco! Ho analizzato il preventivo.
                </div>
              </div>

              {/* Message User */}
              <div className="flex gap-3 flex-row-reverse">
                 <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-xs">M</div>
                <div className="bg-raise-neon p-3 rounded-2xl rounded-tr-none text-raise-black font-medium max-w-[80%]">
                  Il totale è corretto?
                </div>
              </div>

              {/* Message AI Complex */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-raise-neon flex items-center justify-center text-black font-bold text-xs">AI</div>
                <div className="bg-raise-dark p-3 rounded-2xl rounded-tl-none border border-white/10 text-gray-200 max-w-[90%] space-y-2">
                  <p>Sì, €1.200 per 15 licenze.</p>
                  <div className="bg-black/50 p-2 rounded border border-raise-neon/30 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-raise-neon">Budget OK</span>
                  </div>
                  <p>Creo la RDA #49201 in SAP?</p>
                </div>
              </div>
               
               {/* Floating Confirm Button */}
               <div className="absolute bottom-8 left-6 right-6 z-20">
                  <button className="w-full bg-white text-black py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
                    Conferma Creazione
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ShieldCheck(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
