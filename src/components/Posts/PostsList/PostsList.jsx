import './PostsList.scss';
import React, { useEffect } from 'react';
import PostItem from '../PostItem/PostItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPosts } from '../../../store/posts/postsSlice';

export default function PostsList() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <div className='posts-list'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
