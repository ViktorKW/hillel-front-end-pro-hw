import './style.scss';
import React from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

function TodoForm({ addTodo }) {
  const validationSchema = yup.object({
    task: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      task: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      addTodo({
        id: new Date().valueOf(),
        task: values.task,
        complited: false,
      });
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
