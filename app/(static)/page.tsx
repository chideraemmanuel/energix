import Hero from '@/containers/hero/Hero';
import styles from './page.module.scss';
import Services from '@/containers/services/Services';
import Invest from '@/containers/invest/Invest';
import CallToAction from '@/containers/callToAction/CallToAction';
import FullScreenSlider from '@/components/fullScreenSlider/FullScreenSlider';
import { resourcesSliderItems } from '@/constants';

const HomePage: React.FC = () => {
  return (
    <div className={styles.section}>
      <header>
        <Hero />
      </header>

      <main>
        <Services />
        <FullScreenSlider data={resourcesSliderItems} />
        {/* Carousel (Ecocentury startups, and co...) */}
        <Invest />
        <CallToAction />
      </main>
    </div>
  );
};

export default HomePage;
