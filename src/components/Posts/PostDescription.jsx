import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { editPost, fetchPost } from '../../store/posts/postsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import PostCommentsList from './PostCommentsList';
import AddPostCommentForm from './AddPostCommentForm';

export default function PostDescription() {
  const { id } = useParams();
  const [post, setPost] = useState({
    preview: '',
    title: '',
    description: '',
    author: '',
  });

  useEffect(() => {
    async function init() {
      const post_info = await fetchPost(id);
      setPost(post_info);
    }
    init();
  }, [id]);

  return (
    <div>
      <h1>VIEW</h1>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <PostCommentsList postId={id} />
      <AddPostCommentForm postId={id} />
    </div>
  );
}
