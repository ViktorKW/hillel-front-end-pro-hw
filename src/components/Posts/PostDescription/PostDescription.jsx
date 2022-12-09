import './style.scss';
import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Button, TextField, Typography } from '@mui/material';
import { editPost, fetchPost } from '../../../store/posts/postsSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PostCommentsList from '../PostCommentsList';
import AddPostCommentForm from '../AddPostCommentForm/AddPostCommentForm';

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
    <div className='post-description'>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' to='/'>
          All Posts
        </Link>
        <Typography color='text.primary'>{post.title}</Typography>
      </Breadcrumbs>
      <br />
      <br />
      <h1>{post.title}</h1>
      <br />
      <p className='post-description-text'>{post.description}</p>
      <br />
      <br />
      <PostCommentsList postId={id} />
      <br />
      <br />
      <AddPostCommentForm postId={id} />
    </div>
  );
}
