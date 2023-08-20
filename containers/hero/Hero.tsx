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
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nisi!
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit
          minima, deserunt dolor assumenda consequuntur ducimus, iste doloribus
          impedit possimus laborum tenetur magnam autem saepe sapiente fugit.
          Obcaecati, illo officia.
        </p>

        <div className={styles.header__content_buttons}>
          <Link href={'/join-us'}>Join Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
