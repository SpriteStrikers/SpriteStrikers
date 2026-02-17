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

  const races = [
    { 
      name: 'Aethel', 
      trait: 'Redención', 
      description: 'Versátiles y determinados a reparar el daño causado por sus ancestros.', 
      img: aethelImage 
    },
    { 
      name: 'Lumínicos', 
      trait: 'Estabilidad', 
      description: 'Protectores de la naturaleza. Su magia es la más pura y estable frente a las grietas.', 
      img: luminicosImage
    },
    { 
      name: 'Ferals', 
      trait: 'Instinto', 
      description: 'Guerreros instintivos. Su conexión física con Caelestis los hace rastreadores inigualables.', 
      img: feralsImage 
    },
    { 
      name: 'Scintilas', 
      trait: 'Artesanía', 
      description: 'Maestros artesanos. Sin sus artilugos, ninguna raza podría contener el poder de los Ecos.', 
      img: scintilasImage 
    },
    { 
      name: 'Etherials (Ecos)', 
      trait: 'Esencia', 
      description: 'La esencia misma del mundo. Algunos han tomado forma física para defender su hogar.', 
      img: etherialsImage 
    },
    { 
      name: 'Colmena Vesper', 
      trait: 'Cordura', 
      description: 'Visitantes trágicos. Luchan por recuperar su cordura en una realidad que se rompe.', 
      img: '' 
    },
    { 
      name: 'Injertados', 
      trait: 'Corrupción', 
      description: 'El enemigo. Aquellos que sacrificaron su humanidad por un poder que está devorando el mundo.', 
      img: '' 
    },
  ];

  return (
    <section className="py-32 px-4 bg-[#0a1b0d] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-[#e8f5e9] mb-4 drop-shadow-[4px_4px_0_#1b5e20] uppercase">
            Razas de Caelestis
          </h2>
          <p className="font-pixel text-[10px] text-[#43a047] uppercase tracking-[0.4em]">
            Guía de Alianzas y Amenazas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {races.map((race, i) => (
            <ParchmentPanel 
              key={i} 
              variant="parchment" 
              className={`p-0 overflow-hidden group border-4 ${race.name === 'Injertados' ? 'border-red-900 shadow-[8px_8px_0_#450a0a]' : 'border-[#1b5e20]'}`}
            >
              <div className="h-56 relative overflow-hidden">
                <ImageWithFallback 
                  src={race.img} 
                  alt={race.name} 
                  className={`w-full h-full object-cover transition-transform group-hover:scale-110 ${race.name === 'Injertados' ? 'grayscale group-hover:grayscale-0' : ''}`} 
                />
                <div className={`absolute top-2 right-2 font-pixel text-[8px] px-3 py-1 text-white ${race.name === 'Injertados' ? 'bg-red-900' : 'bg-[#1b5e20]'}`}>
                  {race.trait.toUpperCase()}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`font-pixel text-xl mb-3 ${race.name === 'Injertados' ? 'text-red-900' : 'text-[#3e2723]'}`}>
                  {race.name}
                </h3>
                <p className="font-sans text-[13px] text-[#5d4037] mb-6 leading-relaxed font-bold">
                  {race.description}
                </p>
                <PixelButton 
                  variant={race.name === 'Injertados' ? 'wood' : 'leaf'} 
                  className="w-full text-[9px] uppercase tracking-tighter"
                >
                  Conocer más
                </PixelButton>
              </div>
            </ParchmentPanel>
          ))}
        </div>
      </div>
    </section>
  );
};