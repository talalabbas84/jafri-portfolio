// app/components/ProjectImage.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the Modal as a client component
const ImageModal = dynamic(() => import('./ImageModal'), { ssr: false });

const ProjectImage = ({ src, alt }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Image
        className='rounded-xl border border-zinc-800 cursor-pointer'
        width={900}
        height={460}
        src={src}
        alt={alt}
        onClick={openModal}
      />
      <ImageModal
        isOpen={isOpen}
        onClose={closeModal}
        imgSrc={src}
        imgAlt={alt}
      />
    </>
  );
};

export default ProjectImage;
