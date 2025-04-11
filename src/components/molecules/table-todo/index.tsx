// components/molecules/TableTodo.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Todo } from '@/hook/use-new-task';

interface TableTodoProps {
  todos: Todo[];
}

export function TableTodo({ todos }: TableTodoProps) {
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
          <TableRow key={todo.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              <Badge
                variant={todo.status === 'completed' ? 'default' : 'secondary'}
              >
                {todo.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  todo.priority === 'high'
                    ? 'destructive'
                    : todo.priority === 'medium'
                    ? 'outline'
                    : 'secondary'
                }
              >
                {todo.priority}
              </Badge>
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
