const Technologies = ({ title, technologies }) => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center font-bold mb-20">{title}</h2>
      <div className="flex flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center w-1/3 sm:w-1/3 md:w-1/6 max-w-[150px] mx-4 mb-6">
            <img src={tech.iconUrl} alt={tech.slug} className="w-12 h-12 mb-2" />
            <span className=" text-xs text-center">{tech.slug}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;