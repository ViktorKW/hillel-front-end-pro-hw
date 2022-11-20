import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './components/Todo/Todo';
import './style.scss';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Todo />
  </Provider>
);
