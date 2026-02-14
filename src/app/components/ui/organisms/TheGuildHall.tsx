import { supabase } from '@/lib/supabase';
import { clsx } from 'clsx';
import { Bug, ImageIcon, Loader2, MessageSquare, Paperclip, Scroll, Trash2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { ParchmentPanel, PixelButton } from '../atoms';

const Tabs = [
  { id: 0, label: 'BETA TESTER ACCESS', icon: Scroll },
  { id: 1, label: 'BUG REPORT & GLITCHES', icon: Bug },
  { id: 2, label: 'TAVERN WHISPERS', icon: MessageSquare },
];

export const TheGuildHall = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-4 bg-[#2e1a0a] relative">
      {/* Decorative wood grain background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl text-[#f5e6be] mb-4 drop-shadow-[4px_4px_0_#3e2723]">
            THE GUILD HALL
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-20 bg-[#8b5e3c]" />
             <p className="font-pixel text-[10px] text-[#8b5e3c] uppercase tracking-[0.4em]">Community & Support</p>
             <div className="h-px w-20 bg-[#8b5e3c]" />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-0 relative z-20">
          {Tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'px-6 py-4 font-pixel text-[10px] transition-all relative border-4 border-b-0 flex items-center gap-3 outline-none',
                activeTab === tab.id 
                  ? 'bg-[#e9d5a1] border-[#8b5e3c] text-[#5d4037] pb-6 -mb-2 z-20' 
                  : 'bg-[#5d4037] border-[#3e2723] text-[#d7ccc8] hover:bg-[#6d4c41] hover:-translate-y-1'
              )}
            >
              <tab.icon className="w-4 h-4" />
              <span className="tracking-tight">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content Panel */}
        <ParchmentPanel variant="parchment" className="border-t-8 border-t-[#8b5e3c] relative z-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 0 && <BetaTesterForm />}
              {activeTab === 1 && <BugReportForm />}
              {activeTab === 2 && <FeedbackForm />}
            </motion.div>
          </AnimatePresence>
        </ParchmentPanel>
      </div>
    </section>
  );
};

// --- FORMULARIOS ---

