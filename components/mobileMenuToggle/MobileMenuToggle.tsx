'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './MobileMenuToggle.module.scss';
import { StoreTypes } from '@/redux/store';
import { setMobileNavMenuStatus } from '@/redux/slices/navigationMenuSlice';
import { FiMenu, FiX } from 'react-icons/fi';

const MobileMenuToggle: React.FC = () => {
  const { mobileMenuActive } = useSelector(
    (store: StoreTypes) => store.navigationMenu
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (mobileMenuActive) {
      dispatch(setMobileNavMenuStatus('inactive'));
    } else {
      dispatch(setMobileNavMenuStatus('active'));
    }
  };

  return (
    <button className={styles.toggle} onClick={handleToggle}>
      {mobileMenuActive ? <FiX /> : <FiMenu />}
    </button>
  );
};

export default MobileMenuToggle;
