import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Breadcrumbs, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editPost, fetchPost } from '../../store/posts/postsSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditPostForm() {
  const { id } = useParams();
  const [post, setPost] = useState({
    preview: '',
    title: '',
    description: '',
    author: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      const post_info = await fetchPost(id);
      setPost(post_info);
    }
    init();
  }, [id]);
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
    initialValues: post,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(editPost({ id: id, ...values }));
      navigate(-1);
    },
  });
  return (
    <div className='edit-post-page'>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' to='/'>
          All Posts
        </Link>
        <Typography color='text.primary'>{post.title}</Typography>
      </Breadcrumbs>

      <form onSubmit={formik.handleSubmit}>
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
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
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
    </div>
  );
}
