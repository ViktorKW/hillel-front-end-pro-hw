import './style.scss';
import React from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addNewTodoAsyncThunk } from '../../../store/todos/todosSlice';

function TodoForm() {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    task: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      task: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const new_todo = {
        id: new Date().valueOf(),
        task: values.task,
        complited: false,
      };
      dispatch(addNewTodoAsyncThunk(new_todo));
      resetForm();
    },
  });

  return (
    <form className='todo-form' onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        label='Add a todo'
        variant='filled'
        id='task'
        name='task'
        value={formik.values.task}
        onChange={formik.handleChange}
        error={formik.touched.task && Boolean(formik.errors.task)}
      ></TextField>

      <Button color='primary' type='submit' variant='contained'>
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
