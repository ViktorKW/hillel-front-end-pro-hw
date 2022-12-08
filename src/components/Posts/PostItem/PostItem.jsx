import './style.scss';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
export default function PostItem({ post }) {
  const edit_post_url = `posts/edit/${post.id}`;
  const view_post_url = `posts/view/${post.id}`;
  return (
    <div className='post-item'>
      <Link to={view_post_url}>
        <Button>View</Button>
      </Link>
      <Link to={edit_post_url}>
        <Button>Edit</Button>
      </Link>
      <img src={post.preview} />
      <h6>{post.title}</h6>
      <p>{post.description}</p>
      <p>Author {post.author}</p>
    </div>
  );
}
