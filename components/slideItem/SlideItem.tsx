import Link from 'next/link';
import styles from './SlideItem.module.scss';
// import image from "@/assets/hero1.jpg";
import IconLink from '../iconLink/IconLink';
import { SlideItemTypes } from '@/constants';

const SlideItem: React.FC<SlideItemTypes> = ({
  heading,
  summary,
  image,
  link,
}) => {
  return (
    <div
      className={styles.item}
      style={{ background: `url(${image.src}) center center / cover` }}
    >
      <div className={styles.item__overlay}></div>

      <div className={styles.item__content}>
        <h2>{heading}</h2>

        <p>{summary}</p>

        {/* <div className={styles.item__content_buttons}>
          <Link href={"/"}>Join Us</Link>
        </div> */}
        <div className={styles.item__content_button}>
          <IconLink text="Learn more" href={`/${link}`} />
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
