// app/projects/[project]/page.tsx

import fallBackImage from '@/public/project.png';
import { getSingleProject } from '@/sanity/sanity.query';
import type { ProjectType } from '@/types';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import Image from 'next/image';

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

          <a
            href={project.projectUrl}
            rel='noreferrer noopener'
            className='bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2'
          >
            Explore
          </a>
        </div>

        <Image
          className='rounded-xl border border-zinc-800'
          width={900}
          height={460}
          src={project.coverImage?.image || fallBackImage}
          alt={project.coverImage?.alt || project.name}
        />

        {/* Render all images */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {project.images.map((img, index) => (
            <Image
              key={index}
              className='rounded-xl border border-zinc-800'
              width={900}
              height={460}
              src={img.image || fallBackImage}
              alt={img.alt || `Project image ${index + 1}`}
            />
          ))}
        </div>

        <div className='flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400'>
          <PortableText value={project.description} />
        </div>
      </div>
    </main>
  );
}
