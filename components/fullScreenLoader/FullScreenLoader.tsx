import styles from './FullScreenLoader.module.scss';

const FullScreenLoader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default FullScreenLoader;
