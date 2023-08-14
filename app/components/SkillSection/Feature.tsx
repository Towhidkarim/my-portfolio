import React, { ReactNode } from 'react';

const Feature = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className='flex flex-col gap-1 items-center justify-start sm:m-4 m-2 max-w-[200px] hover:-translate-y-1 transition text-base-content'>
      <div className='text-4xl md:text-6xl max-h-24 max-w-24'>{icon}</div>
      <span
        className='md:text-base text-sm font-bold text-center 
                       max-w-[108px] cursor-default
                       '
      >
        {text}
      </span>
    </div>
  );
};

export default Feature;
