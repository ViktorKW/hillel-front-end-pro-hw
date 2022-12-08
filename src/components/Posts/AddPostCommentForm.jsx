import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewComment } from '../../store/comments/commentsSlice';
import { Button, TextField } from '@mui/material';

export default function AddPostCommentForm({ postId }) {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    body: yup.string().required('Please type your comment'),
  });

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const new_comment = {
        id: new Date().valueOf(),
        ...values,
        postId: postId,
      };
      dispatch(addNewComment(new_comment));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>ADD Comment ITEM</h2>
      <TextField
        fullWidth
        label='Add some text :D'
        variant='filled'
        id='body'
        name='body'
        value={formik.values.body}
        onChange={formik.handleChange}
        error={formik.touched.body && Boolean(formik.errors.body)}
      ></TextField>

      <Button color='primary' type='submit' variant='contained'>
        Submit
      </Button>
    </form>
  );
}
