import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todosReducer from './reducers/todo_reducer';

const middlewares = [thunkMiddleware];
const store = createStore(todosReducer, applyMiddleware(...middlewares));

export default store;
