import { Flame, Target, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { ParchmentPanel } from "../atoms";

export const GuildGoals = () => {
  const goals = [
    { title: "Comunidad de Discord", current: 85, total: 100, icon: <Flame className="size-4 text-orange-500" /> },
    { title: "Beta Testers Reclutados", current: 12, total: 50, icon: <Target className="size-4 text-red-500" /> },
    { title: "Crónicas Escritas", current: 100, total: 100, icon: <Trophy className="size-4 text-amber-500" /> },
  ];

  return (
    <section className="py-20 px-4 bg-[#1b0d0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-3xl text-[#f5e6be] text-center mb-12 drop-shadow-[4px_4px_0_#3e2723]">
          GUILD PROGRESS
        </h2>
        <div className="grid gap-6">
          {goals.map((goal, i) => (
            <ParchmentPanel key={i} variant="wood" className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center font-pixel text-[10px] text-[#f5e6be]">
                  <span className="flex items-center gap-2">{goal.icon} {goal.title}</span>
                  <span className="text-[#8b5e3c]">{goal.current} / {goal.total}</span>
                </div>
                <div className="h-5 bg-[#1b0d0a] border-2 border-[#3e2723] p-0.5 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(goal.current / goal.total) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#43a047] shadow-[0_0_10px_rgba(67,160,71,0.3)]"
                  />
                </div>
              </div>
            </ParchmentPanel>
          ))}
        </div>
      </div>
    </section>
  );
};