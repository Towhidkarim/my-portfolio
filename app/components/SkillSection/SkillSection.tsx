import { MdOutlineSpeed } from 'react-icons/md';
import Features from './Features';
import Masteries from './Masteries';
import OtherSkills from './OtherSkills';

const SkillSection = () => {
  return (
    <section className='container mx-auto bg-base-100 text-base-content'>
      <div className='prose mx-auto mt-8'>
        <h1 className=' text-center lg:text-4xl text-3xl w-full'>My SKills</h1>
        <hr className=' w-[40%] h-1 bg-base-content mx-auto my-0 rounded-2xl' />
      </div>
      <div className='flex flex-col md:flex-row md:gap-0 gap-20 w-full min-h-[70vh] justify-center items-center mt-4 mb-8'>
        <Features />
        <Masteries />
      </div>
      <OtherSkills />
      <br />
      <br />
    </section>
  );
};

export default SkillSection;
