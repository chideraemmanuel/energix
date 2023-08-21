import { configureStore } from '@reduxjs/toolkit';
import navigationMenuReducer, {
  NavMenuStateTypes,
} from './slices/navigationMenuSlice';
import signInReducer, { SignInStateTypes } from './slices/signInSlice';

export interface StoreTypes {
  navigationMenu: NavMenuStateTypes;
  signIn: SignInStateTypes;
}

const store = configureStore({
  reducer: {
    navigationMenu: navigationMenuReducer,
    signIn: signInReducer,
  },
});

export default store;
