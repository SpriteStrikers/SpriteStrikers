import { supabase } from "@/lib/supabase";
import { ImageIcon, Loader2, Paperclip, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { FormField, PixelButton } from "../atoms";


export const BugReportForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    summary: '',
    steps: '',
    specs: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (!selectedFile.type.startsWith('image/')) {
        toast.error(t('guild.bug.toast.invalid_type'));
        return;
      }

      if (selectedFile.size > 1024 * 1024) {
        toast.error(t('guild.bug.toast.too_heavy'));
        return;
      }

      setFile(selectedFile);
      toast.success(t('guild.bug.toast.attached'));
    }
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);

    let screenshotUrl = '';

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `bugs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('guild_evidence')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        toast.error(t('guild.bug.toast.upload_failed'));
        setLoading(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from('guild_evidence')
        .getPublicUrl(filePath);
        
      screenshotUrl = urlData.publicUrl;
    }

    const { error } = await supabase.from('bug_reports').insert([{
      summary: formData.summary,
      steps: formData.steps,
      specs: formData.specs,
      screenshot_url: screenshotUrl
    }]);

    setLoading(false);
    
    if (error) {
      console.error(error);
      toast.error(t('guild.bug.toast.error'));
    } else {
      toast.success(t('guild.bug.toast.success'));
      setFormData({ summary: '', steps: '', specs: '' });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4">
      <FormField 
        label={t('guild.bug.fields.summary.label')} 
        placeholder={t('guild.bug.fields.summary.placeholder')} 
        value={formData.summary}
        onChange={e => setFormData({...formData, summary: e.target.value})}
        required
      />
      
      <div className="space-y-3">
        <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">{t('guild.bug.fields.steps.label')}</label>
        <textarea 
          rows={4}
          required
          value={formData.steps}
          onChange={e => setFormData({...formData, steps: e.target.value})}
          className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none resize-none font-bold placeholder:text-[#8b5e3c]/50"
          placeholder={t('guild.bug.fields.steps.placeholder')}
        />
      </div>

      <FormField 
        label={t('guild.bug.fields.specs.label')} 
        placeholder={t('guild.bug.fields.specs.placeholder')} 
        value={formData.specs}
        onChange={e => setFormData({...formData, specs: e.target.value})}
      />

      <div className="space-y-3">
        <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">{t('guild.bug.fields.evidence')}</label>
        
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/webp"
          className="hidden"
        />

        {!file ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-4 border-dashed border-[#8b5e3c] p-8 text-center bg-[#dcc995]/30 hover:bg-[#dcc995] transition-all cursor-pointer group flex flex-col items-center justify-center gap-3"
          >
            <div className="p-3 bg-[#8b5e3c] rounded-full group-hover:scale-110 transition-transform">
                <ImageIcon className="w-6 h-6 text-[#f5e6be]" />
            </div>
            <p className="font-pixel text-xs text-[#8b5e3c]">{t('guild.bug.attach_btn')}</p>
          </div>
        ) : (
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
                <span>{t('guild.bug.btn_loading')}</span>
            </div>
        ) : t('guild.bug.btn')}
      </PixelButton>
    </form>
  );
};