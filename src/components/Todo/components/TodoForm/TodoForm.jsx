import './style.scss';
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [description, setDescription] = useState('');

  function handleChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim()) {
      addTodo({
        id: new Date().valueOf(),
        description: description,
        state: false,
      });
      setDescription('');
    }
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        className='todo-input'
        placeholder='Add a todo'
        value={description}
        onChange={handleChange}
      ></input>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default TodoForm;
