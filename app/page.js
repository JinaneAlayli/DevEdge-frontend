import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";

async function getHomeData() {
  const res = await fetch("http://localhost:5000/api/home"); 
  if (!res.ok) throw new Error("Failed to fetch data");
  const { data } = await res.json();
  return data;
}

export default async function HomePage() {
  const homeData = await getHomeData();
  return (
    <>
      <Header />
      <Hero data={homeData.hero} />
      <About data={homeData.about} />
      <Services data={homeData.services} />
    </>
  );
}