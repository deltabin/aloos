import { currentUser } from '@clerk/nextjs';

const DashboardPage = async () => {
  const user = await currentUser();

  console.log(user);
  return <main>123</main>;
};

export default DashboardPage;
