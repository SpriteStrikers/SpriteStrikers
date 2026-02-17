import { MessageSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, ParchmentPanel } from "../atoms";

export const GuildFaqs = () => {
  return (
    <section className="py-20 px-4 bg-[#1b0d0a]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
           <MessageSquare className="text-[#8b5e3c] size-6" />
           <h2 className="font-pixel text-3xl text-[#f5e6be] drop-shadow-[4px_4px_0_#3e2723]">KNOWLEDGE SCROLLS</h2>
        </div>
        
        <ParchmentPanel variant="parchment" className="p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-[#8b5e3c]/20">
              <AccordionTrigger className="font-pixel text-[11px] text-[#3e2723] px-4 py-6 hover:no-underline">
                ¿Qué es Caelestis y los Sprites?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-[#5d4037] px-4 pb-6 font-bold leading-relaxed">
                Caelestis es el mundo donde habitamos. Los Sprites son grietas dimensionales que pixelan nuestra realidad debido a la traición de los Aethel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-[#8b5e3c]/20">
              <AccordionTrigger className="font-pixel text-[11px] text-[#3e2723] px-4 py-6 hover:no-underline">
                ¿Cómo puedo ser un Striker?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-[#5d4037] px-4 pb-6 font-bold leading-relaxed">
                Debes inscribirte en el Guild Hall (arriba). Si los Etherials te eligen, recibirás un mensaje para unirte a la Alpha.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ParchmentPanel>
      </div>
    </section>
  );
};