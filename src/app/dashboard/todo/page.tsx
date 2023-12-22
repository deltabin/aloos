import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { readTodo } from './_actions';
import CreateForm from './_components/create-form';

export default async function Page() {
  // const { data } = await readUserSession();

  // if (!data.session) {
  //   return redirect('/signin');
  // }

  const { data: todos } = await readTodo();

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 space-y-5'>
        <CreateForm />

        {todos?.map((todo, index) => {
          return (
            <div key={index} className='flex items-center gap-6'>
              <h1
                className={cn({
                  'line-through': todo.completed
                })}
              >
                {todo.title}
              </h1>

              <Button>delete</Button>
              <Button>Update</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
