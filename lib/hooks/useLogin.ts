import {
  resetAllForms,
  setLoginEmailError,
  setLoginPasswordError,
} from '@/redux/slices/signInSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast/headless';
import { useDispatch } from 'react-redux';
import axios from 'axios';

interface LoginCredentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;

  const mutate = async (credentials: LoginCredentials) => {
    const { email, password } = credentials;

    if (email.length === 0) {
      dispatch(setLoginEmailError('Please enter your email'));
      return;
    }
    if (!emailRegex.test(email)) {
      dispatch(setLoginEmailError('Please enter a valid email'));
      return;
    }
    if (password.length === 0) {
      dispatch(setLoginPasswordError('Please enter your password'));
      return;
    }

    if (!navigator.onLine) {
      toast('Please check your internet connection');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        '/api/users/login',
        JSON.stringify({
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

      if (
        //   @ts-ignore
        error.response.data.error === 'No user with the provided email' ||
        //   @ts-ignore
        error.response.data.error === 'Incorrect password'
      ) {
        //    dispatch(setLoginEmailError('No user with the provided email'));
        //   @ts-ignore
        dispatch(setLoginPasswordError(error.response.data.error));
        return;
      }

      toast('Something went wrong. Please try again.');
    }
  };

  return { mutate, isLoading };
};
