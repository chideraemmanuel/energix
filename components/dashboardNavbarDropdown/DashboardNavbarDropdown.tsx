import { FiChevronDown, FiFileMinus } from 'react-icons/fi';
import styles from './DashboardNavbarDropdown.module.scss';
import Link from 'next/link';

const DashboardNavbarDropdown: React.FC = () => {
  return (
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
  );
};

export default DashboardNavbarDropdown;
