import Header from "@/components/Header";
export function Hero({ data }) {
  return (
    <>
    <Header isHero={true} isFixed={true} bgColor="#27273D" />
    <section id="hero"
      className="relative min-h-screen flex items-center text-white"
      style={{
        background: `url('/images/heroBack.png') center/cover no-repeat`
      }}
    >  
      <div className="absolute inset-0 bg-[#27273D] opacity-80"></div>
 
      <div className="relative ml-[160px] w-[70%] flex flex-col gap-10">
        <h1 className="text-4xl font-bold sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl w-full max-w-3xl break-words">
          {data.title}
        </h1>
        <p className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-normal w-[60%]">
          {data.description}
        </p>
        <div className="flex gap-8 flex-wrap">
          <a
            href={data.buttonLinkLeft}
            className="bg-[#FFB300] text-black px-6 py-3 w-[267px] flex items-center justify-center hover:bg-white hover:text-[#FFB300] transition-all font-semibold"
          >
            {data.buttonTextLeft}
          </a>
          <a
            href={data.buttonLinkRight}
            className="bg-white text-black px-6 py-3 w-[267px] flex items-center justify-center hover:bg-[#FFB300] transition-all font-semibold"
          >
            {data.buttonTextRight}
          </a>
        </div>

      </div>
    </section>
    </>
  );
}
