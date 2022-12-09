import './style.scss';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
export default function PostItem({ post }) {
  const edit_post_url = `posts/edit/${post.id}`;
  const view_post_url = `posts/view/${post.id}`;
  return (
    <div className='post-item'>
      <div className='buttons-container'>
        <Link to={view_post_url}>
          <Button>View</Button>
        </Link>
        <Link to={edit_post_url}>
          <Button>Edit</Button>
        </Link>
      </div>

      <Box component='img' className='image-box' src={post.preview} />

      <div className='post-info-container'>
        <h2>Title: {post.title}</h2>
        <p>Author: {post.author}</p>
      </div>
    </div>
  );
}
