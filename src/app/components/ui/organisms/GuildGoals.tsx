import { useGuildStats } from "@/hooks/useGuildStats";
import { Bug, Coffee, Feather, Flame, Target } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ParchmentPanel } from "../atoms";

export const GuildGoals = () => {
  const { t } = useTranslation();
  const { stats, loading } = useGuildStats();

  const goals = [
    { 
      title: t('stats.goals.supplies'), 
      current: stats.coffees, 
      total: stats.coffeeGoal, 
      icon: <Coffee className="size-4 text-amber-600" />,
      color: "#d97706" // Amber
    },
    { 
      title: t('stats.goals.kickstarter'), 
      current: stats.pledged, 
      total: stats.kickstarterGoal, 
      prefix: "$",
      icon: <Flame className="size-4 text-red-500" />,
      color: "#ef4444" // Red
    },
    { 
      title: t('stats.goals.testers'), 
      current: stats.testers, 
      total: 100,
      icon: <Target className="size-4 text-emerald-500" />,
      color: "#10b981" // Emerald
    },
    { 
      title: t('stats.goals.lore'), 
      current: stats.comments, 
      total: 50,
      icon: <Feather className="size-4 text-blue-400" />,
      color: "#3b82f6" // Blue
    },
    { 
      title: t('stats.goals.bugs'), 
      current: stats.bugs, 
      total: 20,
      icon: <Bug className="size-4 text-purple-500" />,
      color: "#a855f7" // Purple
    },
  ];

  if (loading) return <div className="py-20 text-center font-pixel text-[#8b5e3c]">{t('stats.loading')}</div>;

  return (
    <section className="py-20 px-4 bg-[#1b0d0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-3xl text-[#f5e6be] text-center mb-12 drop-shadow-[4px_4px_0_#3e2723]">
          {t('stats.title')}
        </h2>
        
        <div className="grid gap-6">
          {goals.map((goal, i) => (
            <ParchmentPanel key={i} variant="wood" className="p-4">
              <div className="flex flex-col gap-3">
                {/* Header de la tarjeta */}
                <div className="flex justify-between items-center font-pixel text-[11px] text-[#f5e6be]">
                  <span className="flex items-center gap-2 uppercase tracking-wide">
                    {goal.icon} {goal.title}
                  </span>
                  <span className="text-[#8b5e3c]">
                    {goal.prefix}{goal.current} / {goal.prefix}{goal.total}
                  </span>
                </div>

                {/* Barra de Progreso */}
                <div className="h-5 bg-[#1b0d0a] border-2 border-[#3e2723] p-0.5 shadow-inner relative overflow-hidden">
                  {/* Fondo rallado para estilo retro */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
                  
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min((goal.current / goal.total) * 100, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full relative"
                    style={{ backgroundColor: goal.color }}
                  >
                    {/* Brillo en la barra */}
                    <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/50 shadow-[0_0_8px_white]" />
                  </motion.div>
                </div>
              </div>
            </ParchmentPanel>
          ))}
        </div>
      </div>
    </section>
  );
};