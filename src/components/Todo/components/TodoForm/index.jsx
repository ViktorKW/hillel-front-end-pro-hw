import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    description: "",
    state: false,
  });

  function handleChange(e) {
    setTodo({ ...todo, description: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.description.trim()) {
      addTodo({ ...todo, id: new Date().valueOf() });
      setTodo({ ...todo, description: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add a todo"
        value={todo.description}
        onChange={handleChange}
      ></input>
      <button type="submit">Button</button>
    </form>
  );
}

export default TodoForm;
