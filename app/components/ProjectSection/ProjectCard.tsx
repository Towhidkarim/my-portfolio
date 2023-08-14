import { project } from '@/constants/Projects';
import Image from 'next/image';
import coretimer from '@/assets/coretimer.png';
import Link from 'next/link';

const ProjectCard = ({
  title,
  description,
  imgurl,
  tags,
  wip,
  source,
  demo,
}: project) => {
  return (
    <section
      className='bg-base-100 text-accent-content shadow-xl
     rounded-xl m-2 flex flex-col md:flex-row w-full gap-4
     min-h-[500px] md:min-h-[400px]
     '
    >
      <figure className='md:w-2/4 min-h-2/4 mx-0 relative'>
        <Image
          src={imgurl}
          alt={title}
          className='  pointer-events-none h-full w-full object-cover rounded-xl'
          width={1200}
          height={500}
        />
      </figure>
      <div className='card-body prose md:w-2/4'>
        <h2 className='mb-0 md:text-left text-center'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-center flex flex-wrap w-full'>
          {tags.map((tag) => {
            return (
              <div className='badge badge-neutral p-3 pointer-events-none'>
                {tag}
              </div>
            );
          })}
        </div>
        <div className='flex justify-around items-center gap-2 mt-6'>
          <Link
            href={demo}
            target='_blank'
            className={`btn btn-outline rounded-3xl ${wip && 'btn-disabled'}`}
          >
            View Demo
          </Link>
          <Link
            href={source}
            target='_blank'
            className={`btn btn-outline rounded-3xl ${wip && 'btn-disabled'}`}
          >
            Source Code
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
