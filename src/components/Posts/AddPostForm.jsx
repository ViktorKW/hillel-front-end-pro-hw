import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../../store/posts/postsSlice';
import { useNavigate } from 'react-router-dom';

export default function AddPostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    preview: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
      )
      .required('Please enter url'),
    title: yup.string().required('Title is required'),
    description: yup
      .string()
      .min(5, 'must be at least 5 digits long')
      .required('Description is required'),
    author: yup.string().required('Author is required'),
  });

  const formik = useFormik({
    initialValues: {
      preview: '',
      title: '',
      description: '',
      author: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const new_post = {
        id: new Date().valueOf(),
        ...values,
      };
      dispatch(addNewPost(new_post));
      navigate(-1);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>ADD ITEM</h2>
      <TextField
        fullWidth
        label='picture url'
        variant='filled'
        id='preview'
        name='preview'
        value={formik.values.preview}
        onChange={formik.handleChange}
        error={formik.touched.preview && Boolean(formik.errors.preview)}
      ></TextField>

      <TextField
        fullWidth
        label='title'
        variant='filled'
        id='title'
        name='title'
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
      ></TextField>

      <TextField
        fullWidth
        label='description'
        variant='filled'
        id='description'
        name='description'
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
      ></TextField>

      <TextField
        fullWidth
        label='author'
        variant='filled'
        id='author'
        name='author'
        value={formik.values.author}
        onChange={formik.handleChange}
        error={formik.touched.author && Boolean(formik.errors.author)}
      ></TextField>

      <Button color='primary' type='submit' variant='contained'>
        Submit
      </Button>
    </form>
  );
}
