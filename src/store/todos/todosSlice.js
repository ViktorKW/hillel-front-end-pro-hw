import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addNewTodo, getAllTodos, removeTodo, updateTodo } from './todoApi';

export const getAllTodosAsyncThunk = createAsyncThunk(
  'todos/getAllTodos',
  getAllTodos
);

export const addNewTodoAsyncThunk = createAsyncThunk(
  'todos/addNewTodo',
  addNewTodo
);

export const updateTodoAsyncThunk = createAsyncThunk(
  'todos/updateTodo',
  updateTodo
);

export const removeTodoAsyncThunk = createAsyncThunk(
  'todos/removeTodo',
  removeTodo
);

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodosAsyncThunk.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addNewTodoAsyncThunk.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodoAsyncThunk.fulfilled, (state, action) => {
        state.todos = state.todos.map((target) => {
          if (target.id === action.payload.id) {
            return action.payload;
          } else {
            return target;
          }
        });
      })
      .addCase(removeTodoAsyncThunk.fulfilled, (state, action) => {
        state.todos.splice(action.payload.id, 1);
      });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
