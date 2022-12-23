const TODO_URL = 'http://localhost:3004/todos';

export async function getAllTodos() {
  const res = await fetch(TODO_URL);
  return res.json();
}

export async function addNewTodo(todo) {
  const res = await fetch(TODO_URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function removeTodo(todo) {
  const res = await fetch(`${TODO_URL}/${todo.id}`, {
    method: 'DELETE',
  });

  return res.json();
}

export async function getTodo(id) {
  const res = await fetch(`${TODO_URL}/${id}`);
  return res.json();
}

export async function updateTodo(todo) {
  const res = await fetch(`${TODO_URL}/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' },
  });

  return res.json();
}
