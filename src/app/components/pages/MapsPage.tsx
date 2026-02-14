import { Map } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParchmentPanel, PixelButton } from '../ui/atoms';

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