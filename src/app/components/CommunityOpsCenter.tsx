import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ParchmentPanel, PixelButton } from '@/app/components/UI';
import { clsx } from 'clsx';
import { Scroll, Bug, MessageSquare, Feather } from 'lucide-react';

const Tabs = [
  { id: 0, label: 'ENLISTMENT', icon: Feather },
  { id: 1, label: 'FOREST GLITCHES', icon: Bug },
  { id: 2, label: 'TAVERN WHISPERS', icon: MessageSquare },
];

export const CommunityOpsCenter = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-4 bg-[#2e1a0a] relative">
      {/* Decorative wood grain background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl text-[#f5e6be] mb-4 drop-shadow-[4px_4px_0_#3e2723]">
            COMMUNITY OPS CENTER
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-20 bg-[#8b5e3c]" />
             <p className="font-pixel text-[10px] text-[#8b5e3c] uppercase tracking-[0.4em]">The Scribe's Desk</p>
             <div className="h-px w-20 bg-[#8b5e3c]" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-0">
          {Tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'px-6 py-4 font-pixel text-[10px] transition-all relative border-4 border-b-0 flex items-center gap-3',
                activeTab === tab.id 
                  ? 'bg-[#e9d5a1] border-[#8b5e3c] text-[#5d4037] z-20 translate-y-1' 
                  : 'bg-[#5d4037] border-[#3e2723] text-[#d7ccc8] hover:bg-[#6d4c41] translate-y-0'
              )}
            >
              <tab.icon className="w-4 h-4" />
              <span className="tracking-tight">{tab.label}</span>
            </button>
          ))}
        </div>

        <ParchmentPanel variant="parchment" className="border-t-8 border-t-[#8b5e3c]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="min-h-[400px]"
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

const BetaTesterForm = () => (
  <form className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FormField label="Traveler Identity" placeholder="e.g. Oak_Shield" />
      <FormField label="Discord Raven" placeholder="username#0000" />
    </div>
    <div className="space-y-3">
      <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">Favorite Forest Activity</label>
      <select className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none appearance-none cursor-pointer font-bold">
        <option>Root Tactical Card Duels</option>
        <option>Dungeon Wood-carving</option>
        <option>Forest Auto-Battles</option>
        <option>Leaf Deckbuilding</option>
      </select>
    </div>
    <PixelButton variant="wood" size="lg" className="w-full">PLEDGE TO THE ROOTS</PixelButton>
  </form>
);

const BugReportForm = () => (
  <form className="space-y-8">
    <FormField label="Rot Summary" placeholder="Where did the wood decay?" />
    <div className="space-y-3">
      <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">Steps to Reproduce (Ink it down)</label>
      <textarea 
        rows={4}
        className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none resize-none font-bold placeholder:text-[#8b5e3c]/50"
        placeholder="1. Walk near the elder tree...&#10;2. Open the parchment...&#10;3. The leaves fall!"
      />
    </div>
    <FormField label="Wagon Specs" placeholder="RAM, Wagon Type, OS" />
    <div className="border-4 border-dashed border-[#8b5e3c] p-10 text-center bg-[#dcc995]/50 hover:bg-[#dcc995] transition-all cursor-pointer group">
      <p className="font-pixel text-xs text-[#8b5e3c] group-hover:scale-110 transition-transform">ATTACH A SKETCH</p>
    </div>
    <PixelButton variant="wood" size="lg" className="w-full">SEND THE RAVEN</PixelButton>
  </form>
);

const FeedbackForm = () => (
  <form className="space-y-8">
    <div className="space-y-3">
      <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">Tavern Wisdom & Visions</label>
      <textarea 
        rows={10}
        className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none resize-none font-bold placeholder:text-[#8b5e3c]/50"
        placeholder="Share your stories for the future of the forest..."
      />
    </div>
    <PixelButton variant="wood" size="lg" className="w-full">SHARE WISDOM</PixelButton>
  </form>
);

const FormField = ({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) => (
  <div className="space-y-3">
    <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">{label}</label>
    <input 
      type={type}
      className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none transition-colors font-bold placeholder:text-[#8b5e3c]/50"
      placeholder={placeholder}
    />
  </div>
);
