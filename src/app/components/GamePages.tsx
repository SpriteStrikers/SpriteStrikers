import React from 'react';
import { ParchmentPanel, PixelButton } from './UI';
import { ChevronRight, Map } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const ChroniclesPage = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 px-4 bg-[#1b0d0a] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl text-[#f5e6be] mb-4 drop-shadow-[4px_4px_0_#3e2723]">
            {t('chronicles.title')}
          </h2>
          <p className="font-pixel text-[10px] text-[#8b5e3c] uppercase tracking-[0.4em]">
            {t('chronicles.subtitle')}
          </p>
        </div>

        <ParchmentPanel variant="parchment" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-pixel text-2xl text-[#3e2723] uppercase">{t('chronicles.first_strike')}</h3>
              <p className="font-sans text-[#5d4037] leading-relaxed font-bold">
                {t('chronicles.history')}
              </p>
              <div className="space-y-4">
                {[
                  { title: t('chronicles.era1'), date: 'Age 0-100' },
                  { title: t('chronicles.era2'), date: 'Age 250' },
                  { title: t('chronicles.era3'), date: 'Present Age' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#dcc995] border-2 border-[#8b5e3c]">
                    <div className="flex items-center gap-3 font-pixel text-[10px] text-[#5d4037]">
                      <ChevronRight className="w-4 h-4" />
                      {item.title}
                    </div>
                    <span className="font-pixel text-[8px] text-[#8b5e3c]">{item.date}</span>
                  </div>
                ))}
              </div>
              <PixelButton variant="wood">{t('chronicles.scribe')}</PixelButton>
            </div>
            <div className="border-8 border-[#8b5e3c] shadow-[12px_12px_0_rgba(139,94,60,0.2)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1674052844389-aba70e511faf?auto=format&fit=crop&q=80"
                alt="Ancient Scrolls"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </ParchmentPanel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <ParchmentPanel key={i} variant="wood" className="p-6">
              <h4 className="font-pixel text-xs text-[#d7ccc8] mb-2 uppercase">Lost Fragment #{i}</h4>
              <p className="font-sans text-[12px] text-[#a1887f] mb-4">
                "And so the leaves turned to gold, not from autumn, but from the overflow of celestial sap..."
              </p>
              <button className="font-pixel text-[8px] text-[#f5e6be] hover:underline">TRANSLATE &rarr;</button>
            </ParchmentPanel>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BestiaryPage = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 px-4 bg-[#0a1b0d] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl text-[#e8f5e9] mb-4 drop-shadow-[4px_4px_0_#1b5e20]">
            {t('bestiary.title')}
          </h2>
          <p className="font-pixel text-[10px] text-[#43a047] uppercase tracking-[0.4em]">
            {t('bestiary.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Root Golem', rank: 'A', type: 'Earth', img: 'https://images.unsplash.com/photo-1646061550931-74b78e83863c?auto=format&fit=crop&q=80' },
            { name: 'Leaf Drake', rank: 'S', type: 'Air', img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80' },
            { name: 'Spirit Fox', rank: 'B', type: 'Mana', img: 'https://images.unsplash.com/photo-1644007497105-8d0ae9ec9754?auto=format&fit=crop&q=80' },
            { name: 'Moss Giant', rank: 'A', type: 'Nature', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80' },
            { name: 'Needle Sprite', rank: 'C', type: 'Poison', img: 'https://images.unsplash.com/photo-1614728263952-84ea206f9c45?auto=format&fit=crop&q=80' },
            { name: 'Spore Cloud', rank: 'B', type: 'Cloud', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80' },
          ].map((beast, i) => (
            <ParchmentPanel key={i} variant="parchment" className="p-0 overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback src={beast.img} alt={beast.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute top-2 right-2 bg-[#1b5e20] text-white font-pixel text-[10px] px-2 py-1">
                  RANK {beast.rank}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-pixel text-lg text-[#3e2723] mb-1">{beast.name}</h3>
                <p className="font-pixel text-[8px] text-[#8b5e3c] mb-4 uppercase">TYPE: {beast.type}</p>
                <PixelButton variant="leaf" className="w-full text-[8px]">View Abilities</PixelButton>
              </div>
            </ParchmentPanel>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MapsPage = () => (
  <section className="py-32 px-4 bg-[#0d131b] min-h-screen">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-pixel text-4xl text-[#e3f2fd] mb-4 drop-shadow-[4px_4px_0_#0d47a1]">
          TERRITORIES OF POWER
        </h2>
        <p className="font-pixel text-[10px] text-[#42a5f5] uppercase tracking-[0.4em]">
          Interactive Atlas of the Wooden Realm
        </p>
      </div>

      <ParchmentPanel variant="parchment" className="mb-12 border-[#0d47a1]">
        <div className="relative aspect-video border-8 border-[#0d47a1] overflow-hidden group">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1633421878925-ac220d8f6e4f?auto=format&fit=crop&q=80"
            alt="World Map"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Map Markers */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-1/4 left-1/3 w-6 h-6 bg-red-500 border-4 border-white rounded-full cursor-help"
            title="Emerald Trails"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-500 border-4 border-white rounded-full cursor-help"
            title="Deep Roots"
          />
        </div>
      </ParchmentPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="font-pixel text-2xl text-[#f5e6be] uppercase">Active Regions</h3>
          <div className="space-y-4">
            {[
              { name: 'Emerald Trails', difficulty: 'Normal', progress: 100 },
              { name: 'Silent Canopies', difficulty: 'Hard', progress: 45 },
              { name: 'Deep Roots', difficulty: 'Infernal', progress: 12 },
            ].map((reg, i) => (
              <div key={i} className="bg-[#1b0d0a] border-4 border-[#3e2723] p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-pixel text-sm text-[#f5e6be]">{reg.name}</span>
                  <span className={`font-pixel text-[8px] px-2 py-1 ${reg.difficulty === 'Infernal' ? 'bg-red-900' : 'bg-[#5d4037]'}`}>
                    {reg.difficulty}
                  </span>
                </div>
                <div className="w-full h-3 bg-[#3e2723] rounded-none overflow-hidden">
                  <div className="h-full bg-[#0d47a1]" style={{ width: `${reg.progress}%` }} />
                </div>
                <p className="font-pixel text-[8px] text-[#8b5e3c] mt-2">EXPLORATION: {reg.progress}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-12 bg-[#3e2723] border-8 border-[#1b0d0a]">
          <Map className="w-24 h-24 text-[#8b5e3c] mb-6" />
          <h4 className="font-pixel text-xl text-[#f5e6be] mb-4 text-center">VOYAGER STATUS</h4>
          <p className="font-pixel text-[10px] text-[#a1887f] text-center mb-8">
            You are currently stationed at the Outpost. 
            Prepare your deck for the Deep Roots trek.
          </p>
          <PixelButton variant="wood">Begin Expedition</PixelButton>
        </div>
      </div>
    </div>
  </section>
);

export const LegendsPage = () => (
  <section className="py-32 px-4 bg-[#1b0a0a] min-h-screen">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-pixel text-4xl text-[#ffebee] mb-4 drop-shadow-[4px_4px_0_#b71c1c]">
          HALL OF VANGUARDS
        </h2>
        <p className="font-pixel text-[10px] text-[#ef5350] uppercase tracking-[0.4em]">
          The Chosen Card Masters
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {[
          { 
            name: 'Sir Rowan the Tall', 
            title: 'Guardian of the First Seed',
            bio: 'The first master to harmonize with the wood spirits. His deck is forged from ancient petrified bark.',
            img: 'https://images.unsplash.com/photo-1644007497105-8d0ae9ec9754?auto=format&fit=crop&q=80'
          },
          { 
            name: 'Lady Moss of the Vale', 
            title: 'Silent Whisperer',
            bio: 'She can draw cards directly from the breeze. Her tactical speed is unmatched in the Wooden Realm.',
            img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80'
          }
        ].map((legend, i) => (
          <ParchmentPanel key={i} variant="parchment" className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 border-4 border-[#b71c1c] overflow-hidden">
                <ImageWithFallback src={legend.img} alt={legend.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-pixel text-xl text-[#3e2723]">{legend.name}</h3>
                <p className="font-pixel text-[9px] text-[#b71c1c] uppercase">{legend.title}</p>
                <p className="font-sans text-sm text-[#5d4037] font-bold italic leading-relaxed">
                  "{legend.bio}"
                </p>
                <div className="pt-4 border-t-2 border-[#8b5e3c]/20">
                  <h4 className="font-pixel text-[8px] text-[#8b5e3c] mb-2 uppercase">Signature Cards</h4>
                  <div className="flex gap-2">
                    <div className="w-12 h-16 bg-[#5d4037] border-2 border-[#3e2723]" />
                    <div className="w-12 h-16 bg-[#5d4037] border-2 border-[#3e2723]" />
                    <div className="w-12 h-16 bg-[#5d4037] border-2 border-[#3e2723]" />
                  </div>
                </div>
              </div>
            </div>
          </ParchmentPanel>
        ))}
      </div>
    </div>
  </section>
);
