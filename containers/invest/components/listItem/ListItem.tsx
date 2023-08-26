import { FiShield } from 'react-icons/fi';
import styles from './ListItem.module.scss';
import { IconType } from 'react-icons';
import { InvestmentPercTypes } from '@/constants';

const ListItem: React.FC<InvestmentPercTypes> = ({
  header,
  summary,
  icon: Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div className={styles.item}>
      {/* <Icon style={{ color: iconColor, backgroundColor: iconBg }} /> */}
      <Icon
        style={{ color: '#fff', backgroundColor: 'rgba(52, 187, 139, 0.5)' }}
      />
      <div className={styles.item__content}>
        <h4>{header}</h4>
        <span>{summary}</span>
      </div>
    </div>
  );
};

export default ListItem;
