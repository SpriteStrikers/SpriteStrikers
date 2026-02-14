import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 px-4 bg-slate-950 border-t border-slate-900 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-pixel text-xl text-slate-100 mb-4 tracking-tighter">SPRITE STRIKERS</h3>
        <p className="text-slate-500 font-sans text-sm mb-8">
          &copy; 2026 VOID PULSE STUDIOS. {t('footer.rights')} 
          <br />
          {t('footer.motto')}
        </p>
        <div className="flex justify-center gap-8 font-pixel text-[10px] text-cyan-400">
          <a href="#" className="hover:text-white transition-colors">TWITTER / X</a>
          <a href="#" className="hover:text-white transition-colors">DISCORD</a>
          <a href="#" className="hover:text-white transition-colors">STEAM</a>
        </div>
      </div>
    </footer>
  );
};