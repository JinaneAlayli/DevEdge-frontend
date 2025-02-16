const Technologies = ({ title, technologies }) => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl text-center font-bold mb-12">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies?.map(({ iconUrl, slug }, index) => (
          <div key={index} className="flex flex-col items-center w-1/3 sm:w-1/4 md:w-1/6 max-w-[150px]">
            <img src={iconUrl} alt={slug} className="w-12 h-12 mb-2" loading="lazy" />
            <span className="text-xs text-center text-gray-700">{slug}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;