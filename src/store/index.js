import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/commentsSlice';
import postsReducer from './posts/postsSlice';
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});
