import './style.scss';
import React from 'react';

export default function Comment({ comment }) {
  return <div className='comment'>{comment.body}</div>;
}
