import { configureStore } from '@reduxjs/toolkit';
import navigationMenuReducer, {
  NavMenuStateTypes,
} from './slices/navigationMenuSlice';

export interface StoreTypes {
  navigationMenu: NavMenuStateTypes;
}

const store = configureStore({
  reducer: {
    navigationMenu: navigationMenuReducer,
  },
});

export default store;
