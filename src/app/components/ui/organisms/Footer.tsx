import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-4 bg-[#1b0d0a] border-t-4 border-[#3e2723] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h3 className="font-pixel text-2xl text-[#f5e6be] mb-4 tracking-tighter drop-shadow-[3px_3px_0_#3e2723]">
          SPRITE STRIKERS
        </h3>

        <p className="text-[#8b5e3c] font-pixel text-[10px] leading-relaxed mb-10 uppercase tracking-widest">
          &copy; 2026 VOID PULSE STUDIOS. {t('footer.rights')}
          <br />
          <span className="text-[#5d4037] mt-2 block italic">
            "{t('footer.motto')}"
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-pixel text-[11px] text-[#bca772]">
          <a href="#" className="hover:text-[#f5e6be] transition-colors flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 bg-[#8b5e3c] rotate-45 group-hover:bg-[#f5e6be] transition-colors" />
            TWITTER / X
          </a>
          <a href="#" className="hover:text-[#f5e6be] transition-colors flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 bg-[#8b5e3c] rotate-45 group-hover:bg-[#f5e6be] transition-colors" />
            DISCORD
          </a>
          <a href="#" className="hover:text-[#f5e6be] transition-colors flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 bg-[#8b5e3c] rotate-45 group-hover:bg-[#f5e6be] transition-colors" />
            STEAM
          </a>
        </div>

        <div className="mt-12 flex justify-center items-center gap-4 opacity-30">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[#8b5e3c]" />
          <div className="w-2 h-2 bg-[#8b5e3c] rotate-45" />
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-[#8b5e3c]" />
        </div>
      </div>
    </footer>
  );
};