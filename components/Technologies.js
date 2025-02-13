import React from 'react';

const Technologies = ({ title, technologies }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded shadow">
            <img src={tech.iconUrl} alt={tech.slug} className="w-8 h-8" />
            <span className="font-semibold">{tech.slug}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;