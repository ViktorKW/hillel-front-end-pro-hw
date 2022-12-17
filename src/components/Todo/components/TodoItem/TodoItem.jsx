import React from 'react';
import './style.scss';
function TodoItem({ todo, toggleTodo, removeTodo }) {
  function handleToggleStateClick() {
    toggleTodo(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <li className='todo-item' data-testid='todo-item'>
      <p
        className={`todo-description ${todo.state ? 'active' : 'inactive'}`}
        onClick={handleToggleStateClick}
      >
        {todo.description}
      </p>
      <button onClick={handleRemoveClick}>Delete</button>
    </li>
  );
}

export default TodoItem;
