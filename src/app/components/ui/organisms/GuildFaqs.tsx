import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, ParchmentPanel } from "../atoms";

export const GuildFaqs = () => {
  const { t } = useTranslation();
  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];

  return (
    <section className="py-20 px-4 bg-[#1b0d0a]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
           <MessageSquare className="text-[#8b5e3c] size-6" />
           <h2 className="font-pixel text-3xl text-[#f5e6be] drop-shadow-[4px_4px_0_#3e2723]">
             {t('faqs.title')}
           </h2>
        </div>
        
        <ParchmentPanel variant="parchment" className="p-2">
          <Accordion type="single" collapsible className="w-full">
            {faqKeys.map((key, index) => (
              <AccordionItem key={key} value={`item-${index}`} className="border-[#8b5e3c]/20">
                <AccordionTrigger className="font-pixel text-[11px] text-[#3e2723] px-4 py-6 hover:no-underline text-left leading-relaxed">
                  {t(`faqs.${key}.question`)}
                </AccordionTrigger>

                <AccordionContent className="font-sans text-sm text-[#5d4037] px-4 pb-6 font-bold leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: t(`faqs.${key}.answer`) }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ParchmentPanel>
      </div>
    </section>
  );
};