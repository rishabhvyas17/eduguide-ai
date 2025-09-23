import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import studentSlice from './slices/studentSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    students: studentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});
