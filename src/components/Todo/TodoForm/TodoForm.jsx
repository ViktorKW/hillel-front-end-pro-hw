import './style.scss';
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [description, setDescription] = useState('');
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const value = e.target.value;

    if (value !== ' ') {
      setDescription(value);
      setIsError(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim()) {
      const new_todo = {
        id: new Date().valueOf(),
        description: description,
        state: false,
      };
      addTodo(new_todo);

      setDescription('');
    } else {
      setIsError(true);
    }
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        data-testid='todo-form-input'
        className={`todo-input ${isError ? 'error' : ''}`}
        placeholder='Add a todo'
        value={description}
        onChange={handleChange}
      ></input>
      <button type='submit' data-testid='todo-form-submit' disabled={isError}>
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
