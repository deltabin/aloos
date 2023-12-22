import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Button } from './ui/button';

export const SignOut = () => {
  const logout = async () => {
    'use server';
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect('/signin');
  };

  return (
    <form action={logout}>
      <Button>SignOut</Button>
    </form>
  );
};
