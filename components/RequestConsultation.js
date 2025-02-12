export function RequestConsultation({ data }) {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">  
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold">{data.title}</h2> 
        <p className="mt-4 text-lg">{data.slug.replace("-", " ")}</p>  
        <a
          href={data.buttonLink}
          className="mt-6 inline-block bg-white text-black px-8 py-3 font-medium shadow-md hover:shadow-lg transition duration-300"  
          style={{ border: 'none', borderRadius: '0' }}  
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
}