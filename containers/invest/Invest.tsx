import Image from 'next/image';
import styles from './Invest.module.scss';
import image from '@/assets/hero2.jpg';
import ListItem from './components/listItem/ListItem';
import { investmentPercs } from '@/constants';

const Invest: React.FC = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.container__text}>
          <div className={styles.container__text_header}>
            <span>Why Ecocentury?</span>
            <h4>
              Our platform provides avenues that align with both sustainable
              growth and retirement planning
            </h4>
            <p>
              Join us in shaping the future of energy, where profitability meets
              responsibility. Whether you're considering direct investments,
              diversifying your 401(k) portfolio, or exploring IRA options
            </p>
          </div>

          <div className={styles.container__text_list}>
            {investmentPercs.map((perc, index) => (
              <ListItem {...perc} key={index} />
            ))}
          </div>
        </div>

        <div className={styles.container__image}>
          <Image src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Invest;
