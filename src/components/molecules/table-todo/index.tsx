import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SelectStatus } from '../select-status';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

export function TableTodo() {
  type todo = {
    id: number;
    title: string;
    status: string;
    priority: string;
  };
  const [todos, setTodos] = useState<todo[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log('Error fetching:', err));
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow>
            <TableCell className="font-medium">
              <Checkbox />
            </TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              <SelectStatus />
            </TableCell>
            <TableCell>
              <Badge variant="destructive">{todo.priority}</Badge>
            </TableCell>
            <TableCell className="flex gap-2">
              <Button variant="outline">Edit</Button>
              <Button variant="destructive">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
