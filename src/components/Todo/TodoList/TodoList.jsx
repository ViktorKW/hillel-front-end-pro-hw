import './style.scss';
import React, { useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodosAsyncThunk } from '../../../store/todos/todosSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodosAsyncThunk());
  }, []);

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
