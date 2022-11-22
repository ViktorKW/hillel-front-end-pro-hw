import {
  createTodo,
  removeTodo,
  getTodos,
  updateTodo,
} from '../../components/Todo/todoApi';

export const ADD_TODO = '[TODO] add todo';
export const INIT_TODOS = '[TODO] add todos';
export const REMOVE_TODO = '[TODO] remove todo';
export const TOGGLE_TODO = '[TODO] toggle todo';

export function addTodoAction(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function addTodosAction(payload) {
  return {
    type: INIT_TODOS,
    payload,
  };
}

export function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
}

export function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export function getTodosRequestAction() {
  return async function (dispatch) {
    const todos = await getTodos();
    dispatch(addTodosAction(todos));
  };
}

export function addTodoRequestAction(todo) {
  return async function (dispatch) {
    const result = await createTodo(todo);
    dispatch(addTodoAction(result));
  };
}

export function removeTodoRequestAction(id) {
  return async function (dispatch) {
    await removeTodo(id);
    dispatch(removeTodoAction(id));
  };
}

export function toggleTodoRequestAction(id) {
  return async function (dispatch, getState) {
    const { todos } = getState();
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todo, complited: !todo.complited };
    await updateTodo(updatedTodo);

    dispatch(toggleTodoAction(updatedTodo.id));
  };
}
