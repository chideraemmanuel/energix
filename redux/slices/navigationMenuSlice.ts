import { createSlice } from '@reduxjs/toolkit';

export interface NavMenuStateTypes {
  mobileMenuActive: boolean;
  dashboardNavigationDropdowns: {
    funding: 'active' | 'inactive';
    withdrawal: 'active' | 'inactive';
    partnership: 'active' | 'inactive';
  };
  dashoardSidebarActive: boolean;
}

const initialState: NavMenuStateTypes = {
  mobileMenuActive: false,
  dashboardNavigationDropdowns: {
    funding: 'inactive',
    withdrawal: 'inactive',
    partnership: 'inactive',
  },
  dashoardSidebarActive: true,
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
    closeFundingDropdown: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.funding = 'inactive';
    },
    openWithdrawalDropdown: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.withdrawal = 'active';
    },
    closeWithdrawalDropdown: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.withdrawal = 'inactive';
    },
    openPartnershipDropdown: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.partnership = 'active';
    },
    closePartnershipDropdown: (state: NavMenuStateTypes) => {
      state.dashboardNavigationDropdowns.partnership = 'inactive';
    },
    openDashboardSidebar: (state: NavMenuStateTypes) => {
      state.dashoardSidebarActive = true;
    },
    closeDashboardSidebar: (state: NavMenuStateTypes) => {
      state.dashoardSidebarActive = false;
    },
  },
});

export const {
  setMobileNavMenuStatus,
  closeAllDropdowns,
  openFundingDropdown,
  openWithdrawalDropdown,
  openPartnershipDropdown,
  closeFundingDropdown,
  closeWithdrawalDropdown,
  closePartnershipDropdown,
  openDashboardSidebar,
  closeDashboardSidebar,
} = navigationMenuSlice.actions;

export default navigationMenuSlice.reducer;
