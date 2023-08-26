import { ServicesTypes } from '@/constants';
import styles from './ServiceCard.module.scss';
import IconLink from '../iconLink/IconLink';

const ServiceCard: React.FC<ServicesTypes> = ({
  name,
  icon: Icon,
  summary,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <Icon />
        <h3>{name}</h3>
      </div>

      <p className={styles.card__info}>{summary}</p>

      {/* <IconLink text="Learn more" href="/" /> */}
      <div className={styles.item__content_button}>
        <IconLink text="Learn more" href={`/`} />
      </div>
    </div>
  );
};

export default ServiceCard;
