import { MyPagination } from '@/components/molecules/pagination';
import { SelectStatus } from '@/components/molecules/select-status';
import { TableTodo } from '@/components/molecules/table-todo';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function Home() {
  return (
    <div className="container mx-auto px-5 max-w-5xl">
      <Heading className="py-5">TODO LIST</Heading>
      <form action="" className="flex gap-2">
        <Input type="text" placeholder="Add your text" className="w-5/6" />
        <Button className="w-1/6">Add</Button>
      </form>
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
      <TableTodo />
      <MyPagination />
    </div>
  );
}
