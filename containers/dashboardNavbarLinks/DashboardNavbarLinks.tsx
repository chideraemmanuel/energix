import DashboardNavbarLink from '@/components/dashboardNavbarLink/DashboardNavbarLink';
import styles from './DashboardNavbarLinks.module.scss';
import DashboardNavbarDropdown from '@/components/dashboardNavbarDropdown/DashboardNavbarDropdown';
import { dashboardLinks } from '@/constants';
import { FiActivity, FiChevronDown, FiFileMinus } from 'react-icons/fi';
import Link from 'next/link';

const DashboardNavbarLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <DashboardNavbarLink /> */}

      {/* <DashboardNavbarDropdown /> */}

      {/* {dashboardLinks.map((link, index) => (
        <DashboardNavbarLink {...link} key={index} />
      ))} */}

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Overview</span>
      </Link>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__trigger}>
          <div>
            <FiFileMinus />
            <span>Funding</span>
          </div>

          <FiChevronDown />
        </button>

        <ul className={styles.dropdown__list}>
          <li>
            <Link href={'/'}>Deposit</Link>
          </li>
          <li>
            <Link href={'/'}>Deposit History</Link>
          </li>
        </ul>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__trigger}>
          <div>
            <FiFileMinus />
            <span>Withdrawal</span>
          </div>

          <FiChevronDown />
        </button>

        <ul className={styles.dropdown__list}>
          <li>
            <Link href={'/'}>Withdraw</Link>
          </li>
          <li>
            <Link href={'/'}>Withdrawal History</Link>
          </li>
        </ul>
      </div>

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Cart</span>
      </Link>

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Account Statement</span>
      </Link>

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Portfolios</span>
      </Link>

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Retirement</span>
      </Link>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__trigger}>
          <div>
            <FiFileMinus />
            <span>Partnership</span>
          </div>

          <FiChevronDown />
        </button>

        <ul className={styles.dropdown__list}>
          <li>
            <Link href={'/'}>Individual</Link>
          </li>
          <li>
            <Link href={'/'}>Business</Link>
          </li>
        </ul>
      </div>

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Membership</span>
      </Link>

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Referral</span>
      </Link>

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Achievements</span>
      </Link>

      <Link href={'/'} className={styles.link}>
        <FiFileMinus />
        <span>Notifications</span>
      </Link>
    </div>
  );
};

export default DashboardNavbarLinks;
