// app/projects/[project]/page.tsx

import fallBackImage from '@/public/project.png';
import { getSingleProject } from '@/sanity/sanity.query';
import type { ProjectType } from '@/types';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the ProjectImage component as a client component
const ProjectImage = dynamic(() => import('../../components/ProjectImage'), {
  ssr: false
});

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || 'add-a-fallback-project-image-here',
      title: project.name,
      description: project.tagline
    }
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className='max-w-6xl mx-auto lg:px-16 px-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex items-start justify-between mb-4'>
          <h1 className='font-bold lg:text-5xl text-3xl lg:leading-tight mb-4'>
            {project.name}
          </h1>
        {
          project.githubUrl && (
            <a
              href={project.githubUrl}
              rel='noreferrer noopener'
              className='bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2'
            >
              GitHub &rarr;
            </a>
          )
        }
        {
          project.projectUrl && (
            <a
              href={project.projectUrl}
              rel='noreferrer noopener'
              className='bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2'
            >
              Live Link &rarr;
            </a>
          )
        }
         
        </div>

        <ProjectImage
          src={project.coverImage?.image || fallBackImage}
          alt={project.coverImage?.alt || project.name}
        />

        {/* Render all images */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {project.images &&
            project.images.map((img, index) => (
              <ProjectImage
                key={index}
                src={img.image || fallBackImage}
                alt={img.alt || `Project image ${index + 1}`}
              />
            ))}
        </div>

        <div className='flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400'>
          <PortableText value={project.description} />
        </div>
        <ul className='flex flex-wrap items-center gap-3 mt-8'>
          {project.technologies && project.technologies.map((skill, id) => (
            <li
              key={id}
              className='bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1'
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
