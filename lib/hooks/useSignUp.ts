import {
  resetAllForms,
  setSignUpConfirmPasswordError,
  setSignUpEmailError,
  setSignUpNameError,
  setSignUpPasswordError,
} from '@/redux/slices/signInSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;

  const mutate = async (credentials: SignUpCredentials) => {
    const { name, email, password, confirmPassword } = credentials;

    if (name.length === 0) {
      dispatch(setSignUpNameError('Please fill out this field'));
      return;
    }
    if (email.length === 0) {
      dispatch(setSignUpEmailError('Please fill out this field'));
      return;
    }
    if (!emailRegex.test(email)) {
      dispatch(setSignUpEmailError('Please enter a valid email'));
      return;
    }
    if (password.length < 6) {
      dispatch(setSignUpPasswordError('Password should be up to 6 characters'));
      return;
    }
    if (confirmPassword !== password) {
      dispatch(setSignUpConfirmPasswordError('Passwords do not match'));
      return;
    }

    if (!navigator.onLine) {
      toast('Please check your internet connection');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        '/api/users/signup',
        JSON.stringify({
          name,
          email,
          password,
        })
      );

      console.log(response.data);

      dispatch(resetAllForms());
      setIsLoading(false);
      //   router.replace('/dashboard');
      router.push('/');
    } catch (error) {
      setIsLoading(false);
      //   console.log(error);
      //   console.log(error.response.data.error);

      if (error.response.data.error === 'Email has already been used') {
        dispatch(setSignUpEmailError('Email has already been used'));
        return;
      }

      toast('Something went wrong. Please try again.');
    }
  };

  return { mutate, isLoading };
};
