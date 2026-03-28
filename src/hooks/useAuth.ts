import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';

export function useAuth() {
  const { user, role, isLoading, setUser, setLoading, signOut } = useAuthStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          role: 'parent',
          displayName: session.user.email ?? 'Parent',
        });
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          role: 'parent',
          displayName: session.user.email ?? 'Parent',
        });
      } else {
        signOut();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, role, isLoading };
}
