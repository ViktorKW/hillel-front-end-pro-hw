import './Posts.scss';
import React from 'react';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';
import PostsList from './PostsList/PostsList';

export default function Posts() {
  return (
    <div className='posts-page'>
      <div className='title'>
        <h2>Posts Page</h2>
        <Link className='link-btn-text' to='posts/add'>
          <Button>Add Posts</Button>
        </Link>
      </div>
      <PostsList />
    </div>
  );
}
