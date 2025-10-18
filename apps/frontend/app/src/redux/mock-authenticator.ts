import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MockAuthenticatorState {
  isAuthenticated: boolean;
}

export const initialState: MockAuthenticatorState = {
  isAuthenticated: false,
};

const mockAuthenticatorSlice = createSlice({
  name: 'mock-authenticator',
  initialState,
  reducers: {
    mockAuthenticator: (state, action: PayloadAction<MockAuthenticatorState>) => ({
      ...state,
      isAuthenticated: action.payload.isAuthenticated,
    }),
  },
});

export const { mockAuthenticator } = mockAuthenticatorSlice.actions;
export default mockAuthenticatorSlice.reducer;
