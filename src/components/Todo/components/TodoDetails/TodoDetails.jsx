import './style.scss';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getTodoRequestAction,
  updateTodoRequestAction,
} from '../../../../store/actions/todo_actions';

export default function TodoDetails() {
  const { id } = useParams();
  const [task, setTask] = useState('');
  const [complited, setComplited] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      const todoInfo = await dispatch(getTodoRequestAction(id));
      setTask(todoInfo.task);
      setComplited(todoInfo.complited);
    }
    init();
  }, [id]);

  function onChangeTask(event) {
    setTask(event.target.value);
  }

  function onChangeComplited(event) {
    setComplited(event.target.checked);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (task.trim()) {
      const edited_todo = {
        id: id,
        task: task,
        complited: complited,
      };
      dispatch(updateTodoRequestAction(edited_todo));
      navigate(-1);
    }
  }
  return (
    <div className='todo-details'>
      <h2>Edit todo #{id}</h2>
      <br />
      <form className='todo-details-form' onSubmit={handleSubmit}>
        <div className='todo-form-data'>
          <TextField
            label='task'
            variant='filled'
            value={task}
            onChange={onChangeTask}
            required
          />
          <input
            type={'checkbox'}
            checked={complited}
            onChange={onChangeComplited}
          />
        </div>
        <canvas height={'5px'}></canvas>
        <div className='todo-form-buttons'>
          <Button type='submit' variant='contained'>
            Submit
          </Button>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </form>
    </div>
  );
}
