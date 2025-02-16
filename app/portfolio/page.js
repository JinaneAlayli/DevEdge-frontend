import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Quotation from "@/components/Quotation";
import Technologies from "@/components/Technologies";

export default async function PortfolioPage() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  let data = null;

  try {
    const res = await fetch(`${backendUrl}/api/portfolio`);
    if (!res.ok) throw new Error("Failed to fetch portfolio data");
    data = await res.json();
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  if (!data?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No portfolio data available.
      </div>
    );
  }

  const { title, description, portfolio, quotation, technology } = data.data;

  return (
    <>
      <Header isFixed bgColor="#27273D" />
      <main className="min-h-screen bg-gray-100 p-8 pt-[180px] sm:px-[160px] flex flex-col space-y-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="sm:max-w-[60%] text-lg leading-relaxed">{description}</p>

        {portfolio?.projects?.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-center mb-6">{portfolio.title}</h2>
            <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center gap-2">
              {portfolio.projects.map((project, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-0.25rem)]">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>
        )}

        {quotation && <Quotation {...quotation} />}
        {technology && <Technologies {...technology} />}
      </main>
      <Footer />
    </>
  );
}