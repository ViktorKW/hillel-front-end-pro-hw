import {
  ADD_TODO,
  INIT_TODOS,
  TOGGLE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from '../actions/todo_actions';

const initialState = {
  todos: [],
};

export default function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [payload, ...state.todos] };

    case INIT_TODOS:
      return { ...state, todos: [...payload] };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) {
            return {
              ...todo,
              complited: !todo.complited,
            };
          }
          return todo;
        }),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return payload;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}
