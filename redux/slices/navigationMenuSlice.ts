import { createSlice } from '@reduxjs/toolkit';

export interface NavMenuStateTypes {
  mobileMenuActive: boolean;
  dashboardNavigationDropdowns: {
    funding: 'active' | 'inactive';
    withdrawal: 'active' | 'inactive';
    partnership: 'active' | 'inactive';
  };
}

const initialState: NavMenuStateTypes = {
  mobileMenuActive: false,
  dashboardNavigationDropdowns: {
    funding: 'active',
    withdrawal: 'active',
    partnership: 'active',
  },
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
    closeAllDropdowns: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.funding = 'inactive';
      state.dashboardNavigationDropdowns.withdrawal = 'inactive';
      state.dashboardNavigationDropdowns.partnership = 'inactive';
    },
    openFundingDropdown: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.funding = 'active';
    },
    openWithdrawalDropdown: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.withdrawal = 'active';
    },
    openPartnershipDropdown: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.partnership = 'active';
    },
  },
});

export const {
  setMobileNavMenuStatus,
  closeAllDropdowns,
  openFundingDropdown,
  openWithdrawalDropdown,
  openPartnershipDropdown,
} = navigationMenuSlice.actions;

export default navigationMenuSlice.reducer;
