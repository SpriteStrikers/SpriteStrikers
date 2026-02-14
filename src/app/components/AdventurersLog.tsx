import { supabase } from '@/lib/supabase';
import { Crown, Feather, Loader2, Scroll, Shield, Sword, Wand2 } from 'lucide-react'; // Agregué Scroll
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { ParchmentPanel, PixelButton } from '../components/UI';

const LogCategories = [
  { id: 'concept', label: 'Mythos & World Building', icon: Crown },
  { id: 'mechanics', label: 'Tactical Combat', icon: Sword },
  { id: 'ui', label: 'Scribe UI & Navigation', icon: Shield },
  { id: 'art', label: 'Pixel Tapestry Style', icon: Wand2 },
];

export const AdventurersLog = () => {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRate = (categoryId: string, value: number) => {
    setRatings(prev => ({ ...prev, [categoryId]: value }));
  };

  const handleSubmit = async () => {
    if (Object.keys(ratings).length < LogCategories.length) {
      toast.error("The chronicle is incomplete! All aspects must be recorded.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from('adventurers_log')
      .insert([
        {
          concept_rating: ratings['concept'],
          mechanics_rating: ratings['mechanics'],
          ui_rating: ratings['ui'],
          art_rating: ratings['art'],
          comment: comment
        }
      ]);

    setIsSubmitting(false);

    if (error) {
      console.error(error);
      toast.error("Ink spilled... The entry could not be saved.");
    } else {
      setIsSuccess(true);
      toast.success("Chronicle Sealed!");
    }
  };

  return (
    <section className="py-24 px-4 bg-[#1b0d0a] relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        <h2 className="font-pixel text-3xl text-[#f5e6be] mb-4 text-center drop-shadow-[4px_4px_0_#3e2723]">
          ADVENTURER'S LOG
        </h2>
        <p className="font-pixel text-[10px] text-[#8b5e3c] mb-12 text-center uppercase tracking-[0.4em]">
          Journey Chronicles
        </p>

        <ParchmentPanel variant="parchment" title={isSuccess ? "JOURNEY ENDED" : "NEW ENTRY"}>
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center text-center space-y-6"
              >
                <div className="p-4 bg-[#8b5e3c] rounded-full border-4 border-[#5d4037] shadow-lg">
                  <Feather className="w-12 h-12 text-[#f5e6be]" />
                </div>
                <div>
                  <h3 className="font-pixel text-xl text-[#3e2723] mb-2">ENTRY RECORDED</h3>
                  <p className="font-pixel text-xs text-[#5d4037]">Your tale has been written in the stars.</p>
                </div>
                <PixelButton variant="wood" onClick={() => {
                  setRatings({});
                  setComment('');
                  setIsSuccess(false);
                }}>
                  WRITE ANOTHER ENTRY
                </PixelButton>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                exit={{ opacity: 0, y: -20 }}
                className="space-y-10"
              >
                {/* SECCIÓN DE PUNTUACIÓN */}
                <div className="space-y-8">
                  {LogCategories.map((category) => (
                    <div key={category.id} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-[#8b5e3c] rounded-lg shadow-inner">
                            <category.icon className="w-4 h-4 text-[#f5e6be]" />
                          </div>
                          <label className="font-pixel text-xs text-[#5d4037] uppercase font-bold tracking-tight">
                            {category.label}
                          </label>
                        </div>
                        <span className="font-pixel text-xs text-[#8b5e3c] font-black">
                          {ratings[category.id] ? `${ratings[category.id]} / 5` : '-'}
                        </span>
                      </div>

                      <div className="flex justify-between gap-2">
                        {[1, 2, 3, 4, 5].map((val) => (
                          <button
                            key={val}
                            onClick={() => handleRate(category.id, val)}
                            disabled={isSubmitting}
                            className={`group relative flex-1 h-16 sm:h-20 border-4 transition-all duration-200
                              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 cursor-pointer'}
                              ${ratings[category.id] === val
                                ? 'bg-[#efe5fd] border-[#8b5e3c] shadow-none translate-y-1'
                                : 'bg-[#dcc995] border-[#bca772] hover:bg-[#e6d5a5] shadow-[0_4px_0_#bca772]'}
                              flex items-center justify-center rounded-sm`}
                          >
                            <Sword
                              className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 
                                ${ratings[category.id] >= val
                                  ? 'text-[#2e7d32] fill-[#2e7d32]/20 scale-110 -rotate-45 drop-shadow-sm'
                                  : 'text-[#8b5e3c]/20 rotate-45'
                                }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* <--- SECCIÓN DE COMENTARIOS ---> */}
                <div className="space-y-4 pt-4 border-t-2 border-[#8b5e3c]/20 border-dashed">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-[#8b5e3c] rounded-lg shadow-inner">
                      <Scroll className="w-4 h-4 text-[#f5e6be]" />
                    </div>
                    <label className="font-pixel text-xs text-[#5d4037] uppercase font-bold tracking-tight">
                      TALES FROM THE REALM (OPTIONAL)
                    </label>
                  </div>

                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="Describe your journey, brave traveler..."
                    className="w-full h-32 bg-[#dcc995]/50 border-4 border-[#bca772] p-4 
                             font-pixel text-sm text-[#3e2723] placeholder:text-[#8b5e3c]/50
                             focus:outline-none focus:border-[#8b5e3c] focus:bg-[#dcc995]
                             transition-all duration-300 resize-none shadow-inner"
                  />
                  <div className="text-right">
                    <span className="font-pixel text-[10px] text-[#8b5e3c]/70">
                      {comment.length} CHARS SCRIBED
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <PixelButton
                    variant="wood"
                    size="lg"
                    className="w-full text-lg relative group"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>SCRIBING...</span>
                      </div>
                    ) : (
                      <span className="flex items-center gap-2">
                        SEAL THE CHRONICLE <Feather className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </span>
                    )}
                  </PixelButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ParchmentPanel>
      </div>
    </section>
  );
};