import './PostItem.scss';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

export default function PostItem({ post }) {
  const edit_post_url = `posts/edit/${post.id}`;
  const view_post_url = `posts/view/${post.id}`;

  const mui_button_style = { backgroundColor: 'white' };

  return (
    <div className='post-item'>
      <Box component='img' className='image-box' src={post.preview} />
      <div className='buttons-container'>
        <Link to={view_post_url}>
          <Button style={mui_button_style} variant='outlined'>
            View
          </Button>
        </Link>
        <Link to={edit_post_url}>
          <Button style={mui_button_style} variant='outlined'>
            Edit
          </Button>
        </Link>
      </div>

      <div className='post-info-container'>
        <h2>Title: {post.title}</h2>
        <p>Author: {post.author}</p>
      </div>
    </div>
  );
}
