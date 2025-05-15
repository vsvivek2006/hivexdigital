import TeamSection from '../components/about/TeamSection';
import MissionSection from '../components/about/MissionSection';
import TimelineSection from '../components/about/TimelineSection';
import CtaSection from '../components/home/CtaSection';

const About = () => {
  return (
    <div>
      <div className="bg-gradient-blue py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">About DigitalEdge</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            We're a team of digital marketing experts passionate about helping businesses grow online.
          </p>
        </div>
      </div>
      <MissionSection />
      <TeamSection />
      <TimelineSection />
      <CtaSection />
    </div>
  );
};

export default About;