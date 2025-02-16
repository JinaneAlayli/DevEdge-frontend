import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ title, slug, imageUrl, link, width = 500, height = 316 }) => {
  return (
    <div
      className="bg-white shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 w-full"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Link href={link} className="w-full h-[60%] relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="object-cover"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-col justify-center items-start p-4 h-[40%]">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{slug}</p>
      </div>
    </div>
  );
};

export default ProjectCard;