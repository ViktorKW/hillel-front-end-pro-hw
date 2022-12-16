import './style.scss';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos }) {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
