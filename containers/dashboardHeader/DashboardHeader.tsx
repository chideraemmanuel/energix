'use client';

import Link from 'next/link';
import styles from './DashboardHeader.module.scss';
import DashboardSearchInput from '@/components/dashboardSearchInput/DashboardSearchInput';
import { FiMenu, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { StoreTypes } from '@/redux/store';
import {
  closeAllDropdowns,
  closeDashboardSidebar,
  openDashboardSidebar,
} from '@/redux/slices/navigationMenuSlice';
import Logo from '@/components/logo/Logo';
import DashboardHeaderLinks from '../dashboardHeaderLinks/DashboardHeaderLinks';

const DashboardHeader: React.FC = () => {
  const { dashoardSidebarActive } = useSelector(
    (store: StoreTypes) => store.navigationMenu
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <div className={styles.toggle}>
        {!dashoardSidebarActive ? (
          <button onClick={() => dispatch(openDashboardSidebar())}>
            <FiMenu />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(closeAllDropdowns());
              dispatch(closeDashboardSidebar());
            }}
          >
            <FiX />
          </button>
        )}
      </div>

      <div className={styles.logo}>
        {!dashoardSidebarActive && (
          <button onClick={() => dispatch(openDashboardSidebar())}>
            <FiMenu />
          </button>
        )}

        {dashoardSidebarActive && (
          <button
            onClick={() => {
              dispatch(closeAllDropdowns());
              dispatch(closeDashboardSidebar());
            }}
          >
            <FiX />
          </button>
        )}

        {/* <div className={styles.logo}> */}
        <Logo />
        {/* </div> */}
      </div>

      <div className={styles.search}>
        <DashboardSearchInput />
      </div>

      <div className={styles.links}>
        <DashboardHeaderLinks />
      </div>
    </div>
  );
};

export default DashboardHeader;
