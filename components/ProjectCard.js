import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ title, slug, imageUrl, link, width = 300, height = 200 }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col items-center p-4">
      <Link href={link}>
        <Image 
          src={imageUrl} 
          alt={title} 
          width={width} 
          height={height} 
          className="object-cover"
          loading="lazy"
        />
      </Link>
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="text-gray-500">{slug}</p>
    </div>
  );
};

export default ProjectCard;
