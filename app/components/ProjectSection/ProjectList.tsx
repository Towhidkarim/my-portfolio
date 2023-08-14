import ProjectCard from './ProjectCard';
import projectsData from '@/constants/Projects';

const ProjectList = () => {
  return (
    <section className='mx-auto'>
      <div className='grid  w-4/5  grid-cols-1 mx-auto gap-x-2 gap-y-6 my-4'>
        {projectsData.map((data) => {
          return <ProjectCard {...data} />;
        })}
      </div>
      <br />
      <br />
    </section>
  );
};

export default ProjectList;
