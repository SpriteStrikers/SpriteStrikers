import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParchmentPanel, PixelButton } from '../UI';

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