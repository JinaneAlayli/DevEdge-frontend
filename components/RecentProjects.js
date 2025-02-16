import ProjectCard from "./ProjectCard";

export function RecentProjects({ data, portfolioData }) {
  const recentProjects = portfolioData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">{data.title}</h2>

        <div className="flex flex-col md:flex-row justify-center items-center my-8 space-y-4 md:space-y-0 md:space-x-6">
          {recentProjects.map((project, index) => (
            <div className="flex justify-center" key={index}>
              <ProjectCard
                title={project.title}
                slug={project.slug}
                imageUrl={project.imageUrl}
                link={project.link}
                width={500}
                height={416}
              />
            </div>
          ))}
        </div>

        <a
          href={data.buttonLink}
          
          className="inline-block bg-[#27273D] text-white px-6 py-3 w-[262px] text-center text-sm font-medium shadow-md hover:bg-[#FFB300] hover:text-white transition-all">
         
          {data.buttonText}
        </a>
      </div>
    </section>
  );
}