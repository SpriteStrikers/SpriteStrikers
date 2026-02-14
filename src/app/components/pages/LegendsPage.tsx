import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParchmentPanel } from '../UI';

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