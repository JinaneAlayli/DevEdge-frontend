import React from "react";
import ProjectCard from "./ProjectCard";

export function About({ data, portfolioData }) {
   
  const selectedProjects = portfolioData.slice(0, 3);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
      
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{data.left.title}</h2>
          <p className="mt-4 text-gray-600">{data.left.description}</p>
          <ul className="mt-4 space-y-2">
            {data.left.WebAppTypes.map((type, index) => (
              <li key={index} className="text-blue-600 font-medium">
                {type.title}
              </li>
            ))}
          </ul>
          <a
            href={data.left.buttonLink}
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            {data.left.buttonText}
          </a>
        </div>
 
        <div className="grid grid-cols-3 gap-4">
          {selectedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              slug={project.slug}
              imageUrl={project.imageUrl}
              link={project.link}
              width={100}   
              height={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
