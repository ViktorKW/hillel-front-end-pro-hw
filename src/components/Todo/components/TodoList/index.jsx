import React from "react";
import TodoItem from "../TodoItem";

function TodoList({ todos }) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
