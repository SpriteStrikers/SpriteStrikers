import { useTranslation } from 'react-i18next';
import { ParchmentPanel, PixelButton } from '../ui/atoms';
import { ImageWithFallback } from '../ui/ImageWithFallback';

import aethelImage from '@/assets/images/aethel.png';
import etherialsImage from '@/assets/images/etherials.png';
import feralsImage from '@/assets/images/ferals.png';
import luminicosImage from '@/assets/images/luminicos.png';
import scintilasImage from '@/assets/images/scintilas.png';

export const BestiaryPage = () => {
  const { t } = useTranslation();

  // Mantenemos las imágenes y las claves para buscar en el JSON
  const races = [
    { key: 'aethel', img: aethelImage },
    { key: 'luminicos', img: luminicosImage },
    { key: 'ferals', img: feralsImage },
    { key: 'scintilas', img: scintilasImage },
    { key: 'etherials', img: etherialsImage },
    { key: 'vesper', img: '' },
    { key: 'grafted', img: '' },
  ];

  return (
    <section className="py-32 px-4 bg-[#0a1b0d] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-[#e8f5e9] mb-4 drop-shadow-[4px_4px_0_#1b5e20] uppercase">
            {t('bestiary.header.title')}
          </h2>
          <p className="font-pixel text-[10px] text-[#43a047] uppercase tracking-[0.4em]">
            {t('bestiary.header.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {races.map((race, i) => {
            // Obtenemos los textos traducidos para esta raza
            const name = t(`bestiary.races.${race.key}.name`);
            const trait = t(`bestiary.races.${race.key}.trait`);
            const desc = t(`bestiary.races.${race.key}.desc`);
            const isEnemy = race.key === 'grafted';

            return (
              <ParchmentPanel 
                key={i} 
                variant="parchment" 
                className={`p-0 overflow-hidden group border-4 ${isEnemy ? 'border-red-900 shadow-[8px_8px_0_#450a0a]' : 'border-[#1b5e20]'}`}
              >
                <div className="h-56 relative overflow-hidden">
                  <ImageWithFallback 
                    src={race.img} 
                    alt={name} 
                    className={`w-full h-full object-cover transition-transform group-hover:scale-110 ${isEnemy ? 'grayscale group-hover:grayscale-0' : ''}`} 
                  />
                  <div className={`absolute top-2 right-2 font-pixel text-[8px] px-3 py-1 text-white ${isEnemy ? 'bg-red-900' : 'bg-[#1b5e20]'}`}>
                    {trait.toUpperCase()}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`font-pixel text-xl mb-3 ${isEnemy ? 'text-red-900' : 'text-[#3e2723]'}`}>
                    {name}
                  </h3>
                  <p className="font-sans text-[13px] text-[#5d4037] mb-6 leading-relaxed font-bold">
                    {desc}
                  </p>
                  <PixelButton 
                    variant={isEnemy ? 'wood' : 'leaf'} 
                    className="w-full text-[9px] uppercase tracking-tighter"
                  >
                    {t('bestiary.btn')}
                  </PixelButton>
                </div>
              </ParchmentPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
};