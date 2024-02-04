import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers';

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
