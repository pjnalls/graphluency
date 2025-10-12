import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocale } from '../i18n/localizer';

export interface LocalizeState {
  locale: string;
}

export const initialState: LocalizeState = {
  locale: getLocale(),
};

const localizerSlice = createSlice({
  name: 'localizer',
  initialState,
  reducers: {
    localize: (state, action: PayloadAction<{ locale: string }>) => ({
      ...state,
      locale: action.payload.locale,
    }),
  },
});

export const { localize } = localizerSlice.actions;
export default localizerSlice.reducer;
