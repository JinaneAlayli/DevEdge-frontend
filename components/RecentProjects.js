export function RecentProjects({ data }) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
          <a
            href={data.buttonLink}
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
          >
            {data.buttonText}
          </a>
        </div>
      </section>
    );
  }
  