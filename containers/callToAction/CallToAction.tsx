import Link from 'next/link';
import styles from './CallToAction.module.scss';

const CallToAction: React.FC = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.container__text}>
          <h5>Looking to make an impact in the energy world?</h5>
          <p>Collaborate with us and let's set new benchmarks!</p>
        </div>

        <Link href={'/partnership'}>Partner with us</Link>
      </div>
    </section>
  );
};

export default CallToAction;
