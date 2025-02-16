export function Services({ data }) {
  const colors = ["#9162C0", "#449D5D", "#D17724", "#D17724", "#9162C0", "#449D5D"];

  return (
    <section id="services" className="py-10 lg:py-40 bg-gray-100">
      <div className="container mx-auto px-20">
        <div className="text-center mb-8"> {/* Centering the title and description */}
          <h2 className="text-3xl font-bold">{data.title}</h2>
          <p className="text-gray-600 mb-6 max-w-xl leading-relaxed mx-auto">
            {data.description}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {data.services.map((service, index) => {
            const titleColor = colors[index % colors.length];
            return (
              <div
                key={index}
                className="relative w-[370px] h-[250px] bg-white shadow-lg group overflow-hidden flex flex-col items-center justify-center"
              >
                <img
                  src={service.iconURL}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3
                  className="text-lg font-bold text-center"
                  style={{ color: titleColor }}  
                >
                  {service.title}
                </h3>
                <div className="absolute inset-0 bg-[#27273D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-xl font-bold text-center">{service.DescTitle}</h3>
                  <p className="mt-2 text-center">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}