export function Hero({ data }) {
  return (
    <section className="bg-blue-600 text-white min-h-screen flex items-center py-16">
      <div className="ml-[113px] w-[70%] flex flex-col gap-8">
        <h1 className="text-4xl font-bold sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl w-full max-w-3xl break-words]">
          {data.title}
        </h1>
        <p className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-normal">
          {data.description}
        </p>
        <div className="flex gap-8 flex-wrap">
          <a
            href={data.buttonLinkLeft}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg w-[267px] flex items-center justify-center hover:bg-blue-500 transition-all"
          >
            {data.buttonTextLeft}
          </a>
          <a
            href={data.buttonLinkRight}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg w-[267px] flex items-center justify-center hover:bg-blue-500 transition-all"
          >
            {data.buttonTextRight}
          </a>
        </div>
      </div>
    </section>
  );
}
