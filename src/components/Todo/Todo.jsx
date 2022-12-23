import './style.scss';
import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

function Todo() {
  return (
    <div className='todo' data-testid='todo-main'>
      <TodoForm />
      <TodoList />
    </div>
  );
}
export default Todo;
