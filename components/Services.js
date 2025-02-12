export function Services({ data }) {
  console.log(data);
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:ml-[113px]">  
        <div className="text-left">  
          <h2 className="text-3xl md:text-[50px] font-bold">{data.title}</h2>
          <p className="mt-4 text-gray-600 text-lg md:text-[24px]">{data.description}</p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-24">  
          {data.services.map((service, index) => (
            <div
              key={index}
              className="relative w-[373.33px] h-[250px] bg-white shadow-lg rounded-lg group overflow-hidden flex flex-col items-center justify-center m-2" 
            >
              <img src={service.iconURL} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-bold text-center">{service.title}</h3>
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-bold text-center">{service.DescTitle}</h3>
                <p className="mt-2 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}