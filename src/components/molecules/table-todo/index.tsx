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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface TableTodoProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

export function TableTodo({ todos, onDelete }: TableTodoProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (id: number) => {
    setSelectedId(id);
    setDialogOpen(true);
  };

  const handleCancel = () => {
    setDialogOpen(false);
    setSelectedId(null);
  };

  const handleConfirm = () => {
    if (selectedId !== null) {
      onDelete(selectedId);
      setDialogOpen(false);
      setSelectedId(null);
    }
    setTimeout(() => setSelectedId(null), 100);
  };
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
                variant={
                  todo.status === 'completed' ? 'default' : 'destructive'
                }
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
                    : 'default'
                }
              >
                {todo.priority}
              </Badge>
            </TableCell>
            <TableCell className="flex gap-2">
              <Button variant="outline">Edit</Button>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="destructive"
                    onClick={() => setSelectedId(todo.id)}
                  >
                    Delete
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete Task</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete this task? This action
                      cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleConfirm}>
                      Confirm
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
