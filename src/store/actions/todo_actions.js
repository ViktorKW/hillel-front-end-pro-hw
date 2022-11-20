export const ADD_TODO = '[TODO] add todo';
export const ADD_TODOS = '[TODO] add todos';
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
    type: ADD_TODOS,
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
  return function () {};
}
