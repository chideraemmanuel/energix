'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './FullScreenSlider.module.scss';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import SlideItem from '../slideItem/SlideItem';
import { SlideItemTypes } from '@/constants';

const FullScreenSlider: React.FC<{ data: SlideItemTypes[] }> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      //   spaceBetween={30}
      loop={true}
      effect={'fade'}
      //   navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        // disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className={styles.swiper}
    >
      {data.map((item, index) => (
        <SwiperSlide>
          <SlideItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FullScreenSlider;
