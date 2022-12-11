import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsByPostId } from '../../store/comments/commentsSlice';
import Comment from './Comment/Comment';

export default function PostCommentsList({ postId }) {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsByPostId(postId));
  }, [postId]);

  const show_comments = (
    <div>
      <h2>PostComments</h2>
      <br />
      <ul className='post-comments-list'>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );

  const no_comments = (
    <div>
      <h2>No comments</h2>
    </div>
  );

  return comments.length > 0 ? show_comments : no_comments;
}
