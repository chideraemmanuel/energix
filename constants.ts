import image from '@/assets/hero1.jpg';
import image2 from '@/assets/hero2.jpg';
import { StaticImageData } from 'next/image';
import { FaRecycle, FaShieldAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { FiCalendar } from 'react-icons/fi';

export const navigationLinks = [
  {
    title: 'home',
    to: '/',
  },
  {
    title: 'about',
    to: '/about',
  },
  {
    title: 'invest',
    to: '/invest',
  },
  {
    title: 'store',
    to: '/store',
  },
  {
    title: 'partner with us',
    to: '/partnership',
  },
];

export const footerLinks = [
  {
    header: 'Header',
    links: [
      {
        title: 'About us',
        to: '/',
      },
      {
        title: 'Our works',
        to: '/',
      },
      {
        title: 'Community',
        to: '/',
      },
    ],
  },
  {
    header: 'Header Header',
    links: [
      {
        title: 'Investors',
        to: '/',
      },
      {
        title: 'Privacy Policy',
        to: '/',
      },
    ],
  },
];

export interface ServicesTypes {
  name: string;
  summary: string;
  icon: IconType;
}

export const services = [
  {
    name: 'Innovative Energy Solutions',
    // summary: `Our team constantly delves into research and development to discover and implement the latest in energy technologies. Whether it's harnessing the power of renewables or optimizing traditional energy sources, we're committed to bringing the best to our clients.`,
    summary: `Whether it's harnessing the power of renewables or optimizing traditional energy sources, we're committed to bringing the best to our clients.`,
    icon: FaRecycle,
  },
  {
    name: 'Lower Emissions Commitment',
    // summary: `Environmental responsibility is central to our ethos. We are deeply invested in projects and technologies that drastically reduce emissions. Through a combination of advanced methodologies, state-of-the-art equipment, and a holistic approach to energy production, we're committed to diminishing our carbon footprint and aiding global efforts to combat climate change.`,
    summary: `Environmental responsibility is central to our ethos. We are deeply invested in projects and technologies that drastically reduce emissions.`,
    icon: FaRecycle,
  },
  {
    name: 'Sustainability Consulting',
    // summary: `With an eye on the future, we provide consultancy services to businesses looking to transition into more sustainable energy practices. Our experts guide you through the process, ensuring both environmental responsibility and economic viability.`,
    summary: `Our experts guide you through the process, ensuring both environmental responsibility and economic viability.`,
    icon: FaRecycle,
  },
  {
    name: 'Community Initiatives',
    summary: `Beyond business, we're deeply invested in uplifting communities. We work on projects that ensure energy access to underserved regions, driving both economic and social empowerment.`,
    icon: FaRecycle,
  },
  {
    name: 'Global Energy Partnerships',
    summary: `Our network spans continents, and we're proud of our collaborations with global partners. Together, we aim to shape the international energy landscape, setting benchmarks and sharing expertise.
`,
    icon: FaRecycle,
  },
  {
    name: 'Energy Access and Equity',
    // summary: `At the heart of our mission is the belief that everyone deserves reliable and affordable energy. We champion initiatives that bridge the energy gap, ensuring that even the most remote and underserved communities are not left in the dark. Our projects prioritize not just access, but also fairness, guaranteeing that energy solutions are distributed equitably, promoting inclusive growth and development.`,
    summary: `Our projects prioritize not just access, but also fairness, guaranteeing that energy solutions are distributed equitably, promoting inclusive growth and development.`,
    icon: FaRecycle,
  },
];

export interface SlideItemTypes {
  heading: string;
  summary: string;
  image: StaticImageData;
  link: string;
}

export const resourcesSliderItems: SlideItemTypes[] = [
  {
    heading: 'Energix Lifestyle Community',
    summary:
      'Living the best lifestyle, creating the best future for ourselves and our kids, generations to come, and the world at large, we at Energix Energy aim to create a sustainable and enabling environment.',
    image: image,
    link: '/',
  },
  {
    heading: 'Energix Startups and Ventures',
    summary:
      'At Energix, we help startups grow their businesses by investing in them as much as they invest in us.',
    image: image2,
    link: '/',
  },
];

export interface InvestmentPercTypes {
  header: string;
  summary: string;
  icon: IconType;
  iconColor: string;
  iconBg: string;
}

export const investmentPercs: InvestmentPercTypes[] = [
  {
    header: 'Deep Industry Expertise',
    summary: `Our team comprises industry veterans who have been at the forefront of the energy sector's evolution. This expertise ensures that your investments are grounded in knowledge and experience.`,
    icon: FaShieldAlt,
    iconBg: 'red',
    iconColor: 'white',
  },
  {
    header: 'Future-Oriented Approach',
    summary: `We're not just about tapping into existing opportunities; we're about creating them. Our research and development initiatives constantly explore emerging technologies and trends, ensuring our investors are always a step ahead.`,
    icon: FaShieldAlt,
    iconBg: 'blue',
    iconColor: 'white',
  },
  {
    header: 'Diverse Portfolio Options',
    summary: `Whether you're inclined towards cutting-edge renewables or believe in the potential of transitional energy solutions, our diverse portfolio caters to a range of investment appetites.`,
    icon: FaShieldAlt,
    iconBg: 'orange',
    iconColor: 'white',
  },
];

export const dashboardLinks = [
  {
    title: 'Overview',
    to: '/dashboard/overview',
    icon: FiCalendar,
  },
  {
    title: 'Funding',
    icon: FiCalendar,
    links: [
      {
        title: 'Deposit',
        to: '/dashboard/deposit',
      },
      {
        title: 'Deposit History',
        to: '/dashboard/deposit-history',
      },
    ],
  },
  {
    title: 'Withdrawal',
    icon: FiCalendar,
    links: [
      {
        title: 'Withdraw',
        to: '/dashboard/withdraw',
      },
      {
        title: 'Withdrawal History',
        to: '/dashboard/withdrawal-history',
      },
    ],
  },
  {
    title: 'Cart',
    to: '/dashboard/cart',
    icon: FiCalendar,
  },
  {
    title: 'Account Statement',
    to: '/dashboard/account-statement',
    icon: FiCalendar,
  },
  {
    title: 'Portfolios',
    to: '/dashboard/portfolios',
    icon: FiCalendar,
  },
  {
    title: 'Retirement',
    to: '/dashboard/retirement',
    icon: FiCalendar,
  },
  {
    title: 'Partnership',
    icon: FiCalendar,
    links: [
      {
        title: 'Individual',
        to: '/dashboard/partnership/individual',
      },
      {
        title: 'Business',
        to: '/dashboard/partnership/business',
      },
    ],
  },
  {
    title: 'Membership',
    to: '/dashboard/membership',
    icon: FiCalendar,
  },
  {
    title: 'Referral',
    to: '/dashboard/referral',
    icon: FiCalendar,
  },
  {
    title: 'Achievements',
    to: '/dashboard/achievements',
    icon: FiCalendar,
  },
  {
    title: 'Notifications',
    to: '/dashboard/notifications',
    icon: FiCalendar,
  },
];

export const dashboardBottomLinks = [
  // {
  //   title: 'Support',
  //   to: '/dashboard/support',
  //   icon: FiCalendar,
  // },
  {
    title: 'Settings',
    to: '/dashboard/settings',
    icon: FiCalendar,
  },
  {
    title: 'Logout',
    to: '/dashboard/logout',
    icon: FiCalendar,
  },
];
