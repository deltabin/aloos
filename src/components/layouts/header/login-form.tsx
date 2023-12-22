import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';

export const LoginForm = () => {
  return (
    <Button variant='outline' className='flex items-center gap-2'>
      <GithubIcon />
      Login
    </Button>
  );
};
