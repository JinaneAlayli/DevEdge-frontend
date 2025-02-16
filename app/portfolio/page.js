import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Quotation from "@/components/Quotation";
import Technologies from "@/components/Technologies";

export default async function PortfolioPage() {
  let data;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${backendUrl}/api/portfolio`);
    if (!res.ok) throw new Error("Failed to fetch portfolio data");
    data = await res.json();
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }

  const { title, description, portfolio, quotation, technology } = data.data;

  return (
    <>
      <Header isFixed={true} bgColor="#27273D" />
      <div className=" sm:px-[160px] min-h-screen bg-gray-100 p-8 pt-[180px] flex flex-col space-y-8">
        <h1 className="text-4xl font-bold text-left">{title}</h1>
         
        <p className="w-full sm:max-w-[60%] text-lg leading-relaxed">{description}</p>

        <h2 className="text-3xl font-bold text-center">{portfolio.title}</h2>
 
        <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center gap-2">
          {portfolio.projects.map((project, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-0.25rem)]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {quotation && <Quotation {...quotation} />}
        {technology && <Technologies {...technology} />}
      </div>
      <Footer />
    </>
  );
}
