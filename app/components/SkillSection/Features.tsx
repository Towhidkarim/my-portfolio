import { MdOutlineSpeed } from 'react-icons/md';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { AiOutlineAntDesign, AiOutlineCode } from 'react-icons/ai';

import Feature from './Feature';

const Features = () => {
  return (
    <div className='grid grid-cols-2 text-base-content md:w-[50%] w-[80%] mx-auto'>
      <Feature icon={<MdOutlineSpeed />} text='Fast Loading Pages' />
      <Feature icon={<HiOutlineDevicePhoneMobile />} text='Responsive Design' />
      <Feature icon={<AiOutlineAntDesign />} text='Simple & Elegant' />
      <Feature icon={<AiOutlineCode />} text='Clean Code' />
    </div>

    // <div className='md:w-[45%] mx-auto w-[80%] md:h-[475px] flex flex-col justify-center items-center translate-y-10'>
    //   <div className='shadow-xl rounded-2xl h-full w-full flex flex-col'>
    //     <div
    //       className='w-1/2 mx-auto bg-neutral h-16 rounded-2xl flex
    //                justify-center items-center -translate-y-1/3
    //                shadow-lg
    //                '
    //     >
    //       <h1 className='md:text-3xl text-2xl font-extrabold mx-auto text-base-100'>
    //         Soft Skills
    //       </h1>
    //     </div>
    //     <div className='grid grid-cols-2 mb-8 mx-auto lg:gap-20 md:gap-10 gap-6'>
    //       <Feature icon={<MdOutlineSpeed />} text='Fast Loading Pages' />
    //       <Feature
    //         icon={<HiOutlineDevicePhoneMobile />}
    //         text='Responsive Design'
    //       />
    //       <Feature icon={<AiOutlineAntDesign />} text='Simple & Elegant' />
    //       <Feature icon={<AiOutlineCode />} text='Clean Code' />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Features;
