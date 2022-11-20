import './style.scss';
import React, { useEffect } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoAction,
  addTodosAction,
  toggleTodoAction,
  removeTodoAction,
} from '../../store/actions/todo_actions';

const LOCAL_STORAGE_KEY = 'todos';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      dispatch(addTodosAction(storageTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    dispatch(addTodoAction(todo));
  }

  function toggleTodo(id) {
    dispatch(toggleTodoAction(id));
  }

  function removeTodo(id) {
    dispatch(removeTodoAction(id));
  }

  return (
    <div className='todo'>
      <h1>Todo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}
export default Todo;
