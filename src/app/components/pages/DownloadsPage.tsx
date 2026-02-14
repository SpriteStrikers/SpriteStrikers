import { Download, Gamepad2, Monitor, Smartphone, Terminal } from 'lucide-react';
import { ParchmentPanel, PixelButton } from '../ui/atoms';

export const DownloadsPage = () => {
  return (
    <section className="min-h-screen py-32 px-4 bg-[#1b0d0a] relative flex items-center justify-center">
      {/* Background Grid Style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,94,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,94,60,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
      
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-[#f5e6be] mb-4 drop-shadow-[4px_4px_0_#3e2723] tracking-tighter">
            THE ARMORY
          </h2>
          <p className="font-pixel text-xs text-[#8b5e3c] uppercase tracking-[0.4em]">
            Select Your Platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PC VERSION CARD */}
          <PlatformCard 
            title="DESKTOP EDITION"
            version="v0.4.2-ALPHA"
            icon={<Monitor className="w-12 h-12 text-[#f5e6be]" />}
            description="The full experience. High fidelity sprites, keyboard shortcuts, and immersive audio."
            requirements="Windows 10/11 • 4GB RAM"
            downloadUrl="https://tusuario.itch.io/sprite-strikers-pc" // <--- TU LINK AQUÍ
            variant="pc"
          />

          {/* ANDROID VERSION CARD */}
          <PlatformCard 
            title="POCKET EDITION"
            version="v0.4.2-MOBILE"
            icon={<Smartphone className="w-12 h-12 text-[#f5e6be]" />}
            description="Take the forest with you. Optimized touch controls for tactical battles on the go."
            requirements="Android 8.0+ • Snapdragon 660+"
            downloadUrl="https://tusuario.itch.io/sprite-strikers-android" // <--- TU LINK AQUÍ
            variant="mobile"
          />
        </div>

        {/* WebGL Option (Optional) */}
        <div className="mt-12 text-center">
          <p className="font-pixel text-[10px] text-[#8b5e3c] mb-4">OR PLAY INSTANTLY IN BROWSER</p>
          <PixelButton variant="leaf" size="lg" className="mx-auto animate-pulse">
            <Gamepad2 className="w-5 h-5 mr-2" />
            LAUNCH WEB CLIENT
          </PixelButton>
        </div>
      </div>
    </section>
  );
};

// Componente Tarjeta Reutilizable
const PlatformCard = ({ title, version, icon, description, requirements, downloadUrl, variant }: any) => {
  const isPc = variant === 'pc';
  
  return (
    <ParchmentPanel variant={isPc ? 'wood' : 'parchment'} className="h-full flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
      <div className={`p-6 rounded-full border-4 mb-6 ${isPc ? 'bg-[#3e2723] border-[#1b0d0a]' : 'bg-[#8b5e3c] border-[#5d4037]'}`}>
        {icon}
      </div>
      
      <h3 className={`font-pixel text-2xl mb-2 tracking-tight ${isPc ? 'text-[#f5e6be]' : 'text-[#3e2723]'}`}>
        {title}
      </h3>
      
      <span className={`font-pixel text-[10px] px-3 py-1 rounded-full mb-6 ${isPc ? 'bg-[#1b0d0a] text-[#8b5e3c]' : 'bg-[#dcc995] text-[#8b5e3c]'}`}>
        {version}
      </span>

      <p className={`font-sans text-sm mb-8 flex-grow font-bold ${isPc ? 'text-[#a1887f]' : 'text-[#5d4037]'}`}>
        {description}
      </p>

      <div className="w-full space-y-4">
        <div className={`text-[10px] font-pixel uppercase ${isPc ? 'text-[#5d4037]' : 'text-[#8b5e3c]'}`}>
          <Terminal className="w-3 h-3 inline mr-2" />
          {requirements}
        </div>
        
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
          <PixelButton variant={isPc ? 'leaf' : 'wood'} size="lg" className="w-full justify-center">
            <Download className="w-5 h-5 mr-2" />
            DOWNLOAD INSTALLER
          </PixelButton>
        </a>
      </div>
    </ParchmentPanel>
  );
};