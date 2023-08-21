import { ServicesTypes } from '@/constants';
import styles from './ServiceCard.module.scss';

const ServiceCard: React.FC<ServicesTypes> = ({
  name,
  icon: Icon,
  summary,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <Icon />
      </div>

      <div className={styles.card__info}>
        <h3>{name}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
