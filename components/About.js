"use client";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

export function About({ data, portfolioData }) {
  const colors = ["#9162C0", "#449D5D", "#D17724"];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" className="py-10 lg:py-60 bg-gray-100">
      <div className="container mx-auto px-20 flex flex-col lg:flex-row items-center gap-28 lg:gap-32">
        
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-10">{data.left.title}</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            {data.left.WebAppTypes.map((type, index) => (
              <span
                key={index}
                className="text-sm font-medium px-4 py-1.5 rounded-full"
                style={{ color: colors[index % colors.length], backgroundColor: `${colors[index % colors.length]}14` }}
              >
                {type.title}
              </span>
            ))}
          </div>
          <p className="text-gray-600  max-w-xl leading-relaxed mx-auto lg:mx-0">
            {data.left.description}
          </p>
        </div>

        <div className="relative w-full lg:w-[400px] h-auto lg:h-[130px] flex flex-col items-center lg:flex-row lg:justify-end overflow-visible">
          {portfolioData.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className=" py-0  w-[300px] transition-all duration-300 ease-in-out lg:absolute"
              style={{
                top: !isMobile ? `-${index * 15}px` : "unset",
                left: !isMobile ? `-${index * 120}px` : "unset",
                transform: `rotate(${isMobile ? 0 : -(index * 2)}deg) translateY(${hoveredIndex === index ? "-20px" : "0px"})`,
                zIndex: hoveredIndex === index ? 10 : 3 - index,
                position: isMobile ? "static" : "absolute",
                marginBottom: isMobile ? "30px" : "unset",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard {...project} width={290} height={263} />
            </div>
          ))}
        </div>
 
        {isMobile && (
          <div className="mt-0 lg-mt:10  w-full text-center">
            <a
              href={data.left.buttonLink}
              className="inline-block bg-[#27273D] text-white px-6 py-3 w-[262px] text-center text-sm font-medium shadow-md hover:bg-[#FFB300] hover:text-white transition-all"
            >
              {data.left.buttonText}
            </a>
          </div>
        )}
      </div>
 
      {!isMobile && (
        <div className=" mt-10 px-40">
          <a 
            href={data.left.buttonLink}
            className="inline-block bg-[#27273D] text-white px-6 py-3 w-[262px] text-center text-sm font-medium shadow-md hover:bg-[#FFB300] hover:text-white transition-all"
          >
            {data.left.buttonText}
          </a>
        </div>
      )}
    </section>
  );
}