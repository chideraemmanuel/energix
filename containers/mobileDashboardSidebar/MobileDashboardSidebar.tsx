'use client';

import { useDispatch, useSelector } from 'react-redux';
import DashboardNavbarLinks from '../dashboardNavbarLinks/DashboardNavbarLinks';
import styles from './MobileDashboardSidebar.module.scss';
import { StoreTypes } from '@/redux/store';
import {
  closeAllDropdowns,
  closeDashboardSidebar,
} from '@/redux/slices/navigationMenuSlice';

const MobileDashboardSidebar: React.FC = () => {
  const { dashoardSidebarActive } = useSelector(
    (store: StoreTypes) => store.navigationMenu
  );

  const dispatch = useDispatch();

  return (
    <>
      {dashoardSidebarActive && (
        <div
          className={styles.overlay}
          onClick={() => {
            dispatch(closeDashboardSidebar());
            dispatch(closeAllDropdowns());
          }}
        ></div>
      )}
      <div
        className={styles.sidebar}
        style={dashoardSidebarActive ? { left: 0 } : undefined}
      >
        <div className={styles.header}>
          <span>Header!</span>
        </div>

        <div className={styles.links}>
          <DashboardNavbarLinks />
        </div>
      </div>
    </>
  );
};

export default MobileDashboardSidebar;
