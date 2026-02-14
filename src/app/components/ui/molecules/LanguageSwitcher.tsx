import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-2 font-pixel text-[8px] bg-[#1b0d0a] p-1 border-2 border-[#8b5e3c]">
      <button 
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 ${i18n.language === 'en' ? 'bg-[#8b5e3c] text-[#f5e6be]' : 'text-[#8b5e3c]'}`}
      >
        EN
      </button>
      <button 
        onClick={() => i18n.changeLanguage('es')}
        className={`px-2 py-1 ${i18n.language === 'es' ? 'bg-[#8b5e3c] text-[#f5e6be]' : 'text-[#8b5e3c]'}`}
      >
        ES
      </button>
    </div>
  );
};