import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COMMENTS_URL = 'http://localhost:3004/comments';

export const fetchCommentsByPostId = createAsyncThunk(
  'comments/fetchCommentsByPostId',
  async (postId) => {
    const response = await axios.get(`${COMMENTS_URL}/?postId=${postId}`);
    return response.data;
  }
);

export const addNewComment = createAsyncThunk(
  'comments/addNewComment',
  async (item) => {
    const response = await axios.post(COMMENTS_URL, item);
    return response.data;
  }
);

export const fetchComment = async (id) => {
  const response = await axios.get(`${COMMENTS_URL}/${id}`);
  return response.data;
};

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
