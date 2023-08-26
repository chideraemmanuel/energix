import Link from 'next/link';
import styles from './Footer.module.scss';
import { footerLinks, navigationLinks } from '@/constants';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <div className={styles.container__top_logo}>
          <Link href={'/'}>Ecocentury</Link>
        </div>

        {/* <ul className={styles.container__top_links}>
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul> */}

        <div className={styles.container__top_links}>
          {footerLinks.map((link, index) => (
            <ul key={index}>
              <span>{link.header}</span>
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.to}>{link.title}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <ul className={styles.container__top_socials}>
          <Link href={'/'}>
            <FaFacebook />
          </Link>
          <Link href={'/'}>
            <FaTwitter />
          </Link>
          <Link href={'/'}>
            <FaInstagram />
          </Link>
        </ul>
      </div>

      <div className={styles.container__copyright}>
        <span>&copy; 2023 Ecocentury. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
