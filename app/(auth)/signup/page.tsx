'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import image from '@/assets/hero1.jpg';
import FormInput from '@/components/formInput/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { StoreTypes } from '@/redux/store';
import {
  clearSignUpConfirmPasswordError,
  clearSignUpEmailError,
  clearSignUpNameError,
  clearSignUpPasswordError,
  closeSignUpModal,
  setSignUpConfirmPassword,
  setSignUpConfirmPasswordError,
  setSignUpEmail,
  setSignUpName,
  setSignUpPassword,
} from '@/redux/slices/signInSlice';
import SignInModal from '@/containers/signInModal/SignInModal';
import { useSignUp } from '@/lib/hooks/useSignUp';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import FullScreenLoader from '@/components/fullScreenLoader/FullScreenLoader';

const SignUpPage: React.FC = () => {
  const { name, email, password, confirmPassword } = useSelector(
    (store: StoreTypes) => store.signIn.signUp
  );

  const { signUpModalActive } = useSelector(
    (store: StoreTypes) => store.signIn
  );

  const dispatch = useDispatch();

  const { mutate: signUp, isLoading: isSigningUp } = useSignUp();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signUp({
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
  };

  return (
    <>
      {isSigningUp && <FullScreenLoader />}
      {signUpModalActive && <SignInModal />}
      <div className={styles.grid} onClick={() => dispatch(closeSignUpModal())}>
        <div className={styles.info}>
          <Link href={'/'}>Ecocentury</Link>

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
                Ecocentury
              </Link>
              <div className={styles.form__overlay_header}>
                <span>Sign up</span>
                <p>
                  Have an account? <Link href={'/login'}>Login</Link>
                </p>
              </div>

              <div className={styles.form__overlay_form}>
                <FormInput
                  type="text"
                  placeholder="Enter your name or company's name"
                  label="Name"
                  value={name.value}
                  setValue={setSignUpName}
                  error={name.error}
                  // error={'this is an error'}
                  clearError={clearSignUpNameError}
                />
                <FormInput
                  type="text"
                  placeholder="Enter your name or company's email"
                  label="Email"
                  value={email.value}
                  setValue={setSignUpEmail}
                  error={email.error}
                  // error={'this is an error'}
                  clearError={clearSignUpEmailError}
                />
                <FormInput
                  type="password"
                  placeholder="Pick a password"
                  label="Password"
                  value={password.value}
                  setValue={setSignUpPassword}
                  error={password.error}
                  // error={'this is an error'}
                  clearError={clearSignUpPasswordError}
                />
                <FormInput
                  type="password"
                  placeholder="Confirm your password"
                  label="Confirm Password"
                  value={confirmPassword.value}
                  setValue={setSignUpConfirmPassword}
                  error={confirmPassword.error}
                  // error={'this is an error'}
                  clearError={clearSignUpConfirmPasswordError}
                />

                <button>Create account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
