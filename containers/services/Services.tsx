import ServiceCard from '@/components/serviceCard/ServiceCard';
import styles from './Services.module.scss';
import blobScene from '@/assets/blob-scene.svg';
import { services } from '@/constants';

const Services: React.FC = () => {
  return (
    <section
      className={styles.bg}
      //   style={{
      //     background: `url(${blobScene.src}) center center / cover`,
      //   }}
    >
      <div className={styles.container}>
        <div className={styles.container__header}>
          <h2>What we offer?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat
            blanditiis consequuntur ad, veritatis ex?
          </p>
        </div>

        <div className={styles.container__grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

// Innovative Energy Solutions: Our team constantly delves into research and development to discover and implement the latest in energy technologies. Whether it's harnessing the power of renewables or optimizing traditional energy sources, we're committed to bringing the best to our clients.

// Sustainability Consulting: With an eye on the future, we provide consultancy services to businesses looking to transition into more sustainable energy practices. Our experts guide you through the process, ensuring both environmental responsibility and economic viability.

// Education and Training: As advocates for a brighter energy future, we offer workshops, training sessions, and educational materials to both professionals in the industry and the general public. Knowledge is power, and we're keen on sharing ours.

// Community Initiatives: Beyond business, we're deeply invested in uplifting communities. We work on projects that ensure energy access to underserved regions, driving both economic and social empowerment.

// Global Energy Partnerships: Our network spans continents, and we're proud of our collaborations with global partners. Together, we aim to shape the international energy landscape, setting benchmarks and sharing expertise.

// Energy Access and Equity: At the heart of our mission is the belief that everyone deserves reliable and affordable energy. We champion initiatives that bridge the energy gap, ensuring that even the most remote and underserved communities are not left in the dark. Our projects prioritize not just access, but also fairness, guaranteeing that energy solutions are distributed equitably, promoting inclusive growth and development.

// Lower Emissions Commitment: Environmental responsibility is central to our ethos. We are deeply invested in projects and technologies that drastically reduce emissions. Through a combination of advanced methodologies, state-of-the-art equipment, and a holistic approach to energy production, we're committed to diminishing our carbon footprint and aiding global efforts to combat climate change.

//
//

// Why Invest With Us
// ------------
// Join us in shaping the future of energy, where profitability meets responsibility. Whether you're considering direct investments, diversifying your 401(k) portfolio, or exploring IRA options, our platform provides avenues that align with both sustainable growth and retirement planning. Together, let's illuminate the path to a prosperous and green future."
// ------------
// Navigating the world of energy investments requires not just expertise but also a vision for the future. When you invest with us, you're choosing a partner that is deeply rooted in the energy sector, with a keen understanding of its intricacies and a clear view of its horizon. Here's why partnering with us stands out:

// Deep Industry Expertise:
// Our team comprises industry veterans who have been at the forefront of the energy sector's evolution. This expertise ensures that your investments are grounded in knowledge and experience.

// Future-Oriented Approach:
// We're not just about tapping into existing opportunities; we're about creating them. Our research and development initiatives constantly explore emerging technologies and trends, ensuring our investors are always a step ahead.

// Diverse Portfolio Options:
// Whether you're inclined towards cutting-edge renewables or believe in the potential of transitional energy solutions, our diverse portfolio caters to a range of investment appetites.

// Robust Risk Management:
// In the dynamic world of energy investments, managing risk is paramount. Our strategies are crafted with meticulous risk assessments, balancing potential returns with market volatilities.

// Transparent Operations:
// We believe in a transparent relationship with our investors. Regular updates, clear communication, and open channels ensure you're always in the loop.

// Sustainable and Ethical Investing:
// As stewards of both capital and the planet, we prioritize investments that align with ESG (Environmental, Social, and Governance) principles. Your investment will not only yield returns but also contribute to a more sustainable future.

// Customized Investment Solutions:
// Every investor is unique, and so are their goals. Our team works closely with you to craft bespoke investment strategies that resonate with your objectives and vision.

// Join us in shaping the future of energy, where profitability meets responsibility. Together, let's illuminate the path to sustainable growth.

// -------------------
// -------------------
// -------------------

// PARTNER WITH US
// "Want to be at the forefront of energy innovation? Join our journey and let's power the future together!"

// "Looking to make an impact in the energy world? Collaborate with us and let's set new benchmarks!"

// "Dream of a brighter, sustainable tomorrow? Team up with us and let's turn that vision into reality!"

// "Passionate about shaping the energy sector's next chapter? Partner with us and let's write it together!"

// "Believe in the power of collaboration? Unite with us, and let's redefine what's possible in energy!"
