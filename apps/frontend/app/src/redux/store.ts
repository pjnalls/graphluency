import { configureStore } from '@reduxjs/toolkit';
import mockAuthenticatorReducer from './mock-authenticator';

export const store = configureStore({
    reducer: {
        mockAuthenticator: mockAuthenticatorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
