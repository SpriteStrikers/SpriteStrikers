import { ChevronRight, ShieldAlert, Sparkles, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ParchmentPanel, PixelButton } from '../ui/atoms';
import { ImageWithFallback } from '../ui/ImageWithFallback';

import ChroniclesImage from '@/assets/images/chronicles.png';
import { Link } from 'react-router-dom';

export const ChroniclesPage = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-4 bg-[#1b0d0a] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-[#f5e6be] mb-4 drop-shadow-[4px_4px_0_#3e2723] uppercase">
            {t('chronicles.header.title')}
          </h2>
          <p className="font-pixel text-[10px] text-[#8b5e3c] uppercase tracking-[0.4em]">
            {t('chronicles.header.subtitle')}
          </p>
        </div>

        {/* HISTORIA PRINCIPAL */}
        <ParchmentPanel variant="parchment" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-pixel text-2xl text-[#3e2723] uppercase flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-600" />
                {t('chronicles.main.title')}
              </h3>

              <div className="space-y-4 font-sans text-[#5d4037] leading-relaxed font-bold text-sm md:text-base">
                <p dangerouslySetInnerHTML={{ __html: t('chronicles.main.p1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('chronicles.main.p2') }} />
                <p 
                  className="border-l-4 border-[#8b5e3c] pl-4 italic bg-[#dcc995]/30 py-2"
                  dangerouslySetInnerHTML={{ __html: t('chronicles.main.p3') }} 
                />
              </div>

              <div className="py-4">
                <Link to="/play">
                  <PixelButton variant="wood" className="w-full md:w-auto">
                    {t('chronicles.main.btn')}
                  </PixelButton>
                </Link>
              </div>
            </div>

            {/* ILUSTRACIÓN LORE */}
            <div className="border-8 border-[#8b5e3c] shadow-[12px_12px_0_rgba(139,94,60,0.2)] relative group">
              <ImageWithFallback
                src={ChroniclesImage}
                alt="Ancient Scrolls"
                className="w-full h-[500px] object-cover filter sepia-[0.3] group-hover:sepia-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 font-pixel text-[10px] text-[#f5e6be]">
                {t('chronicles.main.caption')}
              </div>
            </div>
          </div>
        </ParchmentPanel>

        {/* FRAGMENTOS DE LORE SECUNDARIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ParchmentPanel variant="wood" className="p-6 border-amber-900/50">
            <div className="flex items-center gap-2 mb-3 text-amber-500">
              <Zap className="w-4 h-4" />
              <h4 className="font-pixel text-xs text-[#d7ccc8] uppercase">{t('chronicles.fragments.sprites.title')}</h4>
            </div>
            <p className="font-sans text-[12px] text-[#a1887f] mb-4 italic font-bold">
              {t('chronicles.fragments.sprites.desc')}
            </p>
          </ParchmentPanel>

          <ParchmentPanel variant="wood" className="p-6 border-red-900/50">
            <div className="flex items-center gap-2 mb-3 text-red-500">
              <ShieldAlert className="w-4 h-4" />
              <h4 className="font-pixel text-xs text-[#d7ccc8] uppercase">{t('chronicles.fragments.grafted.title')}</h4>
            </div>
            <p className="font-sans text-[12px] text-[#a1887f] mb-4 italic font-bold">
              {t('chronicles.fragments.grafted.desc')}
            </p>
          </ParchmentPanel>

          <ParchmentPanel variant="wood" className="p-6 border-cyan-900/50">
            <div className="flex items-center gap-2 mb-3 text-cyan-500">
              <ChevronRight className="w-4 h-4" />
              <h4 className="font-pixel text-xs text-[#d7ccc8] uppercase">{t('chronicles.fragments.strikers.title')}</h4>
            </div>
            <p className="font-sans text-[12px] text-[#a1887f] mb-4 italic font-bold">
              {t('chronicles.fragments.strikers.desc')}
            </p>
          </ParchmentPanel>
        </div>
      </div>
    </section>
  );
};