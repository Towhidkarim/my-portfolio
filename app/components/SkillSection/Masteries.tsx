import Feature from './Feature';
import { FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMui,
  SiDaisyui,
} from 'react-icons/si';

const Masteries = () => {
  return (
    <div className='md:w-[45%] mx-auto w-[80%] flex flex-col justify-center items-center text-base-content'>
      <div className='shadow-xl rounded-2xl h-full w-full flex flex-col'>
        <div
          className='w-1/2 mx-auto bg-base-content h-16 rounded-2xl flex
                         justify-center items-center -translate-y-1/3
                         shadow-lg
                         '
        >
          <h1 className='md:text-3xl text-base-100 text-2xl font-extrabold mx-auto'>
            Masteries
          </h1>
        </div>
        <div className='grid gap-2 grid-cols-3 mb-8'>
          <Feature icon={<SiReact />} text='React' />
          <Feature icon={<SiNextdotjs />} text='Next.js' />
          <Feature icon={<SiJavascript />} text='Javascript' />
          <Feature icon={<SiTailwindcss />} text='Tailwind' />
          <Feature icon={<SiTypescript />} text='Typescript' />
          <Feature icon={<SiHtml5 />} text='HTML' />
          <Feature icon={<SiCss3 />} text='CSS' />
          <Feature icon={<SiMui />} text='Material UI' />
          <Feature icon={<SiDaisyui />} text='Daisy UI' />
        </div>
      </div>
    </div>
  );
};

export default Masteries;
