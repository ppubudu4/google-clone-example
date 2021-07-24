import Image from 'next/image';
import React from 'react';

const Avatar = ({ url, className }) => {
  return (
    <Image
      loading='lazy'
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      height={60}
      width={60}
      alt='profile picture'
    />
  );
};

export default Avatar;
