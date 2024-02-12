import { configureStore } from '@reduxjs/toolkit';
import { blogSlice } from '../../blog/context/blogSlice';

export const store = configureStore({
    reducer: {
        blog: blogSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;