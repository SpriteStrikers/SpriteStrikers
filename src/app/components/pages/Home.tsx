import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { AdventurersLog, HeroSection, TheGuildHall } from "../ui/organisms";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroSection />

      <div className="bg-[#5d4037] border-y-4 border-[#3e2723] py-4 overflow-hidden whitespace-nowrap relative shadow-inner">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 pointer-events-none" />
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 font-pixel text-[11px] text-[#f5e6be] uppercase font-bold relative z-10"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[#8b5e3c]" />
              {t('ticker.status')} // {t('ticker.deck')} // {t('ticker.travelers')} // {t('ticker.mana')} //
            </span>
          ))}
        </motion.div>
      </div>

      <TheGuildHall />

      <AdventurersLog />
    </>
  )
}