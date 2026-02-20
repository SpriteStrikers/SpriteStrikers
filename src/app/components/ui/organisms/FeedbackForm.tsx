import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { PixelButton } from "../atoms";


export const FeedbackForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);

    const { error } = await supabase.from('tavern_whispers').insert([{
      message: message
    }]);

    setLoading(false);
    if (error) {
      toast.error(t('guild.feedback.toast.error'));
    } else {
      toast.success(t('guild.feedback.toast.success'));
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4">
      <div className="space-y-3">
        <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">{t('guild.feedback.label')}</label>
        <textarea 
          rows={10}
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none resize-none font-bold placeholder:text-[#8b5e3c]/50"
          placeholder={t('guild.feedback.placeholder')}
        />
      </div>
      <PixelButton variant="wood" size="lg" className="w-full" disabled={loading}>
        {loading ? <Loader2 className="animate-spin w-5 h-5 mx-auto"/> : t('guild.feedback.btn')}
      </PixelButton>
    </form>
  );
};