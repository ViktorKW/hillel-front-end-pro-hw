import React from "react";
import "./style.scss";
function TodoItem({ todo }) {
  console.log(todo.description);
  return (
    <li className="todo-item">
      <p className="todo-description">{todo.description}</p>
    </li>
  );
}

export default TodoItem;
