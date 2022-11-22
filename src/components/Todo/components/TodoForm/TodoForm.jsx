import './style.scss';
import React, { useState } from 'react';

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
      <input
        className='todo-input'
        placeholder='Add a todo'
        value={task}
        onChange={handleChange}
      ></input>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default TodoForm;
