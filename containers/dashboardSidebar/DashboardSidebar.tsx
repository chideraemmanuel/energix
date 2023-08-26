import { useSelector } from 'react-redux';
import DashboardNavbarLinks from '../dashboardNavbarLinks/DashboardNavbarLinks';
import TabletDashboardSidebarLinks from '../tabletDashboardSidebarLinks/TabletDashboardSidebarLinks';
import styles from './DashboardSidebar.module.scss';
import { StoreTypes } from '@/redux/store';

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
    </div>
  );
};

export default DashboardSidebar;
