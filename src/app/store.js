import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/posts/postSlice";
import userReducers from '../features/users/userSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users:userReducers
  },
});