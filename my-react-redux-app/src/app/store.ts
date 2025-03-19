import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from '../features/library/librarySlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        library: libraryReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch