import './CommentsList.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsByPostId } from '../../../store/comments/commentsSlice';
import Comment from '../Comment/Comment';

export default function CommentsList({ postId }) {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsByPostId(postId));
  }, [postId]);

  const show_comments = (
    <>
      <h2>PostComments</h2>
      <br />
      <ul className='comments-ul'>
        {comments.map((comment) => (
          <>
            <Comment key={comment.id} comment={comment} author={'anonymous'} />
            <br />
          </>
        ))}
      </ul>
    </>
  );

  const no_comments = (
    <>
      <h2>No comments</h2>
    </>
  );

  return <div>{comments.length > 0 ? show_comments : no_comments}</div>;
}
