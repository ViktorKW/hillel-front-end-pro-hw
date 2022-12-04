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

export const editPost = createAsyncThunk('posts/editPost', async (item) => {
  const response = await axios.put(`${POSTS_URL}/${item.id}`, item);
  return response.data;
});

export const fetchPost = async (id) => {
  const response = await axios.get(`${POSTS_URL}/${id}`);
  return response.data;
};

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
        state.posts.push(action.payload);
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.posts = state.posts.map((target) => {
          if (target.id === action.payload.id) {
            return action.payload;
          } else {
            return target;
          }
        });
      });
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
