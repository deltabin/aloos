import { SignOut } from '@/components/sign-out';
import { readUserSession } from '@/lib/actions';

const DashboardPage = async () => {
  const { data } = await readUserSession();

  return (
    <main>
      {data.session?.user.email}
      <SignOut />
    </main>
  );
};

export default DashboardPage;
