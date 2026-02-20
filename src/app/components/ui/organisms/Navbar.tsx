import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PixelButton } from "../atoms";
import { ImageWithFallback } from "../ImageWithFallback";
import { LanguageSwitcher } from "../molecules/LanguageSwitcher";

import logo from '@/assets/images/logo_2.png';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#3e2723]/95 backdrop-blur-md border-b-4 border-[#1b0d0a] px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-pixel text-xl text-[#f5e6be] tracking-tighter flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="w-60 h-20 flex items-center justify-center">
            <ImageWithFallback src={logo} />
          </div>
        </Link>
        <div className="hidden lg:flex gap-12 font-pixel text-[11px] text-[#a1887f]">
          <Link to="/chronicles" className="hover:text-[#f5e6be] transition-all tracking-[0.3em] font-bold">{t('nav.chronicles')}</Link>
          <Link to="/bestiary" className="hover:text-[#f5e6be] transition-all tracking-[0.3em] font-bold">{t('nav.bestiary')}</Link>
          {/* <Link to="/maps" className="hover:text-[#f5e6be] transition-all tracking-[0.3em] font-bold">{t('nav.maps')}</Link> */}
          {/* <Link to="/legends" className="hover:text-[#f5e6be] transition-all tracking-[0.3em] font-bold">{t('nav.legends')}</Link> */}
        </div>
        <div className="flex gap-4 items-center">
          <LanguageSwitcher />
          <Link to="/play">
            <PixelButton variant="wood" size="sm" className="px-6 border-2">
              {t('nav.play_now')}
            </PixelButton>
          </Link>
        </div>
      </div>
    </nav>
  )
}