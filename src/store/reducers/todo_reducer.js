import {
  ADD_TODO,
  INIT_TODOS,
  TOGGLE_TODO,
  REMOVE_TODO,
} from '../actions/todo_actions';

const initialState = {
  todos: [],
};

export default function todosReducer(state = initialState, { type, payload }) {
  console.log(state);
  console.log(type);
  console.log(payload);
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
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
    default:
      return state;
  }
}
