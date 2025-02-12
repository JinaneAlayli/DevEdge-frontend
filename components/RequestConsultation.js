export function RequestConsultation({ data }) {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p className="mt-4">{data.slug.replace("-", " ")}</p>
        <a
          href={data.buttonLink}
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-medium"
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
}