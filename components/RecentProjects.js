import React from "react";
import ProjectCard from "./ProjectCard";

export function RecentProjects({ data, portfolioData }) {
   
  const recentProjects = portfolioData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
          {recentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              slug={project.slug}
              imageUrl={project.imageUrl}
              link={project.link}
              width={300}
              height={200}
            />
          ))}
        </div>
 
        <a
          href={data.buttonLink}
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 font-medium"
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
}
