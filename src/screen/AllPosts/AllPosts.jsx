import { Button } from '@mui/material';
import React from 'react';
import Posts from '../../components/Posts/Posts';

export default function AllPosts() {
  return (
    <div>
      <div>
        <h5>Posts Page</h5>
        <Button>Add Posts</Button>
      </div>
      <Posts />
    </div>
  );
}
