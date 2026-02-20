import { Gem, Hand, Layers, LayoutTemplate, Music, Paintbrush, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ParchmentPanel } from "../atoms";

export const KickstarterGoals = () => {
  const { t } = useTranslation();

  const goals = [
    {
      title: t('kickstarter.goals.art.title'),
      subtitle: t('kickstarter.goals.art.subtitle'),
      desc: t('kickstarter.goals.art.desc'),
      icon: <Paintbrush className="size-8 text-pink-500" />,
      borderColor: "border-pink-500"
    },
    {
      title: t('kickstarter.goals.cards.title'),
      subtitle: t('kickstarter.goals.cards.subtitle'),
      desc: t('kickstarter.goals.cards.desc'),
      icon: <Layers className="size-8 text-blue-500" />,
      borderColor: "border-blue-500"
    },
    {
      title: t('kickstarter.goals.music.title'),
      subtitle: t('kickstarter.goals.music.subtitle'),
      desc: t('kickstarter.goals.music.desc'),
      icon: <Music className="size-8 text-amber-500" />,
      borderColor: "border-amber-500"
    },
    {
      title: t('kickstarter.goals.ui.title'),
      subtitle: t('kickstarter.goals.ui.subtitle'),
      desc: t('kickstarter.goals.ui.desc'),
      icon: <LayoutTemplate className="size-8 text-emerald-500" />,
      borderColor: "border-emerald-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#2e1a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#1b0d0a]/80 px-4 py-2 rounded-full border border-[#8b5e3c] shadow-lg">
            <Sparkles className="size-4 text-yellow-400 animate-pulse" />
            <span className="font-pixel text-[10px] text-[#f5e6be] tracking-widest uppercase">
              {t('kickstarter.header.badge')}
            </span>
          </div>

          <h2 className="font-pixel text-4xl md:text-5xl text-[#f5e6be] drop-shadow-[4px_4px_0_#3e2723]">
            {t('kickstarter.header.title')}
          </h2>

          <p className="font-sans text-[#dcc995] text-lg max-w-2xl mx-auto font-bold leading-relaxed">
            {t('kickstarter.header.desc_start')} <span className="text-yellow-400">{t('kickstarter.header.desc_highlight')}</span>. {t('kickstarter.header.desc_end')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <ParchmentPanel
                variant="parchment"
                className={`h-full border-b-8 ${goal.borderColor} hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all`}
              >
                <div className="p-6 flex flex-col items-center text-center gap-4 h-full">
                  <div className="p-4 bg-[#eaddcf] border-2 border-[#d7ccc8] rounded-full shadow-inner mb-2 group-hover:scale-110 transition-transform duration-300">
                    {goal.icon}
                  </div>

                  <div>
                    <h3 className="font-pixel text-sm text-[#3e2723] uppercase tracking-wide leading-tight mb-1">
                      {goal.title}
                    </h3>
                    <p className="font-pixel text-[10px] text-[#8b5e3c] uppercase tracking-wider">
                      {goal.subtitle}
                    </p>
                  </div>

                  <div className="h-px w-16 bg-[#8b5e3c]/30 my-1" />

                  <p className="font-sans text-xs text-[#5d4037] font-bold leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
              </ParchmentPanel>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#8b5e3c]/30 -translate-y-1/2" />
          <div className="flex justify-center">
            <div className="bg-[#2e1a0a] px-6 py-2 relative border-2 border-[#8b5e3c] rounded-lg rotate-1 hover:rotate-0 transition-transform cursor-default">
              <span className="font-pixel text-xs text-[#f5e6be] flex items-center gap-2 uppercase">
                <Hand className="size-4" /> {t('kickstarter.footer_badge')}
              </span>
              <Gem className="absolute -top-3 -right-3 size-6 text-purple-400 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] animate-bounce" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};