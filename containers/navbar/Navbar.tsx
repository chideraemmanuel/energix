'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { StoreTypes } from '@/redux/store';
import { navigationLinks } from '@/constants';
import MobileMenuToggle from '@/components/mobileMenuToggle/MobileMenuToggle';
import MobileMenu from '../mobileMenu/MobileMenu';
import { FiGlobe } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const { mobileMenuActive } = useSelector(
    (store: StoreTypes) => store.navigationMenu
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__toggle}>
        <MobileMenuToggle />
      </div>
      {mobileMenuActive && <MobileMenu />}
      <div className={styles.container__logo}>
        <Link href={'/'}>Ecocentury</Link>
      </div>

      <ul className={styles.container__links}>
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link href={`${link.to}`}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.container__buttons}>
        <Link href={'/global'} className={styles.container__buttons_global}>
          <FiGlobe />
          <span>Global</span>
        </Link>

        <Link href={'/sign-in'} className={styles.container__buttons_signIn}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
