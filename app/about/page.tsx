import Navbar from '@/app/components/Navbar/Navbar';
import PageFade from '../components/Animable/PageFade';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import Feature from '../components/SkillSection/Feature';
import Link from 'next/link';

const Page = () => {
  return (
    <main className='container mx-auto bg-base-100 h-full'>
      <PageFade>
        <Navbar />
        <section className='mx-auto w-full min-h-[75dvh] flex justify-center items-center flex-col'>
          <article className=' mx-auto mt-10 w-full text-center  text-base-content'>
            <h1 className='text-4xl font-extrabold my-6'>
              Hi! I'm Towhid Karim!
            </h1>
            <p className='md:text-xl text-lg min-w-[50%] p-10 mx-auto text-left lg:text-center'>
              I'm passionate web developer with a flair for turning innovative
              ideas into functional and visually captivating digital
              experiences. My journey in the world of coding began with a
              fascination for how lines of logic could breathe life into pixels
              on a screen.
              <br />
              With a solid foundation in React, Next.js, and Tailwind, I've
              harnessed the power of these technologies to bring creative
              visions to life. Whether it's building responsive user interfaces
              or architecting seamless user experiences, I take pride in
              combining aesthetics with functionality.
              <br />
              Beyond the code, I'm an avid problem solver, always eager to
              tackle new challenges head-on. When I'm not immersed in lines of
              code, you might find me exploring the latest design trends or
              indulging in a cup of coffee while brainstorming my next project.
              I'm excited to continue pushing the boundaries of web development
              and to collaborate on projects that leave a lasting digital
              footprint.
              <br />
              Welcome to my portfolio, where I invite you to explore the
              culmination of my dedication and passion.
            </p>
          </article>
          <section className='mx-auto'>
            <h2 className='text-center text-xl font-bold'>Find me on</h2>
            <span className=' flex flex-row items-center justify-center gap-3 mx-auto w-full'>
              <Link href='https://github.com/Towhidkarim/' target='_blank'>
                <Feature icon={<BsGithub />} text='Github' />
              </Link>
              <Link href='http://fb.me/towhid.karim.1' target='_blank'>
                <Feature icon={<BsFacebook />} text='Facebook' />
              </Link>
            </span>
          </section>
          <br /> <br />
        </section>
      </PageFade>
    </main>
  );
};

export default Page;
