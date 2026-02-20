import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { Heart, Shield, Sparkles, Star, Sword } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PixelButton } from '../atoms';

import LoadingImg from '@/assets/images/Loading_Resize.png';

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12 px-4 bg-[#2e1a0a]">
      {/* Background: Warmer Earthy Tones */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1691506513931-4740e203d1a0?auto=format&fit=crop&q=80"
          alt="Pixel Scroll/Map"
          className="w-full h-full object-cover mix-blend-overlay scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e2723]/80 via-[#2e1a0a]/90 to-[#1b0d0a]" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] bottom-[15%] w-64 h-64 opacity-80"
        >
          <ImageWithFallback
            src={LoadingImg}
            alt="Treasure Chest"
            className="w-full h-full object-contain filter drop-shadow-[8px_8px_0_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        <div className="absolute right-[10%] top-1/4 opacity-20">
          <Star className="w-32 h-32 text-yellow-300" />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center gap-6 mb-6">
            <div className="p-3 bg-[#5d4037] border-4 border-[#3e2723] rounded-lg shadow-[4px_4px_0_#1b0d0a]">
              <Sword className="w-8 h-8 text-amber-500 animate-pulse" />
            </div>
            <div className="p-3 bg-[#5d4037] border-4 border-[#3e2723] rounded-lg shadow-[4px_4px_0_#1b0d0a]">
              <Shield className="w-8 h-8 text-slate-400" />
            </div>
            <div className="p-3 bg-[#5d4037] border-4 border-[#3e2723] rounded-lg shadow-[4px_4px_0_#1b0d0a]">
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <h1 className="font-pixel text-5xl md:text-7xl lg:text-8xl text-[#f5e6be] tracking-tighter drop-shadow-[6px_6px_0_rgba(62,39,35,1)]">
            SPRITE<br />STRIKERS
          </h1>

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-4 w-4 bg-[#8b5e3c] rotate-45" />
            <span className="font-pixel text-sm text-[#8b5e3c] uppercase tracking-[0.4em] font-bold">{t('hero.title')}</span>
            <div className="h-4 w-4 bg-[#8b5e3c] rotate-45" />
          </div>
        </motion.div>

        <p className="text-[#a1887f] text-xl md:text-2xl max-w-2xl mb-12 font-sans italic font-bold">
          "{t('hero.subtitle')}"
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          <Link to="/play">
            <PixelButton variant="wood" size="lg" className="min-w-[280px] text-lg uppercase">
              {t('nav.play_now')}
            </PixelButton>
          </Link>

          <a href="https://www.kickstarter.com/" target="_blank" rel="noopener noreferrer">
            <PixelButton variant="leaf" size="lg" className="min-w-[280px] text-lg uppercase">
              {t('hero.green_button')}
            </PixelButton>
          </a>
        </div>

        <a
          href="https://ko-fi.com/spritestrikers"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 flex items-center gap-3 text-[#8b5e3c] font-pixel text-[12px] hover:text-[#f5e6be] transition-all uppercase tracking-[0.3em] group cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#ef4444" }}
            className="text-[#8b5e3c] group-hover:text-red-500 transition-colors"
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
          {t('hero.heart_button')}
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1b0d0a] to-transparent opacity-80" />
    </section>
  );
};
