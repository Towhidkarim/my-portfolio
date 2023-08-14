import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LoadingBar from './components/Animable/LoadingBar';
import thumbnail from '@/assets/thumbnail.jpeg';
import AnimatedCursor from './components/Animable/AnimatedCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Towhid Karim | Portfolio',
  description:
    "I'm a web developer and welcome to my portfolio, where I invite you to explore the culmination of my dedication and passion.",
  keywords: [
    'web',
    'web developer',
    'front-end',
    'react',
    'next.js',
    'tailwind css',
    'html',
    'css',
    'javascript',
    'portfolio',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Towhid Karim | Portfolio',
    description:
      'welcome to my portfolio, where I invite you to explore the culmination of my dedication and passion.',
    images:
      'https://raw.githubusercontent.com/Towhidkarim/Timer-App/main/preview.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='shortcut icon'
          href='https://raw.githubusercontent.com/Towhidkarim/my-portfolio/master/favicon.ico'
          type='image/png'
          sizes='any'
        />
      </head>
      <body className='bg-base-100'>
        <LoadingBar />
        {/* <AnimatedCursor /> */}
        {children}
      </body>
    </html>
  );
}
