import React from 'react';
import Todo from '../components/Todo/Todo';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(<Todo />);
});

afterEach(cleanup);

describe('Todo test active and inactive class styles', () => {
  function addTodoToDOM(description) {
    const inputElement = screen.getByTestId('todo-form-input');
    const submitElement = screen.getByTestId('todo-form-submit');

    fireEvent.change(inputElement, {
      target: { value: description },
    });
    fireEvent.click(submitElement);
  }

  const todo_test_description = 'Test class style';

  it('should have inactive class style when initially rendered', async () => {
    addTodoToDOM(todo_test_description);

    const todo_element = screen.getByText(todo_test_description);
    expect(todo_element).toHaveClass('inactive');
    expect(todo_element).not.toHaveClass('active');
  });

  it('should have active class style after click on inactive class style todo', async () => {
    const todo_element = screen.getByText(todo_test_description);
    fireEvent.click(todo_element);

    expect(todo_element).toHaveClass('active');
    expect(todo_element).not.toHaveClass('inactive');
  });
});
