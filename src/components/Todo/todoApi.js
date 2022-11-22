const TODO_URL = 'http://localhost:3004/todos';

export async function getTodos() {
  const res = await fetch(TODO_URL);
  return res.json();
}

export async function createTodo(todo) {
  const res = await fetch(TODO_URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function removeTodo(id) {
  const res = await fetch(`${TODO_URL}/${id}`, {
    method: 'DELETE',
  });

  return res.json();
}

export async function updateTodo(todo) {
  console.log('Toggle todo OBJ', todo);
  const res = await fetch(`${TODO_URL}/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' },
  });

  return res.json();
}
