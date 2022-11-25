import './style.scss';
import React, { useEffect } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodosRequestAction,
  addTodoRequestAction,
  removeTodoRequestAction,
  toggleTodoRequestAction,
} from '../../store/actions/todo_actions';

const LOCAL_STORAGE_KEY = 'todos';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosRequestAction());
  }, []);

  function addTodo(todo) {
    dispatch(addTodoRequestAction(todo));
  }

  function toggleTodo(id) {
    dispatch(toggleTodoRequestAction(id));
  }

  function removeTodo(id) {
    dispatch(removeTodoRequestAction(id));
  }

  return (
    <div className='todo'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}
export default Todo;
