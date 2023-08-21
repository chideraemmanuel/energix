import Link from 'next/link';
import styles from './IconLink.module.scss';
import { FiArrowRight } from 'react-icons/fi';

interface Props {
  href: string;
  text: string;
}

const IconLink: React.FC<Props> = ({ href, text }) => {
  return (
    <Link href={href} className={styles.link}>
      <span>{text}</span>
      <FiArrowRight />
    </Link>
  );
};

export default IconLink;
