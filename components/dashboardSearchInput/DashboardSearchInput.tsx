import { FiSearch } from 'react-icons/fi';
import styles from './DashboardSearchInput.module.scss';

const DashboardSearchInput: React.FC = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search" />
      <FiSearch />
    </div>
  );
};

export default DashboardSearchInput;
