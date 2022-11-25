import React from 'react';
import { Button, ListItemButton, ListItemText } from '@mui/material';

import './style.scss';
import { Link, Outlet } from 'react-router-dom';
function TodoItem({ todo, toggleTodo, removeTodo }) {
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  const path = `${todo.id}`;
  return (
    <ListItemButton className='todo-item'>
      <Link className='todo-description' to={path}>
        <ListItemText>{todo.task}</ListItemText>
      </Link>

      <canvas className='empty-space' width={'10px'} height={'0px'}></canvas>

      <Button variant='contained' onClick={handleRemoveClick}>
        Delete
      </Button>
    </ListItemButton>
  );
}

export default TodoItem;
