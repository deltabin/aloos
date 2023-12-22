import { readUserSession } from '@/lib/actions';
import { redirect } from 'next/navigation';
import SignInForm from '../_components/SignInForm';

const SignInPage = async () => {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect('/dashboard');
  }

  return (
    <div className='flex justify-center mt-52'>
      <div className='w-96'>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
