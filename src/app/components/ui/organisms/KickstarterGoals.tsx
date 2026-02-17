import { Gem, Hand, Layers, LayoutTemplate, Music, Paintbrush, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ParchmentPanel } from "../atoms";

export const KickstarterGoals = () => {
  const goals = [
    {
      title: "ARTE 100% HUMANO",
      subtitle: "Adiós IA, Hola Alma",
      desc: "El 100% de los fondos irán a artistas de Pixel Art reales. Reemplazaremos cada placeholder con sprites animados a mano, llenos de personalidad y detalle.",
      icon: <Paintbrush className="size-8 text-pink-500" />,
      borderColor: "border-pink-500"
    },
    {
      title: "GRIMORIO EXPANDIDO",
      subtitle: "Profundidad Estratégica",
      desc: "Llevaremos el juego de 50 a más de 150 cartas únicas al lanzamiento. Más facciones, más arquetipos y mecánicas complejas que requieren balanceo experto.",
      icon: <Layers className="size-8 text-blue-500" />,
      borderColor: "border-blue-500"
    },
    {
      title: "BANDA SONORA ÉPICA",
      subtitle: "Sinfonía Original",
      desc: "Nada de música genérica. Contrataremos compositores para crear temas orquestales dinámicos que cambien según la intensidad de la batalla.",
      icon: <Music className="size-8 text-amber-500" />,
      borderColor: "border-amber-500"
    },
    {
      title: "UI/UX DE ELITE",
      subtitle: "Cristalino y Jugoso",
      desc: "Una interfaz rediseñada desde cero: tooltips inteligentes, animaciones de impacto ('Juice'), soporte para gamepad y accesibilidad total.",
      icon: <LayoutTemplate className="size-8 text-emerald-500" />,
      borderColor: "border-emerald-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#2e1a0a] relative overflow-hidden">
        {/* Textura de fondo sutil */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
            
            {/* ENCABEZADO */}
            <div className="text-center mb-16 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#1b0d0a]/80 px-4 py-2 rounded-full border border-[#8b5e3c] shadow-lg">
                    <Sparkles className="size-4 text-yellow-400 animate-pulse" />
                    <span className="font-pixel text-[10px] text-[#f5e6be] tracking-widest uppercase">
                        The Quest for Quality
                    </span>
                </div>
                
                <h2 className="font-pixel text-4xl md:text-5xl text-[#f5e6be] drop-shadow-[4px_4px_0_#3e2723]">
                    WHY WE NEED YOU
                </h2>
                
                <p className="font-sans text-[#dcc995] text-lg max-w-2xl mx-auto font-bold leading-relaxed">
                    Sprite Strikers es un prototipo funcional, pero queremos convertirlo en una <span className="text-yellow-400">Obra Maestra</span>. Tu apoyo en Kickstarter hará posible estas mejoras críticas:
                </p>
            </div>

            {/* GRID DE METAS */}
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
                                {/* Icono con círculo decorativo */}
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

            {/* BARRA DE "FUTURO" (Decorativa) */}
            <div className="mt-20 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#8b5e3c]/30 -translate-y-1/2" />
                <div className="flex justify-center">
                    <div className="bg-[#2e1a0a] px-6 py-2 relative border-2 border-[#8b5e3c] rounded-lg rotate-1 hover:rotate-0 transition-transform cursor-default">
                        <span className="font-pixel text-xs text-[#f5e6be] flex items-center gap-2">
                             <Hand className="size-4" /> Y MUCHO MÁS EN EL CAMINO...
                        </span>
                        <Gem className="absolute -top-3 -right-3 size-6 text-purple-400 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] animate-bounce" />
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};