import { createSlice } from '@reduxjs/toolkit';

export interface NavMenuStateTypes {
  mobileMenuActive: boolean;
}

const initialState = {
  mobileMenuActive: false,
};

const navigationMenuSlice = createSlice({
  name: 'navigation menu',
  initialState,
  reducers: {
    setMobileNavMenuStatus: (
      state: NavMenuStateTypes,
      action: { payload: 'active' | 'inactive' }
    ) => {
      if (action.payload === 'active') {
        state.mobileMenuActive = true;
      } else {
        state.mobileMenuActive = false;
      }
    },
  },
});

export const { setMobileNavMenuStatus } = navigationMenuSlice.actions;

export default navigationMenuSlice.reducer;
