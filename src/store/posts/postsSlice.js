import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = 'http://localhost:3004/posts';

export const fetchAllPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async () => {
    const response = await axios.get(POSTS_URL);
    return response.data;
  }
);

export const addNewPost = createAsyncThunk('posts/addNewPost', async (item) => {
  const response = await axios.post(POSTS_URL, item);
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
    builder
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        console.log('Action.payload: ', action.payload);
        state.posts.push(action.payload);
      });
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
