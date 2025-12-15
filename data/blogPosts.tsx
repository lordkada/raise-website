import React from 'react';
import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'future-procurement',
    title: 'Il futuro del procurement è senza moduli',
    subtitle: 'Come l\'IA Conversazionale sta rendendo obsoleta la burocrazia aziendale.',
    target: 'CFO & Visionary Leaders',
    category: 'Vision',
    readTime: '4 min read',
    date: '10 Ott 2023',
    content: (
      <div className="space-y-6 text-gray-300">
        <p className="text-xl font-light text-white leading-relaxed">
          Immagina un mondo in cui creare una Richiesta d'Acquisto (RDA) non richiede di navigare tra menu infiniti di SAP, ma è semplice come inviare un messaggio su Slack.
        </p>
        <h3 className="text-2xl font-bold text-raise-neon mt-8 mb-4">La fine dell'era "Click-Heavy"</h3>
        <p>
          Per decenni, il procurement digitale ha significato digitalizzare la burocrazia, non eliminarla. Abbiamo spostato i moduli dalla carta allo schermo, mantenendo la complessità. RAISE cambia paradigma: non compiliamo moduli, <strong>conversiamo</strong>.
        </p>
        <div className="bg-raise-gray p-6 rounded-xl border-l-4 border-raise-neon my-6">
          <p className="italic text-white">
            "L'obiettivo non è rendere il modulo più bello, ma farlo sparire completamente."
          </p>
        </div>
        <h3 className="text-2xl font-bold text-white mt-8 mb-4">L'impatto strategico</h3>
        <p>
          Quando liberiamo i talenti (come Laura del Finance o Marco del Marketing) da ore di data entry, non stiamo solo risparmiando tempo. Stiamo liberando capacità cognitiva per la strategia, la negoziazione e l'analisi del valore.
        </p>
      </div>
    )
  },
  {
    id: 'zero-errors-ai',
    title: 'Zero Errori: Come l\'IA blinda le tue RDA',
    subtitle: 'Analisi tecnica di come NLP e OCR riducono le rilavorazioni dell\'85%.',
    target: 'Procurement Managers & IT',
    category: 'Tech',
    readTime: '6 min read',
    date: '12 Ott 2023',
    content: (
      <div className="space-y-6 text-gray-300">
        <p className="text-xl font-light text-white leading-relaxed">
          Il "disco rotto" di spiegare sempre gli stessi tre campi obbligatori è finito. RAISE agisce come un firewall intelligente prima che i dati tocchino il tuo ERP.
        </p>
        <h3 className="text-2xl font-bold text-raise-neon mt-8 mb-4">Oltre la validazione standard</h3>
        <p>
          I sistemi tradizionali controllano se un campo è pieno o vuoto. RAISE capisce il <em>contesto</em>. Grazie ai nostri modelli LLM integrati con il Knowledge Graph aziendale, il sistema sa che per quel specifico fornitore IT serve un determinato Codice CIG.
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-raise-neon">
          <li><strong>OCR Semantico:</strong> Estrae i dati dai preventivi PDF con una precisione superiore al 95%.</li>
          <li><strong>Cross-Check SAP:</strong> Verifica in tempo reale se il fornitore è censito.</li>
          <li><strong>Budget Guard:</strong> Controlla la disponibilità dei fondi prima della sottomissione.</li>
        </ul>
        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Risultati misurabili</h3>
        <p>
          Riduzione dell'85% degli errori formali. Questo significa che il team Finance smette di fare da correttore di bozze e torna a fare controllo di gestione.
        </p>
      </div>
    )
  },
  {
    id: 'case-study-30-seconds',
    title: 'Case Study: Creare una RDA in 30 secondi',
    subtitle: 'La storia di come abbiamo trasformato l\'incubo di Marco in un click.',
    target: 'Employees & End Users',
    category: 'Case Study',
    readTime: '3 min read',
    date: '15 Ott 2023',
    content: (
      <div className="space-y-6 text-gray-300">
        <p className="text-xl font-light text-white leading-relaxed">
          Marco, 28 anni, Marketing. Il suo incubo? Capire quale "Centro di Costo" usare per le licenze software.
        </p>
        <h3 className="text-2xl font-bold text-raise-neon mt-8 mb-4">Prima di RAISE</h3>
        <p>
          Marco apriva la SAP GUI. Cercava la transazione ME51N. Sbagliava codice. Chiedeva su Slack. Aspettava risposta. Inviava. La richiesta veniva respinta due giorni dopo per un errore nel gruppo merci. Tempo totale: 45 minuti + 2 giorni di attesa.
        </p>
        <h3 className="text-2xl font-bold text-raise-neon mt-8 mb-4">Con RAISE</h3>
        <div className="bg-black p-4 rounded-lg font-mono text-sm border border-raise-gray my-4">
          <p className="text-gray-400">Marco:</p>
          <p className="text-raise-neon mb-2">"Ciao, devo rinnovare DesignPro per il team, ecco il PDF del preventivo."</p>
          <p className="text-gray-400">RAISE:</p>
          <p className="text-white">"Analizzato. Fornitore: Adobe Inc. Totale: €1.200. Uso il CdC Marketing Digital (12345) come l'ultima volta?"</p>
          <p className="text-gray-400">Marco:</p>
          <p className="text-raise-neon">"Sì, procedi."</p>
        </div>
        <p>
          Tempo totale: 30 secondi. RDA creata in SAP correttamente. Marco torna a lavorare sulla campagna marketing.
        </p>
      </div>
    )
  }
];
