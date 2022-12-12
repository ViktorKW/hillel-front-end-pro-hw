import './Comment.scss';
import React from 'react';

export default function Comment({ comment, author }) {
  return (
    <div className='comment-conteiner'>
      <div className='author-info'>Author: {author}</div>
      <div className='comment'>{comment.body}</div>
    </div>
  );
}