// 1. BETA TESTER FORM
const BetaTesterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    identity: '',
    discord: '',
    email: '',
    steam: '',
    activity: 'Root Tactical Card Duels'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.from('beta_signups').insert([{
      identity: formData.identity,
      discord: formData.discord,
      email: formData.email,
      steam: formData.steam,
      favorite_activity: formData.activity
    }]);

    setLoading(false);
    if (error) {
      toast.error("The guild registry is closed momentarily. Try again.");
    } else {
      toast.success("Welcome to the Guild! We shall summon you soon.");
      setFormData({ identity: '', discord: '', email: '', steam: '', activity: 'Root Tactical Card Duels' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormField 
          label="Traveler Identity" 
          placeholder="e.g. Oak_Shield" 
          value={formData.identity}
          onChange={e => setFormData({...formData, identity: e.target.value})}
          required
        />
        <FormField 
          label="Discord Raven" 
          placeholder="username#0000" 
          value={formData.discord}
          onChange={e => setFormData({...formData, discord: e.target.value})}
        />
        <FormField 
          label="Email" 
          placeholder="traveler@guild.com" 
          type="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          required
        />
        <FormField 
          label="Steam User" 
          placeholder="traveler_id" 
          value={formData.steam}
          onChange={e => setFormData({...formData, steam: e.target.value})}
        />
      </div>
      <div className="space-y-3">
        <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">Favorite Forest Activity</label>
        <select 
          value={formData.activity}
          onChange={e => setFormData({...formData, activity: e.target.value})}
          className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none appearance-none cursor-pointer font-bold"
        >
          <option>Root Tactical Card Duels</option>
          <option>Dungeon Wood-carving</option>
          <option>Forest Auto-Battles</option>
          <option>Leaf Deckbuilding</option>
        </select>
      </div>
      <PixelButton variant="wood" size="lg" className="w-full" disabled={loading}>
        {loading ? <Loader2 className="animate-spin w-5 h-5 mx-auto"/> : "PLEDGE TO THE ROOTS"}
      </PixelButton>
    </form>
  );
};

// 2. BUG REPORT FORM
export const BugReportForm = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null); // Estado para el archivo
  const fileInputRef = useRef<HTMLInputElement>(null); // Referencia al input oculto

  const [formData, setFormData] = useState({
    summary: '',
    steps: '',
    specs: '',
  });

  // Manejar la selección del archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // VALIDACIÓN 1: Tipo de archivo
      if (!selectedFile.type.startsWith('image/')) {
        toast.error("That's not a sketch! Only images allowed.");
        return;
      }

      // VALIDACIÓN 2: Peso (1MB = 1024 * 1024 bytes)
      if (selectedFile.size > 1024 * 1024) {
        toast.error("Too heavy for the raven! Max size is 1MB.");
        return;
      }

      setFile(selectedFile);
      toast.success("Sketch attached!");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let screenshotUrl = '';

    // 1. SI HAY ARCHIVO, SUBIRLO PRIMERO
    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `bugs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('guild_evidence')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        toast.error("Failed to upload the sketch.");
        setLoading(false);
        return;
      }

      // Obtener la URL pública
      const { data: urlData } = supabase.storage
        .from('guild_evidence')
        .getPublicUrl(filePath);
        
      screenshotUrl = urlData.publicUrl;
    }

    // 2. GUARDAR EL REPORTE EN LA TABLA
    const { error } = await supabase.from('bug_reports').insert([{
      summary: formData.summary,
      steps: formData.steps,
      specs: formData.specs,
      screenshot_url: screenshotUrl // Guardamos la URL de Supabase (o vacío si no subió nada)
    }]);

    setLoading(false);
    
    if (error) {
      console.error(error);
      toast.error("The raven got lost in the storm. Try again.");
    } else {
      toast.success("Bug Report Scribed! Our blacksmiths are on it.");
      // Resetear todo
      setFormData({ summary: '', steps: '', specs: '' });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4">
      <FormField 
        label="Rot Summary" 
        placeholder="Where did the wood decay?" 
        value={formData.summary}
        onChange={e => setFormData({...formData, summary: e.target.value})}
        required
      />
      
      <div className="space-y-3">
        <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">Steps to Reproduce (Ink it down)</label>
        <textarea 
          rows={4}
          required
          value={formData.steps}
          onChange={e => setFormData({...formData, steps: e.target.value})}
          className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none resize-none font-bold placeholder:text-[#8b5e3c]/50"
          placeholder="1. Walk near the elder tree...&#10;2. Open the parchment...&#10;3. The leaves fall!"
        />
      </div>

      <FormField 
        label="Wagon Specs" 
        placeholder="RAM, GPU, Browser, OS" 
        value={formData.specs}
        onChange={e => setFormData({...formData, specs: e.target.value})}
      />

      {/* ZONA DE CARGA DE ARCHIVOS ESTILIZADA */}
      <div className="space-y-3">
        <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">Evidence (Optional - Max 1MB)</label>
        
        {/* Input oculto */}
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/webp"
          className="hidden"
        />

        {!file ? (
          // ESTADO: NO HAY ARCHIVO
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-4 border-dashed border-[#8b5e3c] p-8 text-center bg-[#dcc995]/30 hover:bg-[#dcc995] transition-all cursor-pointer group flex flex-col items-center justify-center gap-3"
          >
            <div className="p-3 bg-[#8b5e3c] rounded-full group-hover:scale-110 transition-transform">
                <ImageIcon className="w-6 h-6 text-[#f5e6be]" />
            </div>
            <p className="font-pixel text-xs text-[#8b5e3c]">CLICK TO ATTACH A SKETCH</p>
          </div>
        ) : (
          // ESTADO: ARCHIVO SELECCIONADO
          <div className="flex items-center justify-between bg-[#efe5fd] border-4 border-[#8b5e3c] p-4">
            <div className="flex items-center gap-3 overflow-hidden">
                <Paperclip className="w-5 h-5 text-[#5d4037] flex-shrink-0" />
                <span className="font-pixel text-xs text-[#5d4037] truncate max-w-[200px]">{file.name}</span>
                <span className="font-pixel text-[10px] text-[#8b5e3c]">({(file.size / 1024).toFixed(0)} KB)</span>
            </div>
            <button 
                type="button"
                onClick={() => {
                    setFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = '';
                }}
                className="p-2 hover:bg-red-200 rounded text-red-700 transition-colors"
            >
                <Trash2 className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      
      <PixelButton variant="wood" size="lg" className="w-full" disabled={loading}>
        {loading ? (
            <div className="flex items-center gap-2">
                <Loader2 className="animate-spin w-5 h-5"/>
                <span>SENDING RAVEN...</span>
            </div>
        ) : "SEND THE RAVEN"}
      </PixelButton>
    </form>
  );
};

// 3. FEEDBACK FORM (Tavern Whispers)
const FeedbackForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);

    const { error } = await supabase.from('tavern_whispers').insert([{
      message: message
    }]);

    setLoading(false);
    if (error) {
      toast.error("Your whisper faded away...");
    } else {
      toast.success("Wisdom shared with the elders!");
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4">
      <div className="space-y-3">
        <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">Tavern Wisdom & Visions</label>
        <textarea 
          rows={10}
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none resize-none font-bold placeholder:text-[#8b5e3c]/50"
          placeholder="Share your stories, feature ideas, or feedback for the future of the forest..."
        />
      </div>
      <PixelButton variant="wood" size="lg" className="w-full" disabled={loading}>
        {loading ? <Loader2 className="animate-spin w-5 h-5 mx-auto"/> : "SHARE WISDOM"}
      </PixelButton>
    </form>
  );
};

// UI UTILS
interface FormFieldProps {
  label: string; 
  placeholder: string; 
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormField = ({ label, placeholder, type = 'text', value, onChange, required }: FormFieldProps) => (
  <div className="space-y-3">
    <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">
      {label} {required && <span className="text-red-800">*</span>}
    </label>
    <input 
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none transition-colors font-bold placeholder:text-[#8b5e3c]/50"
      placeholder={placeholder}
    />
  </div>
);