'use client';

import { useDispatch } from 'react-redux';
import styles from './SignInModal.module.scss';
import blobScene from '@/assets/blob-scene.svg';
import { closeSignUpModal } from '@/redux/slices/signInSlice';

const SignInModal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.modal}
      style={{
        background: `url(${blobScene.src}) center center / cover`,
      }}
    >
      <div className={styles.modal__text}>
        <h2>Start your journey with us.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          quaerat nam velit perspiciatis est exercitationem voluptates nihil at
          ipsa ad!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
          reiciendis distinctio quam aliquid quod temporibus libero doloribus,
          illum vel porro eos saepe odit quisquam? Ipsum.
        </p>
      </div>

      <button onClick={() => dispatch(closeSignUpModal())}>Continue</button>
    </div>
  );
};

export default SignInModal;
