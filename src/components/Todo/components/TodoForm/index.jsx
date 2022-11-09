import "./style.scss";
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
    <form class="todo-form" onSubmit={handleSubmit}>
      <input
        class="todo-input"
        placeholder="Add a todo"
        value={todo.description}
        onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
