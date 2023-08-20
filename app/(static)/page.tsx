import Hero from '@/containers/hero/Hero';
import styles from './page.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.section}>
      <header>
        <Hero />
      </header>
    </div>
  );
};

export default HomePage;
