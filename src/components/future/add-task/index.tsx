import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TaskInputProps {
  onAdd: (title: string) => void;
}

export function AddTask({ onAdd }: TaskInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) {
      onAdd(trimmed);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <Input
        placeholder="Add your task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-5/6"
      />
      <Button type="submit" className="w-1/6">
        Add
      </Button>
    </form>
  );
}
