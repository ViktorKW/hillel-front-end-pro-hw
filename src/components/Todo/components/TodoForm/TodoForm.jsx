import './style.scss';
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    description: '',
  });

  function handleChange(e) {
    setTodo({ ...todo, description: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.description.trim()) {
      addTodo({ ...todo, id: new Date().valueOf(), state: false });
      setTodo({ ...todo, description: '' });
    }
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        className='todo-input'
        placeholder='Add a todo'
        value={todo.description}
        onChange={handleChange}
      ></input>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default TodoForm;
