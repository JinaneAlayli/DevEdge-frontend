import HeroSection from './Hero';
import AboutSection from './About';
import ServicesSection from './Services';

export default function HomeSection({ content }) {
  return (
    <div>
      <HeroSection content={content.hero} />
      <AboutSection content={content.about} />
      <ServicesSection services={content.services} />
    </div>
  );
}
