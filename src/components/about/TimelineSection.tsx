import SectionTitle from '../common/SectionTitle';

const milestones = [
  {
    year: 2015,
    title: 'Company Founded',
    description: 'DigitalEdge was founded with a vision to provide affordable, results-driven digital marketing solutions to small businesses.',
  },
  {
    year: 2017,
    title: 'First Major Client',
    description: 'Secured our first enterprise client and expanded our team to include specialists in SEO, PPC, and social media marketing.',
  },
  {
    year: 2018,
    title: 'Industry Recognition',
    description: 'Won "Best Digital Marketing Agency" at the Regional Business Awards and recognized for outstanding campaign results.',
  },
  {
    year: 2020,
    title: 'Global Expansion',
    description: 'Expanded our services to international clients and introduced new service offerings including content marketing and email automation.',
  },
  {
    year: 2022,
    title: 'Advanced Analytics Division',
    description: 'Launched our advanced analytics division to provide clients with deeper insights and data-driven strategies.',
  },
  {
    year: 2024,
    title: 'AI Integration',
    description: 'Pioneered the integration of AI technology into our marketing strategies, setting new industry standards for performance.',
  },
];

const TimelineSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle
          title="Our Journey"
          subtitle="From humble beginnings to industry leadership, we've been helping businesses grow for over a decade."
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
                        {milestone.year}
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