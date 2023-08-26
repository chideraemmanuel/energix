import { useSelector } from 'react-redux';
import DashboardNavbarLinks from '../dashboardNavbarLinks/DashboardNavbarLinks';
import TabletDashboardSidebarLinks from '../tabletDashboardSidebarLinks/TabletDashboardSidebarLinks';
import styles from './DashboardSidebar.module.scss';
import { StoreTypes } from '@/redux/store';
import MobileDashboardSidebar from '../mobileDashboardSidebar/MobileDashboardSidebar';

const DashboardSidebar: React.FC = () => {
  const { dashoardSidebarActive } = useSelector(
    (store: StoreTypes) => store.navigationMenu
  );

  return (
    <div
      className={styles.container}
      // style={dashoardSidebarActive ? { width: '40vw' } : undefined}
    >
      <div className={styles.desktop}>
        <DashboardNavbarLinks />
      </div>

      <div
        className={styles.tablet}
        style={dashoardSidebarActive ? { width: '40vw' } : undefined}
      >
        <TabletDashboardSidebarLinks />
      </div>

      {/* {dashoardSidebarActive && (
        <div className={styles.mobile}>
          <MobileDashboardSidebar />
        </div>
      )} */}

      <div className={styles.mobile}>
        <MobileDashboardSidebar />
      </div>
    </div>
  );
};

export default DashboardSidebar;
