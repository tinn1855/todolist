// src/api/todoApi.ts

export interface Todo {
  id: number;
  title: string;
  status: 'completed' | 'incomplete';
  priority: 'low' | 'medium' | 'high';
}

const BASE_URL = 'http://localhost:3000/todos';

// GET tất cả todos
export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }
  return await res.json();
}

// POST thêm todo mới
export async function addTodo(title: string): Promise<Todo> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      status: 'incomplete', // mặc định
      priority: 'low', // mặc định
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to add todo');
  }
  return await res.json();
}

export async function deleteTodo(id: number): Promise<void> {
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error(`Failed to delete task with id ${id}`);
  }
}
