import TeamSection from '../components/about/TeamSection';
import MissionSection from '../components/about/MissionSection';
import TimelineSection from '../components/about/TimelineSection';
import CtaSection from '../components/home/CtaSection';

const About = () => {
  return (
    <div>
      <header className="bg-gradient-blue py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">About Hivix Digital</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Founded in 2025, Hivix Digital is dedicated to revolutionizing digital marketing for businesses across India with cutting-edge strategies and personalized growth solutions.
          </p>
        </div>
      </header>

      <main>
        <MissionSection />
        <TeamSection />
        <TimelineSection />
        <CtaSection />
      </main>
    </div>
  );
};

export default About;
