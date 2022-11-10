import "./style.scss";
import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul class="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
