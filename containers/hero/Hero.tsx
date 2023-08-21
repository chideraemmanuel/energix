import Link from 'next/link';
import styles from './Hero.module.scss';
import heroImage from '@/assets/hero1.jpg';

const Hero: React.FC = () => {
  return (
    <section
      className={styles.header}
      style={{ background: `url(${heroImage.src}) center center / cover` }}
    >
      <div className={styles.header__overlay}></div>

      <div className={styles.header__content}>
        <h1>
          Driving Sustainable Innovations and Powering the Future of Global
          Energy.
        </h1>

        <p>
          Navigating the complexities of the modern energy sector demands
          foresight and determination. Committed to this journey, we are
          redefining boundaries and setting new benchmarks for a sustainable
          tomorrow.
        </p>

        <div className={styles.header__content_buttons}>
          <Link href={'/join-us'}>Join Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
