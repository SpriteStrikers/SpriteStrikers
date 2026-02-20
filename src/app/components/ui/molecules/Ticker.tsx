import { useGuildStats } from "@/hooks/useGuildStats";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export const Ticker = () => {
  const { t } = useTranslation();
  const { stats, loading } = useGuildStats();

  const tickerContent = loading 
    ? t('ticker.loading')
    : `${t('ticker.testers')}: ${stats.testers}/100 // ${t('ticker.funds')}: $${stats.pledged} // ${t('ticker.bugs')}: ${stats.bugs} // ${t('ticker.lore')}: ${stats.comments} // ${t('ticker.supplies')}: ${stats.coffees} //`;

  return (
    <div className="bg-[#5d4037] border-y-4 border-[#3e2723] py-4 overflow-hidden whitespace-nowrap relative shadow-inner">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 pointer-events-none" />
      
      <motion.div
        animate={{ x: [0, -2000] }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 font-pixel text-[11px] text-[#f5e6be] uppercase font-bold relative z-10"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#8b5e3c]" />
            {tickerContent}
          </span>
        ))}
      </motion.div>
    </div>
  );
};