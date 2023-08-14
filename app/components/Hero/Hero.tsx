import Image from 'next/image';
import heroImage from '@/assets/Hero.svg';
import { TypeAnimation } from './TypeAnimation';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='container m-auto flex h-[80vh] text-accent-content'>
      <div className='flex md:flex-row flex-col-reverse w-full justify-between items-center '>
        <div className='prose flex md:items-start items-center justify-center flex-col m-auto text-accent-content'>
          <h3 className='t'>Hi there!</h3>
          <h1 className=' lg:text-5xl mb-1 text-accent-content'>
            I'm Towhid Karim
          </h1>
          <TypeAnimation />
          <div className='flex gap-2 my-4'>
            <label
              htmlFor='my-drawer'
              className='btn btn-neutral md:hidden w-36'
            >
              See More ⟶
            </label>
            <Link
              href='/skills'
              className='btn btn-neutral hidden md:block w-36 py-4'
            >
              My SKills ⟶
            </Link>
            <Link
              href='/projects'
              className='btn btn-neutral hidden md:block w-36 py-4'
            >
              Projects ⟶
            </Link>
          </div>
        </div>
        <Image
          src={heroImage}
          alt='hero'
          className='flex items-center justify-center m-auto md:w-[40%] w-[80%] pointer-events-none'
        />
      </div>
    </section>
  );
};

export default Hero;
