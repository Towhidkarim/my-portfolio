'use client';
import { TypeAnimation as Type } from 'react-type-animation';

export const TypeAnimation = () => {
  return (
    <Type
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A web developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'A web designer',
        1500,
        'A front-end dev',
        1500,
      ]}
      wrapper='h1'
      speed={20}
      //   style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='text-xl mb-5 mt-2 text-base-content'
    />
  );
};
