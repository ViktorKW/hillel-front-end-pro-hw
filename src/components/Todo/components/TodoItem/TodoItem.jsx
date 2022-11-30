import React from 'react';
import { Button, ListItemButton, ListItemText } from '@mui/material';
import { Check, DeleteOutline } from '@mui/icons-material';
import './style.scss';
import { Link } from 'react-router-dom';
function TodoItem({ todo, toggleTodo, removeTodo }) {
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  function handleToggleClick() {
    toggleTodo(todo.id);
  }
  const path = `${todo.id}`;
  const empty_space = (
    <canvas className='empty-space' width={'10px'} height={'0px'}></canvas>
  );
  return (
    <ListItemButton className='todo-item'>
      <Link className='todo-description' to={path}>
        <ListItemText>{todo.task}</ListItemText>
      </Link>

      <div className='todo-menu'>
        <Check
          style={
            todo.complited
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
        />
        {empty_space}
        <Button variant='contained' onClick={handleToggleClick}>
          Toggle
        </Button>
        {empty_space}
        <Button
          variant='outlined'
          onClick={handleRemoveClick}
          startIcon={<DeleteOutline />}
        >
          Delete
        </Button>
      </div>
    </ListItemButton>
  );
}

export default TodoItem;
