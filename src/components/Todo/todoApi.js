const TODO_URL = 'http://localhost:3004/todos';

export async function getAllTodosRequest() {
  const res = await fetch(TODO_URL);
  return res.json();
}

export async function addNewTodoRequest(todo) {
  const res = await fetch(TODO_URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function removeTodoRequest(todo) {
  const res = await fetch(`${TODO_URL}/${todo.id}`, {
    method: 'DELETE',
  });

  return res.json();
}

export async function getTodoRequest(id) {
  const res = await fetch(`${TODO_URL}/${id}`);
  return res.json();
}

export async function updateTodoRequest(todo) {
  const res = await fetch(`${TODO_URL}/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' },
  });

  return res.json();
}
