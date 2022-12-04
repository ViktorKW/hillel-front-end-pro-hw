import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPosts } from '../../store/posts/postsSlice';
import PostsList from './PostsList';

export default function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}
