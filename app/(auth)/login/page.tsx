'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import FormInput from '@/components/formInput/FormInput';
import { useSelector } from 'react-redux';
import { StoreTypes } from '@/redux/store';
import {
  clearLoginEmailError,
  setLoginEmail,
  setLoginPassword,
  setLoginPasswordError,
} from '@/redux/slices/signInSlice';
import { FormEvent } from 'react';
import { useLogin } from '@/lib/hooks/useLogin';
import FullScreenLoader from '@/components/fullScreenLoader/FullScreenLoader';

const LoginPage: React.FC = () => {
  const { email, password } = useSelector(
    (store: StoreTypes) => store.signIn.login
  );

  const { mutate: login, isLoading: isLoggingIn } = useLogin();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({
      email: email.value,
      password: password.value,
    });
  };

  return (
    // <div className={styles.grid} onClick={() => dispatch(closeSignUpModal())}>
    <>
      {isLoggingIn && <FullScreenLoader />}
      <div className={styles.grid}>
        <div className={styles.info}>
          <Link href={'/'}>Energix</Link>

          <div className={styles.info__text}>
            <h2>Start your journey with us.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              quaerat nam velit perspiciatis est exercitationem voluptates nihil
              at ipsa ad!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
              reiciendis distinctio quam aliquid quod temporibus libero
              doloribus, illum vel porro eos saepe odit quisquam? Ipsum.
            </p>
          </div>
        </div>

        <div className={styles.form}>
          <div className={styles.form__overlay}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Link href={'/'} className={styles.formLogo}>
                Energix
              </Link>
              <div className={styles.form__overlay_header}>
                <span>Welcome back!</span>
                <p>Enter your credentials to login</p>
                <p>
                  Don't have an account? <Link href={'/signup'}>Sign up</Link>
                </p>
              </div>

              <div className={styles.form__overlay_form}>
                <FormInput
                  type="text"
                  placeholder="Enter your name or company's email"
                  label="Email"
                  value={email.value}
                  setValue={setLoginEmail}
                  error={email.error}
                  // error={'this is an error'}
                  clearError={clearLoginEmailError}
                />
                <FormInput
                  type="password"
                  placeholder="Pick a password"
                  label="Password"
                  value={password.value}
                  setValue={setLoginPassword}
                  error={password.error}
                  // error={'this is an error'}
                  clearError={setLoginPasswordError}
                />

                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
