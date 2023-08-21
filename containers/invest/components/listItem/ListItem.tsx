import { FiShield } from 'react-icons/fi';
import styles from './ListItem.module.scss';
import { IconType } from 'react-icons';
import { InvestmentPercTypes } from '@/constants';

const ListItem: React.FC<InvestmentPercTypes> = ({
  summary,
  icon: Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div className={styles.item}>
      {/* <FiShield style={{ color: 'red', backgroundColor: 'gray' }} /> */}
      <Icon style={{ color: iconColor, backgroundColor: iconBg }} />
      <span>{summary}</span>
    </div>
  );
};

export default ListItem;
