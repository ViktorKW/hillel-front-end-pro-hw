import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar/NavBar';
import Todo from '../components/Todo/Todo';

test('renders NavBar', () => {
  const result = render(<NavBar />, { wrapper: MemoryRouter });
  const navBarElement = result.container.querySelector('.navbar');
  expect(navBarElement).toBeInTheDocument();
});

// test('renders Todo', () => {
//   const result = render(<Todo />);
//   const todoElement = result.container.querySelector('.todo');
//   expect(todoElement).toBeInTheDocument();
// });
