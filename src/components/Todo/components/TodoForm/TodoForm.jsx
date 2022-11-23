import './style.scss';
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      addTodo({
        id: new Date().valueOf(),
        task: task,
        complited: false,
      });
      setTask('');
    }
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label='Add a todo'
        variant='filled'
        value={task}
        onChange={handleChange}
      ></TextField>
      <Button type='submit' variant='contained'>
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
