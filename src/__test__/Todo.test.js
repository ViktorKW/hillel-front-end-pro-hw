import React from 'react';
import Todo from '../components/Todo/Todo';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(<Todo />);
});

afterEach(cleanup);

function addTodoTest(description) {
  const inputTextBox = screen.getByTestId('todo-form-input');
  const submitButton = screen.getByTestId('todo-form-submit');

  fireEvent.change(inputTextBox, {
    target: { value: description },
  });
  fireEvent.click(submitButton);
}

describe('Todo test active and inactive class styles', () => {
  const todo_test_description = 'Test class style';

  it('should have inactive class style when TodoItem initially rendered', async () => {
    addTodoTest(todo_test_description);

    const todo_element = screen.getByText(todo_test_description);
    expect(todo_element).toHaveClass('inactive');
    expect(todo_element).not.toHaveClass('active');
  });

  it('should have active class style after click on inactive class style of TodoItem', async () => {
    const todo_element = screen.getByText(todo_test_description);
    fireEvent.click(todo_element);

    expect(todo_element).toHaveClass('active');
    expect(todo_element).not.toHaveClass('inactive');
  });
});

describe('Todo validate form input data', () => {
  it('should disable submit button and apply "error" style if form passing empty string', () => {
    const empty_string = '';
    addTodoTest(empty_string);

    const inputTextBox = screen.getByTestId('todo-form-input');
    const submitButton = screen.getByTestId('todo-form-submit');

    expect(inputTextBox).toHaveClass('error');
    expect(submitButton).toBeDisabled();
  });
});
