'use client';

import Link from 'next/link';
import styles from './DashboardNavbar.module.scss';
import { FiChevronLeft } from 'react-icons/fi';
import DashboardNavbarLinks from '../dashboardNavbarLinks/DashboardNavbarLinks';
import DashboardNavbarLink from '@/components/dashboardNavbarLink/DashboardNavbarLink';
import { dashboardBottomLinks } from '@/constants';
import DashboardHeader from '../dashboardHeader/DashboardHeader';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreTypes } from '@/redux/store';
import DashboardSidebar from '../dashboardSidebar/DashboardSidebar';

const DashboardNavbar: React.FC = () => {
  const [sidebarOpen, setsidebarOpen] = useState(true);

  const { dashoardSidebarActive } = useSelector(
    (store: StoreTypes) => store.navigationMenu
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <DashboardHeader />
      </div>

      {/* <div className={styles.sidebar}> */}
      {/* <DesktopDashboardSidebar />
        <TabletDashboardSidebar /> */}
      <DashboardSidebar />
      {/* </div> */}
    </div>
  );
};

export default DashboardNavbar;
