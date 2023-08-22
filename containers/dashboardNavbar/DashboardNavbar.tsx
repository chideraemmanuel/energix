import Link from 'next/link';
import styles from './DashboardNavbar.module.scss';
import { FiChevronLeft } from 'react-icons/fi';
import DashboardNavbarLinks from '../dashboardNavbarLinks/DashboardNavbarLinks';
import DashboardNavbarLink from '@/components/dashboardNavbarLink/DashboardNavbarLink';

const DashboardNavbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__header}>
          <Link href={'/'}>Ecocentury</Link>

          {/* <button>
            <FiChevronLeft />
          </button> */}
        </div>

        <div className={styles.sidebar__links}>
          <DashboardNavbarLinks />
        </div>

        <div className={styles.sidebar__footer}>
          <DashboardNavbarLink />
          <DashboardNavbarLink />
          <DashboardNavbarLink />
        </div>
      </div>
      <div className={styles.header}>Dashboard Header!</div>
    </div>
  );
};

export default DashboardNavbar;
