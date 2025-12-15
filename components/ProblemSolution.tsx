import React from 'react';
import { XCircle, CheckCircle, Clock, AlertTriangle, FileSpreadsheet, MessageSquare } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-raise-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Procurement: <span className="text-gray-500 line-through decoration-red-500">Burocrazia</span> vs Evoluzione</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Perché sprecare ore su fogli Excel e interfacce obsolete quando puoi semplicemente chiedere?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* The Old Way */}
          <div className="relative group">
            <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full"></div>
            <div className="relative bg-raise-gray border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors">
              <div className="absolute -top-4 -left-4 bg-raise-gray border border-red-500/50 p-2 rounded-lg text-red-500 font-bold text-sm uppercase tracking-wider shadow-lg">
                Il Vecchio Procurement
              </div>
              <ul className="space-y-6 mt-4">
                <li className="flex items-start gap-4 text-gray-400">
                  <FileSpreadsheet className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <strong className="text-gray-200 block">Moduli Infiniti</strong>
                    Interfaccia SAP ostica, codici incomprensibili e decine di campi obbligatori.
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-400">
                  <Clock className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <strong className="text-gray-200 block">45+ Minuti per RDA</strong>
                    Tempo perso a cercare informazioni frammentate su email e drive.
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-400">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <strong className="text-gray-200 block">70% Tasso di Errore</strong>
                    Continue rilavorazioni e ping-pong tra reparti.
                  </div>
                </li>
              </ul>
              {/* Desaturated overlay effect */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-2xl"></div>
            </div>
          </div>

          {/* The RAISE Way */}
          <div className="relative group">
            <div className="absolute inset-0 bg-raise-neon/10 blur-3xl rounded-full"></div>
            <div className="relative bg-black border border-raise-neon rounded-2xl p-8 shadow-[0_0_30px_rgba(204,255,0,0.1)] transform md:scale-105 transition-transform">
              <div className="absolute -top-4 -right-4 bg-raise-neon text-black p-2 rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg">
                Il Metodo RAISE
              </div>
              <ul className="space-y-6 mt-4">
                <li className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-raise-neon shrink-0" />
                  <div>
                    <strong className="text-white block text-lg">Conversazionale</strong>
                    Parla con l'AI come faresti con un collega. Nessun training necessario.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-raise-neon shrink-0" />
                  <div>
                    <strong className="text-white block text-lg">&lt; 15 Minuti per RDA</strong>
                    Creazione istantanea partendo da un preventivo PDF o una semplice richiesta.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-raise-neon shrink-0" />
                  <div>
                    <strong className="text-white block text-lg">Zero Errori</strong>
                    Compliance automatica e validazione budget in tempo reale.
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
