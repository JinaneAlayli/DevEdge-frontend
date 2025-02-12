import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { RequestConsultation } from "@/components/RequestConsultation";
import { RecentProjects } from "@/components/RecentProjects";
import Loading from "@/components/Loading";
export default async function HomePage() {
  let data;

  try {
    const res = await fetch("http://localhost:5000/api/home");  
    if (!res.ok) throw new Error("Failed to fetch data");

    const response = await res.json();
    data = response.data;  
  } catch (error) {
    return <div>Error: {error.message}</div>;  
  }

  return (
    <>
      <Header /> 
      {data ? (
        <>
          <Hero data={data.hero} />
          <About data={data.about} />
          <Services data={data.services} />
          <RequestConsultation data={data.requestConsultation} />
          <RecentProjects data={data.recentProject} />
        </>
      ) : (
        <Loading />  
      )}
    </>
  );
}
