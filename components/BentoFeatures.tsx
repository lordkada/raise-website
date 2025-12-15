import React from 'react';
import { Feature } from '../types';
import { ShieldCheck, Database, Zap, PieChart as PieChartIcon } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Q1', budget: 4000, spend: 2400 },
  { name: 'Q2', budget: 3000, spend: 1398 },
  { name: 'Q3', budget: 2000, spend: 9800 }, // Over budget simulation
  { name: 'Q4', budget: 2780, spend: 3908 },
];

export const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-raise-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            Intelligence Built-in
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Feature 1: Large Card - SAP Integration */}
            <div className="md:col-span-2 bg-raise-gray rounded-3xl p-8 border border-white/5 hover:border-raise-neon/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Database className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                            <Database className="text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Integrazione Nativa SAP</h3>
                        <p className="text-gray-400 max-w-md">
                            Connettori certificati BAPI e OData. RAISE legge e scrive direttamente nel tuo ERP senza middleware complessi. Sincronizzazione anagrafiche bidirezionale.
                        </p>
                    </div>
                    <div className="mt-8 flex gap-2">
                        <span className="px-3 py-1 rounded bg-white/10 text-xs font-mono text-gray-300">OData</span>
                        <span className="px-3 py-1 rounded bg-white/10 text-xs font-mono text-gray-300">BAPI</span>
                        <span className="px-3 py-1 rounded bg-white/10 text-xs font-mono text-gray-300">RFC</span>
                    </div>
                </div>
            </div>

            {/* Feature 2: Compliance */}
            <div className="bg-raise-black rounded-3xl p-8 border border-raise-neon/20 hover:border-raise-neon transition-colors group">
                 <div className="w-12 h-12 bg-raise-neon/20 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="text-raise-neon" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Compliance Automatica</h3>
                <p className="text-gray-400 text-sm">
                    Policy aziendali incorporate nel motore AI. Niente più RDA approvate per errore o fornitori non censiti.
                </p>
            </div>

             {/* Feature 3: Budget Analysis (Chart) */}
            <div className="bg-raise-gray rounded-3xl p-8 border border-white/5 md:row-span-2 flex flex-col">
                <div className="mb-6">
                     <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                        <PieChartIcon className="text-raise-yellow" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Analisi Budget Live</h3>
                    <p className="text-gray-400 text-sm">
                        Visualizza l'impatto della tua richiesta sul budget del dipartimento in tempo reale.
                    </p>
                </div>
                <div className="flex-1 min-h-[150px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                                itemStyle={{ color: '#fff' }}
                                cursor={{fill: 'rgba(255,255,255,0.05)'}}
                            />
                            <Bar dataKey="spend" fill="#ccff00" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="budget" fill="#333" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Feature 4: Speed */}
             <div className="md:col-span-2 bg-gradient-to-r from-raise-gray to-raise-black rounded-3xl p-8 border border-white/5 flex items-center justify-between group">
                <div>
                     <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                        <Zap className="text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">ROI in 8-10 Mesi</h3>
                    <p className="text-gray-400">
                        Riduci il costo operativo di ogni RDA da €50 a pochi centesimi.
                    </p>
                </div>
                <div className="text-5xl font-mono text-white/10 font-bold group-hover:text-raise-neon/20 transition-colors">
                    -70%
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
