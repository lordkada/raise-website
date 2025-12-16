import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const BookDemoModal: React.FC = () => {
    const { isOpen, closeModal } = useModal();
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Demo requested for:', email);
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset after success
            setTimeout(() => {
                closeModal();
                setIsSuccess(false);
                setEmail('');
            }, 2000);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-raise-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-float">

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8">
                    {isSuccess ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Richiesta Inviata!</h3>
                            <p className="text-gray-400">Ti contatteremo a breve per fissare la tua demo.</p>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <div className="inline-block px-3 py-1 rounded-full bg-raise-neon/10 text-raise-neon text-xs font-bold uppercase tracking-wider mb-4">
                                    Prenota Demo
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Vedi RAISE in azione</h3>
                                <p className="text-gray-400 text-sm">
                                    Lascia la tua email aziendale per scoprire come stiamo rivoluzionando il procurement.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Aziendale
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-raise-neon focus:ring-1 focus:ring-raise-neon transition-all"
                                        placeholder="nome@azienda.com"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-raise-neon text-raise-black font-bold rounded-xl hover:bg-raise-yellow transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" /> Invio in corso...
                                        </>
                                    ) : (
                                        "Richiedi Demo"
                                    )}
                                </button>
                            </form>

                            <p className="text-xs text-center text-gray-500 mt-6">
                                Nessun impegno richiesto. I tuoi dati sono al sicuro.
                            </p>
                        </>
                    )}
                </div>

                {/* Decorative bottom bar */}
                <div className="h-1 bg-gradient-to-r from-raise-neon via-raise-yellow to-raise-neon"></div>
            </div>
        </div>
    );
};
