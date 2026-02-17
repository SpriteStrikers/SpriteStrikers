import { ChevronRight, ShieldAlert, Sparkles, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ParchmentPanel, PixelButton } from '../ui/atoms'; // Usando tu nueva estructura de UI
import { ImageWithFallback } from '../ui/ImageWithFallback'; // Ajusta la ruta si es necesario

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
            El Despertar de los Strikers
          </h2>
          <p className="font-pixel text-[10px] text-[#8b5e3c] uppercase tracking-[0.4em]">
            Crónicas de Caelestis
          </p>
        </div>

        {/* HISTORIA PRINCIPAL */}
        <ParchmentPanel variant="parchment" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-pixel text-2xl text-[#3e2723] uppercase flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-600" />
                Bienvenido a Caelestis
              </h3>

              <div className="space-y-4 font-sans text-[#5d4037] leading-relaxed font-bold text-sm md:text-base">
                <p>
                  Un mundo donde la armonía y el color definen el horizonte. Aquí, la civilización
                  no solo ha avanzado tecnológicamente, sino que ha florecido gracias a un
                  vínculo místico con los <strong>Ecos</strong>: asombrosas criaturas de energía pura
                  capaces de manifestar la magia misma.
                </p>
                <p>
                  Pero la paz es un cristal frágil. Sedientos de un poder sin límites, facciones
                  de la raza Aethel traicionaron esta alianza ancestral, creando a los
                  <strong> Injertados</strong>: seres biotecnológicos nacidos de una evolución caótica.
                </p>
                <p className="border-l-4 border-[#8b5e3c] pl-4 italic bg-[#dcc995]/30 py-2">
                  Hoy, Caelestis se desmorona. La desaparición de los Ecos ha fracturado la realidad,
                  abriendo grietas dimensionales conocidas como "Sprites".
                </p>
              </div>

              <div className="py-4">
                <Link to="/play" >
                  <PixelButton variant="wood" className="w-full md:w-auto">
                    UNIRSE A LA ALIANZA
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
                Fragmento recuperado de la Era Lumínica
              </div>
            </div>
          </div>
        </ParchmentPanel>

        {/* FRAGMENTOS DE LORE SECUNDARIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ParchmentPanel variant="wood" className="p-6 border-amber-900/50">
            <div className="flex items-center gap-2 mb-3 text-amber-500">
              <Zap className="w-4 h-4" />
              <h4 className="font-pixel text-xs text-[#d7ccc8] uppercase">Los Sprites</h4>
            </div>
            <p className="font-sans text-[12px] text-[#a1887f] mb-4 italic font-bold">
              "Anomalías que perturban las leyes físicas, pixelando y distorsionando todo a su paso al fracturarse la realidad."
            </p>
          </ParchmentPanel>

          <ParchmentPanel variant="wood" className="p-6 border-red-900/50">
            <div className="flex items-center gap-2 mb-3 text-red-500">
              <ShieldAlert className="w-4 h-4" />
              <h4 className="font-pixel text-xs text-[#d7ccc8] uppercase">Los Injertados</h4>
            </div>
            <p className="font-sans text-[12px] text-[#a1887f] mb-4 italic font-bold">
              "Aberraciones biotecnológicas nacidas de experimentos prohibidos con Ecos secuestrados por los Aethel."
            </p>
          </ParchmentPanel>

          <ParchmentPanel variant="wood" className="p-6 border-cyan-900/50">
            <div className="flex items-center gap-2 mb-3 text-cyan-500">
              <ChevronRight className="w-4 h-4" />
              <h4 className="font-pixel text-xs text-[#d7ccc8] uppercase">Los Strikers</h4>
            </div>
            <p className="font-sans text-[12px] text-[#a1887f] mb-4 italic font-bold">
              "La nueva leyenda: guerreros y mercenarios que han dado un paso al frente para salvar la realidad."
            </p>
          </ParchmentPanel>
        </div>
      </div>
    </section>
  );
};