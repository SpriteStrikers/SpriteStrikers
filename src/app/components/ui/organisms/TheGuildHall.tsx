import { clsx } from 'clsx';
import { Bug, MessageSquare, Scroll } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BetaTesterForm, BugReportForm, FeedbackForm } from '.';
import { ParchmentPanel } from '../atoms';

export const TheGuildHall = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const Tabs = [
    { id: 0, label: t('guild.tabs.beta'), icon: Scroll },
    { id: 1, label: t('guild.tabs.bug'), icon: Bug },
    { id: 2, label: t('guild.tabs.feedback'), icon: MessageSquare },
  ];

  return (
    <section className="py-24 px-4 bg-[#2e1a0a] relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl text-[#f5e6be] mb-4 drop-shadow-[4px_4px_0_#3e2723]">
            {t('guild.header.title')}
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-20 bg-[#8b5e3c]" />
             <p className="font-pixel text-[10px] text-[#8b5e3c] uppercase tracking-[0.4em]">{t('guild.header.subtitle')}</p>
             <div className="h-px w-20 bg-[#8b5e3c]" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-0 relative z-20">
          {Tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'px-6 py-4 font-pixel text-[10px] transition-all relative border-4 border-b-0 flex items-center gap-3 outline-none',
                activeTab === tab.id 
                  ? 'bg-[#e9d5a1] border-[#8b5e3c] text-[#5d4037] pb-6 -mb-2 z-20' 
                  : 'bg-[#5d4037] border-[#3e2723] text-[#d7ccc8] hover:bg-[#6d4c41] hover:-translate-y-1'
              )}
            >
              <tab.icon className="w-4 h-4" />
              <span className="tracking-tight">{tab.label}</span>
            </button>
          ))}
        </div>

        <ParchmentPanel variant="parchment" className="border-t-8 border-t-[#8b5e3c] relative z-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 0 && <BetaTesterForm />}
              {activeTab === 1 && <BugReportForm />}
              {activeTab === 2 && <FeedbackForm />}
            </motion.div>
          </AnimatePresence>
        </ParchmentPanel>
      </div>
    </section>
  );
};
