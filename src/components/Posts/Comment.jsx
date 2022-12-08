import React from 'react';

export default function Comment({ comment }) {
  return (
    <div>
      <div>id: {comment.id}</div>
      <div>postId: {comment.postId}</div>
      <div>body: {comment.body}</div>
    </div>
  );
}
