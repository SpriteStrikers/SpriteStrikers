import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { ParchmentPanel, PixelButton } from '../ui/atoms';

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