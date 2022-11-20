import { createStore } from 'redux';
import todosReducer from './reducers/todo_reducer';

const store = createStore(todosReducer);

export default store;
