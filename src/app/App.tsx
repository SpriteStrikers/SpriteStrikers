import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import '../i18n';
import { BestiaryPage, ChroniclesPage, DownloadsPage, Home, LegendsPage, MapsPage } from './components/pages';
import { ScanlineOverlay } from './components/ui/atoms';
import { Footer, Navbar } from './components/ui/organisms';

const App = () => {

  return (
    <Router basename="/SpriteStrikers">
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

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chronicles" element={<ChroniclesPage />} />
            <Route path="/bestiary" element={<BestiaryPage />} />
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/legends" element={<LegendsPage />} />
            <Route path="/play" element={<DownloadsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;