import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProjectList from '../components/ProjectSection/ProjectList';
import AnimPresence from '../components/Animable/AnimPresence';
import PageFade from '../components/Animable/PageFade';

const Projects = () => {
  return (
    <main>
      <AnimPresence>
        <PageFade>
          <Navbar />
          <div className='prose mx-auto mt-8'>
            <h1 className=' text-center lg:text-4xl text-3xl text-base-content w-full'>
              My Projects
            </h1>
            <hr className=' w-[40%] h-1 bg-base-content mx-auto my-0 rounded-2xl' />
          </div>
          <div className='mx-auto'>
            <ProjectList />
          </div>
        </PageFade>
      </AnimPresence>
    </main>
  );
};

export default Projects;
