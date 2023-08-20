import { navigationLinks } from '@/constants';
import styles from './MobileMenu.module.scss';
import { useDispatch } from 'react-redux';
import { setMobileNavMenuStatus } from '@/redux/slices/navigationMenuSlice';
import Link from 'next/link';

const MobileMenu: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.menu}>
      <ul className={styles.menu__links}>
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={`/${link.to}`}
              scroll={false}
              onClick={() => dispatch(setMobileNavMenuStatus('inactive'))}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.menu__button}>
        <Link href={'/sign-in'}>Sign In</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
