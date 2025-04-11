import { AddTask } from '@/components/future/add-task';
import { MyPagination } from '@/components/molecules/pagination';
import { SelectStatus } from '@/components/molecules/select-status';
import { TableTodo } from '@/components/molecules/table-todo';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { addTodo, deleteTodo, getTodos, Todo } from '@/hook/use-new-task';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async (title: string) => {
    try {
      const newTodo = await addTodo(title);
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-5 max-w-5xl">
      <Heading className="py-5">TODO LIST</Heading>
      <AddTask onAdd={handleAddTask} />
      <div className="py-5 flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="outline">Select All</Button>
          <Button variant="destructive">Delete All</Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="">Filter:</label>
            <SelectStatus />
          </div>
          <form action="" className="flex gap-2">
            <Input placeholder="Enter your text" />
            <Button>
              <Search />
            </Button>
          </form>
        </div>
      </div>
      <TableTodo todos={todos} onDelete={handleDeleteTask} />
      <MyPagination />
    </div>
  );
}
