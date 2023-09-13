import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      Energix
    </Link>
  );
};

export default Logo;
