export function Services({ data }) {
  console.log(data);
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p className="mt-4 text-gray-600">{data.description}</p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <img src={service.iconURL} alt={service.title} className="mx-auto w-16 h-16" />
              <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
