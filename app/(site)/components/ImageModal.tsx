// app/components/ImageModal.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

const ImageModal = ({ imgSrc, imgAlt, isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
      <div className='relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-white bg-red-500 rounded-full p-1'
        >
          &times;
        </button>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={900}
          height={600}
          className='rounded'
        />
      </div>
    </div>
  );
};

export default ImageModal;
