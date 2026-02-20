import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export const useGuildStats = () => {
  const [stats, setStats] = useState({
    coffees: 0,
    testers: 0,
    pledged: 0,
    bugs: 0,
    comments: 0,
    kickstarterGoal: 10000,
    coffeeGoal: 100
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 1. Contar Beta Testers
        const { count: testers } = await supabase
          .from('beta_signups')
          .select('*', { count: 'exact', head: true });

        // 2. Contar Bugs Reportados
        const { count: bugs } = await supabase
          .from('bug_reports')
          .select('*', { count: 'exact', head: true });

        // 3. Contar Entradas del Log (Comentarios)
        const { count: comments } = await supabase
          .from('adventurers_log')
          .select('*', { count: 'exact', head: true });

        // 4. Traer datos externos (Ko-fi / Kickstarter)
        const { data: externalStats } = await supabase
          .from('project_stats')
          .select('kofi_count, kickstarter_pledged')
          .single();

        setStats({
          testers: testers || 0,
          bugs: bugs || 0,
          comments: comments || 0,
          coffees: externalStats?.kofi_count || 0,
          pledged: externalStats?.kickstarter_pledged || 0,
          kickstarterGoal: 50000,
          coffeeGoal: 200
        });
      } catch (error) {
        console.error("Error fetching guild stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
};