import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Button, TextField, Typography } from '@mui/material';
import { editPost, fetchPost } from '../../store/posts/postsSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' to='/'>
          All Posts
        </Link>
        <Typography color='text.primary'>{post.title}</Typography>
      </Breadcrumbs>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <PostCommentsList postId={id} />
      <AddPostCommentForm postId={id} />
    </div>
  );
}
