import ReduxProvider from '@/redux/ReduxProvider';
import '../globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/containers/navbar/Navbar';

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Footer from '@/containers/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <ReduxProvider>
        <body>
          <nav>
            <Navbar />
          </nav>
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </ReduxProvider>
    </html>
  );
}
