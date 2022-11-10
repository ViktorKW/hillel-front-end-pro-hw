import React from 'react';
import './style.scss';
function TodoItem({ todo, toggleTodo, removeTodo }) {
  function handleToggleStateClick() {
    toggleTodo(todo.id);
    console.log('toggled');
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <li className='todo-item'>
      <p
        className='todo-description'
        style={{
          backgroundColor: todo.state ? 'green' : 'blue',
        }}
        onClick={handleToggleStateClick}
      >
        {todo.description}
      </p>
      <button onClick={handleRemoveClick}>Delete</button>
    </li>
  );
}

export default TodoItem;
