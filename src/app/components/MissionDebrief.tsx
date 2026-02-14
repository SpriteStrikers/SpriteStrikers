import { Crown, Shield, Sword, Wand2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ParchmentPanel, PixelButton } from '../components/UI';

const RatingRows = [
  { id: 'concept', label: 'Mythos & World Building', icon: Crown },
  { id: 'mechanics', label: 'Tactical Combat', icon: Sword },
  { id: 'ui', label: 'Scribe UI & Navigation', icon: Shield },
  { id: 'art', label: 'Pixel Tapestry Style', icon: Wand2 },
];

export const MissionDebrief = () => {
  const [ratings, setRatings] = useState<Record<string, number>>({});

  const handleRate = (rowId: string, value: number) => {
    setRatings(prev => ({ ...prev, [rowId]: value }));
  };

  return (
    <section className="py-24 px-4 bg-[#1b0d0a] relative overflow-hidden">
      {/* Decorative Forest Dividers */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-pixel text-3xl text-[#f5e6be] mb-4 text-center drop-shadow-[4px_4px_0_#3e2723]">
          FOREST DEBRIEF
        </h2>
        <p className="font-pixel text-[10px] text-[#8b5e3c] mb-12 text-center uppercase tracking-[0.4em]">
          Traveler Satisfaction Harvest
        </p>

        <ParchmentPanel variant="parchment" title="FINAL APPRAISAL">
          <div className="space-y-12">
            {RatingRows.map((row) => (
              <div key={row.id} className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#8b5e3c] rounded-lg">
                      <row.icon className="w-4 h-4 text-[#f5e6be]" />
                    </div>
                    <label className="font-pixel text-xs text-[#5d4037] uppercase font-bold tracking-tight">
                      {row.label}
                    </label>
                  </div>
                  <span className="font-pixel text-xs text-[#8b5e3c] font-black">
                    {ratings[row.id] ? `${ratings[row.id]} / 5` : '? / 5'}
                  </span>
                </div>
                
                <div className="flex justify-between gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleRate(row.id, val)}
                      className="group relative flex-1 h-20 border-4 border-[#bca772] bg-[#dcc995] flex items-center justify-center transition-all hover:bg-[#efe5fd]"
                    >
                      <Sword 
                        className={`w-6 h-6 transition-all duration-300 ${
                          ratings[row.id] >= val 
                            ? 'text-[#2e7d32] fill-[#2e7d32]/20 filter drop-shadow-[0_4px_0_rgba(27,94,32,0.5)] scale-110 -rotate-45' 
                            : 'text-[#8b5e3c]/30 rotate-45'
                        } group-hover:scale-110`}
                      />
                      {ratings[row.id] === val && (
                        <motion.div 
                          layoutId={`active-sword-${row.id}`}
                          className="absolute inset-0 border-4 border-[#8b5e3c] shadow-[inset_0_0_20px_rgba(139,94,60,0.2)]"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-10 border-t-4 border-[#8b5e3c] border-dashed">
              <PixelButton variant="wood" size="lg" className="w-full text-lg">
                SEAL THE DECREE
              </PixelButton>
            </div>
          </div>
        </ParchmentPanel>
      </div>
    </section>
  );
};
