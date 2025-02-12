import { useEffect, useRef } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { RequestConsultation } from "@/components/RequestConsultation";
import { RecentProjects } from "@/components/RecentProjects";

export default function HomeContent({ content, sectionIndex, handleSectionInView }) {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          handleSectionInView(Number(index));
        }
      });
    }, observerOptions);

    sectionRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [handleSectionInView]);

  return (
    <div>
      <div ref={sectionRefs[0]} data-index="0">
        <Hero data={content?.hero} />
      </div>
      <div ref={sectionRefs[1]} data-index="1">
        <About data={content?.about} />
      </div>
      <div ref={sectionRefs[2]} data-index="2">
        <Services services={content?.services} />
      </div>
      <div ref={sectionRefs[3]} data-index="3">
        <RequestConsultation data={content?.requestConsultation} />
      </div>
      <div ref={sectionRefs[4]} data-index="4">
        <RecentProjects data={content?.recentProjects} />
      </div>
    </div>
  );
}
