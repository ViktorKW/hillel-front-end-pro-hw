import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
