import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'http://localhost:3004/posts',
});

export const fetchAllPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await postsApi.get();
  return response.data;
});

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      console.log(state.posts);
    });
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
