'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useTransition } from 'react';
import { signInWithEmailAndPassword } from '../_actions';

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password is required.'
  })
});

export default function SignInForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await signInWithEmailAndPassword(data);
      console.log(result);
      const { error } = JSON.parse(result);
      if (error?.message) {
        console.log(error.message);
        toast({
          variant: 'destructive',
          title: 'Fail to Login',
          description: (
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
              <code className='text-white'>{error.message}</code>
            </pre>
          )
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='example@gmail.com'
                  {...field}
                  type='email'
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder='password'
                  {...field}
                  type='password'
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full flex gap-2'>
          SignIn
          <Loader2 className={cn(' animate-spin', { hidden: !isPending })} />
        </Button>
      </form>
    </Form>
  );
}
