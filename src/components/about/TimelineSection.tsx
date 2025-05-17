import SectionTitle from '../common/SectionTitle';

const milestones = [
  {
    date: 'January 2025',
    title: 'Idea & Planning',
    description: 'Conceptualized Hivix Digital with a mission to revolutionize digital marketing through innovative, data-driven strategies.',
  },
  {
    date: 'February 2025',
    title: 'Market Research & Team Formation',
    description: 'Conducted thorough market research and started assembling a skilled team of marketing professionals.',
  },
  {
    date: 'March 2025',
    title: 'Service Development',
    description: 'Developed core service offerings including SEO, content marketing, social media management, and paid advertising.',
  },
  {
    date: 'April 2025',
    title: 'Branding & Website Launch',
    description: 'Created the Hivix Digital brand identity and launched the official website to showcase services and expertise.',
  },
  {
    date: 'May 2025',
    title: 'Official Launch & First Client Projects',
    description: 'Launched Hivix Digital officially and secured first client projects focusing on delivering measurable ROI.',
  },
];

const TimelineSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle
          title="Our Journey"
          subtitle="From concept to launch, here’s how Hivix Digital started its journey in early 2025."
          center
        />

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-primary-500' : 'bg-secondary-500'}`}></div>
                
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className={`inline-block text-xl font-bold py-1 px-3 rounded-full mb-2 ${index % 2 === 0 ? 'bg-primary-100 text-primary-700' : 'bg-secondary-100 text-secondary-700'}`}>
                        {milestone.date}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
