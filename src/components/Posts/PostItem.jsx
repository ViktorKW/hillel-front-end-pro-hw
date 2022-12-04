import React from 'react';

export default function PostItem({ post }) {
  return (
    <div>
      <img src={post.preview} />
      <h6>{post.title}</h6>
      <p>{post.description}</p>
      <p>Author {post.author}</p>
    </div>
  );
}
