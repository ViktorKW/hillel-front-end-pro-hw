import {
  ADD_TODO,
  ADD_TODOS,
  TOGGLE_TODO,
  REMOVE_TODO,
} from '../actions/todo_actions';

const initialState = {
  todos: [],
};

export default function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case ADD_TODOS:
      return { ...state, todos: [...state.todos, ...payload] };
    case TOGGLE_TODO:
      return { ...state, todos: [...payload] };
    case REMOVE_TODO:
      return { ...state, todos: [...payload] };
    default:
      return state;
  }
}
