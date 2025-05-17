import SectionTitle from '../common/SectionTitle';

const MissionSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Our Mission & Vision"
              subtitle="At DigitalEdge, we fuel growth for Indian businesses with innovative and data-driven digital marketing solutions."
            />
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To empower Indian startups and enterprises by delivering tailored digital marketing strategies that amplify brand visibility, engage target audiences effectively, and drive measurable business growth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading catalyst for digital transformation across India’s diverse business landscape, known for innovation, integrity, and exceptional client success.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Our Core Values</h3>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Client-centricity: Your goals drive our strategies.</li>
                  <li>Transparency: Open communication at every step.</li>
                  <li>Innovation: Leveraging the latest tools and trends.</li>
                  <li>Accountability: Delivering results you can trust.</li>
                  <li>Empowerment: Supporting Indian businesses to thrive online.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-100 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaboration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
