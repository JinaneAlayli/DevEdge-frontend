import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { RequestConsultation } from "@/components/RequestConsultation";
import { RecentProjects } from "@/components/RecentProjects";
import Loading from "@/components/Loading";
import Footer from '../components/Footer';

export default async function HomePage() {
  let homeData, portfolioData;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
     
    const homeRes = await fetch(`${backendUrl}/api/home`);;
    if (!homeRes.ok) throw new Error("Failed to fetch home data");
    homeData = (await homeRes.json()).data;

     
    const portfolioRes = await fetch(`${backendUrl}/api/portfolio`);;
    if (!portfolioRes.ok) throw new Error("Failed to fetch portfolio data");
    portfolioData = (await portfolioRes.json()).data.portfolio.projects;  
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      {homeData && portfolioData ? (
        <>
          <Hero data={homeData.hero} />
          <About data={homeData.about} portfolioData={portfolioData} />
          <Services data={homeData.services} />
          <RequestConsultation data={homeData.requestConsultation} />
          <RecentProjects data={homeData.recentProject} portfolioData={portfolioData} />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
