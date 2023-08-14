import Feature from './Feature';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFlask,
  SiPython,
  SiUnity,
} from 'react-icons/si';

const OtherSkills = () => {
  return (
    <div className='text-accent-content bg-base-100'>
      <p className='text-center text-lg mx-auto font-bold m-2'>Other Skills</p>
      <div className='flex max-w-[90%] w-2/4 mx-auto justify-center items-start'>
        <Feature icon={<SiAdobephotoshop />} text='Adobe Photoshop' />
        <Feature icon={<SiAdobeillustrator />} text='Adobe Illustrator' />
        <Feature icon={<SiPython />} text='Python' />
        <Feature icon={<SiFlask />} text='Flask' />
        <Feature icon={<SiUnity />} text='Unity Engine' />
      </div>
    </div>
  );
};

export default OtherSkills;
