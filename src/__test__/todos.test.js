import React from 'react';
import { renderWithProviders } from './test-utils';
import Todo from '../components/Todo/Todo';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Todo test', async () => {
  renderWithProviders(<Todo />);
  expect(screen.getByTestId('todo-main')).toBeInTheDocument();
});
