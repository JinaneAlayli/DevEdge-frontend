export function RequestConsultation({ data }) {
  return (
    <section className=" py-10 lg:py-20 bg-gray-100">
      <div className="w-[60%] bg-[#27273D] text-white text-center mx-auto p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{data.title}</h2>
      
        <div className="mx-auto mt-3 mb-6 w-[140px] h-[4px] bg-[#FFB300]"></div>
        <p className="mt-4 text-base sm:text-lg">{data.slug.replace("-", " ")}</p>
        <a
          href={data.buttonLink}
          className="mt-6 inline-block bg-[#FFB300] text-black w-[262px] py-3 text-sm sm:text-base font-medium shadow-md hover:bg-white transition duration-300 text-center"
          style={{ borderRadius: "0" }}
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
}
  