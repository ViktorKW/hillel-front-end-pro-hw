import React from 'react';
import { Button, ListItemButton, ListItemText } from '@mui/material';

import './style.scss';
function TodoItem({ todo, toggleTodo, removeTodo }) {
  function handleToggleStateClick() {
    toggleTodo(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <ListItemButton className='todo-item'>
      <ListItemText
        className='todo-description'
        style={{
          backgroundColor: todo.complited ? 'green' : 'blue',
        }}
        onClick={handleToggleStateClick}
      >
        {todo.task}
      </ListItemText>

      <canvas className='empty-space' width={'10px'} height={'0px'}></canvas>

      <Button variant='contained' onClick={handleRemoveClick}>
        Delete
      </Button>
    </ListItemButton>
  );
}

export default TodoItem;
