import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { FormField, PixelButton } from "../atoms";


export const BetaTesterForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    identity: '',
    discord: '',
    email: '',
    steam: '',
    genre: t('guild.beta.genres.0')
  });

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.from('beta_signups').insert([{
      identity: formData.identity,
      discord: formData.discord,
      email: formData.email,
      steam: formData.steam,
      favorite_genre: formData.genre 
    }]);

    setLoading(false);
    if (error) {
      toast.error(t('guild.beta.toast.error'));
    } else {
      toast.success(t('guild.beta.toast.success'));
      setFormData({ identity: '', discord: '', email: '', steam: '', genre: t('guild.beta.genres.0') });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormField 
          label={t('guild.beta.fields.identity.label')} 
          placeholder={t('guild.beta.fields.identity.placeholder')} 
          value={formData.identity}
          onChange={e => setFormData({...formData, identity: e.target.value})}
          required
        />
        <FormField 
          label={t('guild.beta.fields.discord.label')} 
          placeholder={t('guild.beta.fields.discord.placeholder')} 
          value={formData.discord}
          onChange={e => setFormData({...formData, discord: e.target.value})}
        />
        <FormField 
          label={t('guild.beta.fields.email.label')} 
          placeholder={t('guild.beta.fields.email.placeholder')} 
          type="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          required
        />
        <FormField 
          label={t('guild.beta.fields.steam.label')} 
          placeholder={t('guild.beta.fields.steam.placeholder')} 
          value={formData.steam}
          onChange={e => setFormData({...formData, steam: e.target.value})}
        />
      </div>
      <div className="space-y-3">
        <label className="block font-pixel text-xs text-[#5d4037] uppercase font-bold">{t('guild.beta.fields.genre.label')}</label>
        <select 
          value={formData.genre}
          onChange={e => setFormData({...formData, genre: e.target.value})}
          className="w-full bg-[#dcc995] border-4 border-[#bca772] text-[#3e2723] p-5 font-sans focus:border-[#8b5e3c] outline-none appearance-none cursor-pointer font-bold"
        >
          <option value={t('guild.beta.genres.0')}>{t('guild.beta.genres.0')}</option>
          <option value={t('guild.beta.genres.1')}>{t('guild.beta.genres.1')}</option>
          <option value={t('guild.beta.genres.2')}>{t('guild.beta.genres.2')}</option>
          <option value={t('guild.beta.genres.3')}>{t('guild.beta.genres.3')}</option>
          <option value={t('guild.beta.genres.4')}>{t('guild.beta.genres.4')}</option>
        </select>
      </div>
      <PixelButton variant="wood" size="lg" className="w-full" disabled={loading}>
        {loading ? <Loader2 className="animate-spin w-5 h-5 mx-auto"/> : t('guild.beta.btn')}
      </PixelButton>
    </form>
  );
};