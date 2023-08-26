import Link from 'next/link';
import styles from './DashboardNavbarLink.module.scss';
import { FiActivity } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  to: string;
  icon: IconType;
}

const DashboardNavbarLink: React.FC<Props> = ({ title, to, icon: Icon }) => {
  return (
    <Link href={to} className={styles.link}>
      <Icon />
      <span>{title}</span>
    </Link>
  );
};

export default DashboardNavbarLink;
