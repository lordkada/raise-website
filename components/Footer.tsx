import React from 'react';
import { ShieldCheck, Twitter, Linkedin, Github } from 'lucide-react';

import { useModal } from '../context/ModalContext';

export const Footer: React.FC = () => {
  const { openModal } = useModal();
  return (
    <footer className="bg-raise-dark border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-raise-neon rounded-lg text-raise-black">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white">RAISE</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              L'assistente AI che trasforma il procurement da centro di costo a partner strategico.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-raise-neon hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-raise-neon hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-raise-neon hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Prodotto</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-raise-neon transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-raise-neon transition-colors">Integrazioni SAP</a></li>
              <li><a href="#" className="hover:text-raise-neon transition-colors">Sicurezza</a></li>
              <li><a href="#" className="hover:text-raise-neon transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Azienda</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-raise-neon transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-raise-neon transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-raise-neon transition-colors">Careers</a></li>
              <li><button onClick={openModal} className="hover:text-raise-neon transition-colors text-left">Contatti</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} RAISE AI Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
