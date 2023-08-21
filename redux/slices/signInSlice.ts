import { createSlice } from '@reduxjs/toolkit';

export interface SignInStateTypes {
  signUp: {
    name: {
      value: string;
      error: string | null;
    };
    email: {
      value: string;
      error: string | null;
    };
    password: {
      value: string;
      error: string | null;
    };
    confirmPassword: {
      value: string;
      error: string | null;
    };
  };
  login: {
    email: {
      value: string;
      error: string | null;
    };
    password: {
      value: string;
      error: string | null;
    };
  };
  signUpModalActive: boolean;
}

const initialState: SignInStateTypes = {
  signUp: {
    name: {
      value: '',
      error: null,
    },
    email: {
      value: '',
      error: null,
    },
    password: {
      value: '',
      error: null,
    },
    confirmPassword: {
      value: '',
      error: null,
    },
  },
  login: {
    email: {
      value: '',
      error: null,
    },
    password: {
      value: '',
      error: null,
    },
  },
  signUpModalActive: true,
};

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setSignUpName: (state: SignInStateTypes, action: { payload: string }) => {
      state.signUp.name.value = action.payload;
    },
    setSignUpEmail: (state: SignInStateTypes, action: { payload: string }) => {
      state.signUp.email.value = action.payload;
    },
    setSignUpPassword: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.signUp.password.value = action.payload;
    },
    setSignUpConfirmPassword: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.signUp.confirmPassword.value = action.payload;
    },
    setLoginEmail: (state: SignInStateTypes, action: { payload: string }) => {
      state.login.email.value = action.payload;
    },
    setLoginPassword: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.login.password.value = action.payload;
    },
    // ERRORS
    setSignUpNameError: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.signUp.name.error = action.payload;
    },
    setSignUpEmailError: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.signUp.email.error = action.payload;
    },
    setSignUpPasswordError: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.signUp.password.error = action.payload;
    },
    setSignUpConfirmPasswordError: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.signUp.confirmPassword.error = action.payload;
    },
    setLoginEmailError: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.login.email.error = action.payload;
    },
    setLoginPasswordError: (
      state: SignInStateTypes,
      action: { payload: string }
    ) => {
      state.login.password.error = action.payload;
    },
    clearSignUpNameError: (state: SignInStateTypes) => {
      state.signUp.name.error = null;
    },
    clearSignUpEmailError: (state: SignInStateTypes) => {
      state.signUp.email.error = null;
    },
    clearSignUpPasswordError: (state: SignInStateTypes) => {
      state.signUp.password.error = null;
    },
    clearSignUpConfirmPasswordError: (state: SignInStateTypes) => {
      state.signUp.confirmPassword.error = null;
    },
    clearLoginEmailError: (state: SignInStateTypes) => {
      state.login.email.error = null;
    },
    clearLoginPasswordError: (state: SignInStateTypes) => {
      state.login.password.error = null;
    },
    resetSignUpForm: (state: SignInStateTypes) => {
      state.signUp.name = { value: '', error: null };
      state.signUp.email = { value: '', error: null };
      state.signUp.password = { value: '', error: null };
    },
    resetLoginForm: (state: SignInStateTypes) => {
      state.login.email = { value: '', error: null };
      state.login.password = { value: '', error: null };
    },
    resetAllForms: (state: SignInStateTypes) => {
      state.signUp.name = { value: '', error: null };
      state.signUp.email = { value: '', error: null };
      state.signUp.password = { value: '', error: null };
      state.signUp.confirmPassword = { value: '', error: null };

      state.login.email = { value: '', error: null };
      state.login.password = { value: '', error: null };
    },
    resetErrors: (state: SignInStateTypes) => {
      state.signUp.name.error = null;
      state.signUp.email.error = null;
      state.signUp.password.error = null;
      state.signUp.confirmPassword.error = null;

      state.login.email.error = null;
      state.login.password.error = null;
    },
    closeSignUpModal: (state: SignInStateTypes) => {
      state.signUpModalActive = false;
    },
  },
});

export const {
  setSignUpName,
  setSignUpEmail,
  setSignUpPassword,
  setSignUpConfirmPassword,
  setLoginEmail,
  setLoginPassword,
  setSignUpNameError,
  setSignUpEmailError,
  setSignUpPasswordError,
  setSignUpConfirmPasswordError,
  setLoginEmailError,
  setLoginPasswordError,
  clearSignUpNameError,
  clearSignUpEmailError,
  clearSignUpPasswordError,
  clearSignUpConfirmPasswordError,
  clearLoginEmailError,
  clearLoginPasswordError,
  resetLoginForm,
  resetAllForms,
  resetErrors,
  closeSignUpModal,
} = signInSlice.actions;

export default signInSlice.reducer;
