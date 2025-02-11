export function Services({ data }) {
  return (
    <section id="services" >
      <h2  >{data.title}</h2>
      <div  >
        {data.services.map((service, index) => (
          <div key={index} >
            <img src={service.iconURL} alt={service.title}  />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}