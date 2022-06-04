import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '@redux/slices/modal';
import { friendsApi } from '@redux/apis/friends';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(friendsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
