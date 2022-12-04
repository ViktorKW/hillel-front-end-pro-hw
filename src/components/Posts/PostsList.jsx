import React from 'react';
import PostItem from './PostItem';

export default function PostsList({ posts }) {
  return (
    <ul className='posts-list'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
