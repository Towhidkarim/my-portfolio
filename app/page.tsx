import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AnimPresence from './components/Animable/AnimPresence';
import PageFade from './components/Animable/PageFade';

export default function Home() {
  return (
    <main className='max-h-[100dvh]'>
      <AnimPresence>
        <PageFade>
          <Navbar />
          <Hero />
        </PageFade>
      </AnimPresence>
    </main>
  );
}
