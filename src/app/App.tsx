import { AdventurersLog } from '@/app/components/AdventurersLog';
import { CommunityOpsCenter } from '@/app/components/CommunityOpsCenter';
import { BestiaryPage, ChroniclesPage, LegendsPage, MapsPage } from '@/app/components/GamePages';
import { HeroSection } from '@/app/components/HeroSection';
import { PixelButton, ScanlineOverlay } from '@/app/components/UI';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import '../i18n';

const LanguageSwitcher = () => {
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

const Footer = () => {
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

const App = () => {
  const { t } = useTranslation();
  
  return (
    <Router>
      <div className="min-h-screen bg-[#1b0d0a] text-[#f5e6be] selection:bg-[#8b5e3c] selection:text-[#f5e6be]">
        <Toaster 
          position="top-center" 
          richColors
          toastOptions={{
            style: {
              background: '#3e2723',
              border: '2px solid #8b5e3c',
              color: '#f5e6be',
            },
            className: 'font-pixel uppercase tracking-tight shadow-[4px_4px_0_#1b0d0a]' 
          }}
        />

        <ScanlineOverlay />
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#3e2723]/95 backdrop-blur-md border-b-4 border-[#1b0d0a] px-6 py-5">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="font-pixel text-xl text-[#f5e6be] tracking-tighter flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 border-4 border-[#8b5e3c] flex items-center justify-center bg-[#5d4037] rounded-lg shadow-[4px_4px_0_#1b0d0a]">
                <span className="text-white font-black">S</span>
              </div>
              SPRITE_STRIKERS
            </Link>
            <div className="hidden lg:flex gap-12 font-pixel text-[11px] text-[#a1887f]">
              <Link to="/chronicles" className="hover:text-[#f5e6be] transition-all tracking-[0.3em] font-bold">{t('nav.chronicles')}</Link>
              <Link to="/bestiary" className="hover:text-[#f5e6be] transition-all tracking-[0.3em] font-bold">{t('nav.bestiary')}</Link>
              <Link to="/maps" className="hover:text-[#f5e6be] transition-all tracking-[0.3em] font-bold">{t('nav.maps')}</Link>
              <Link to="/legends" className="hover:text-[#f5e6be] transition-all tracking-[0.3em] font-bold">{t('nav.legends')}</Link>
            </div>
            <div className="flex gap-4 items-center">
              <LanguageSwitcher />
              <PixelButton 
                variant="wood" 
                size="sm"
                className="px-6 border-2"
              >
                {t('nav.play_now')}
              </PixelButton>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                
                <div className="bg-[#5d4037] border-y-4 border-[#3e2723] py-4 overflow-hidden whitespace-nowrap relative shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 pointer-events-none" />
                  <motion.div 
                    animate={{ x: [0, -1200] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex gap-16 font-pixel text-[11px] text-[#f5e6be] uppercase font-bold relative z-10"
                  >
                    {[...Array(10)].map((_, i) => (
                      <span key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-[#8b5e3c]" />
                        {t('ticker.status')} // {t('ticker.deck')} // {t('ticker.travelers')} // {t('ticker.mana')} //
                      </span>
                    ))}
                  </motion.div>
                </div>

                <CommunityOpsCenter />

                <AdventurersLog />
              </>
            } />
            <Route path="/chronicles" element={<ChroniclesPage />} />
            <Route path="/bestiary" element={<BestiaryPage />} />
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/legends" element={<LegendsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;