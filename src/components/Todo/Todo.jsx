import './style.scss';
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import {
  addNewTodoRequest,
  getAllTodosRequest,
  removeTodoRequest,
  updateTodoRequest,
} from './todoApi';

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setAllTodos();
  }, []);

  async function setAllTodos() {
    const storageTodos = await getAllTodosRequest();

    if (storageTodos) {
      setTodos(storageTodos);
    }
  }

  function addTodo(todo) {
    setTodos([todo, ...todos]);
    addNewTodoRequest(todo);
  }

  function toggleTodo(id) {
    const new_todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          state: !todo.state,
        };
      }
      return todo;
    });
    setTodos(new_todos);

    const target_todo = new_todos.find((todo) => {
      return todo.id === id;
    });
    console.log(target_todo);
    updateTodoRequest(target_todo);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    removeTodoRequest(id);
  }

  return (
    <div className='todo' data-testid='todo'>
      <h1>Todo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}
export default Todo;
