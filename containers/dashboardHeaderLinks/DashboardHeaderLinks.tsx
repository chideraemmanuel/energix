'use client';

import Link from 'next/link';
import styles from './DashboardHeaderLinks.module.scss';
import { FiBell } from 'react-icons/fi';
import Image from 'next/image';
import image from '@/assets/profile.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { StoreTypes } from '@/redux/store';
import {
  closeDashboardHeaderLinks,
  toggleDashboardHeaderLinks,
} from '@/redux/slices/navigationMenuSlice';

const DashboardHeaderLinks: React.FC = () => {
  const { dashboardHeaderLinksActive } = useSelector(
    (store: StoreTypes) => store.navigationMenu
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.notifications}>
        <FiBell />
        <span></span>
      </Link>

      <div className={styles.profile}>
        <button onClick={() => dispatch(toggleDashboardHeaderLinks())}>
          <Image src={image} alt="" />
        </button>

        {dashboardHeaderLinksActive && (
          <div className={styles.profile_menu}>
            <li onClick={() => dispatch(closeDashboardHeaderLinks())}>
              <Link href={'/'}>View profile</Link>
            </li>
            <li onClick={() => dispatch(closeDashboardHeaderLinks())}>
              <Link href={'/'}>Settings</Link>
            </li>
            <li onClick={() => dispatch(closeDashboardHeaderLinks())}>
              <button>Logout</button>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeaderLinks;
