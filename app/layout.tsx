import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LoadingBar from './components/Animable/LoadingBar';
import AnimatedCursor from './components/Animable/AnimatedCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Towhid Karim | Portfolio',
  description: "Towhid Karim's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <LoadingBar /> */}
      <body className='bg-base-100'>
        <LoadingBar />
        {/* <AnimatedCursor /> */}
        {children}
      </body>
    </html>
  );
}
