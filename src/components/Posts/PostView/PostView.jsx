import './PostView.scss';
import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { fetchPost } from '../../../store/posts/postsSlice';
import { Link, useParams } from 'react-router-dom';
import CommentsList from '../CommentsList';
import CommentForm from '../CommentForm/CommentForm';

export default function PostView() {
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

      <CommentsList postId={id} />

      <br />
      <br />

      <CommentForm postId={id} />
    </div>
  );
}
