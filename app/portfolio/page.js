import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Quotation from "@/components/Quotation";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer"; 

export default async function PortfolioPage() {
  let data;
  try {
    const res = await fetch("http://localhost:5000/api/portfolio");
    if (!res.ok) throw new Error("Failed to fetch portfolio data");
    data = await res.json();
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }

  const { title, description, portfolio, quotation, technology } = data.data;

  return (
    <>
      <Header />
     
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
        <p className="max-w-2xl mx-auto text-center mb-8">{description}</p>
        
        <h2 className="text-2xl font-bold mb-4">{portfolio.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {quotation && <Quotation {...quotation} />}
        {technology && <Technologies {...technology} />}
      </div>
      <Footer />
    </>
  );
}
