import './style.scss';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField, Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodoAsyncThunk } from '../../../store/todos/todosSlice';
import { getTodo } from '../../../store/todos/todoApi';

export default function TodoView() {
  const { id } = useParams();
  const [todo, setTodo] = useState({ task: '', complited: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      const todoInfo = await getTodo(id);
      setTodo(todoInfo);
    }
    init();
  }, [id]);

  const validationSchema = yup.object({
    task: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: todo,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const updated_todo = {
        id: id,
        task: values.task,
        complited: values.complited,
      };
      dispatch(updateTodoAsyncThunk(updated_todo));
      navigate('/todos');
    },
  });

  return (
    <div className='todo-details'>
      <h2>Edit todo #{id}</h2>
      <br />
      <form className='todo-details-form' onSubmit={formik.handleSubmit}>
        <div className='todo-form-data'>
          <TextField
            label='task'
            variant='filled'
            value={formik.values?.task}
            name='task'
            onChange={formik.handleChange}
            error={formik.touched.task && Boolean(formik.errors.task)}
          />
          <Checkbox
            name='complited'
            checked={formik.values?.complited}
            onChange={formik.handleChange}
          />
        </div>
        <canvas height={'5px'}></canvas>
        <div className='todo-form-buttons'>
          <Button type='submit' variant='contained'>
            Submit
          </Button>
          <Button onClick={() => navigate('/todos')}>Back</Button>
        </div>
      </form>
    </div>
  );
}
