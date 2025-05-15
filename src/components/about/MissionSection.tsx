import SectionTitle from '../common/SectionTitle';

const MissionSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Our Mission & Vision"
              subtitle="We're on a mission to help businesses reach their full potential through strategic digital marketing."
            />
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses of all sizes with innovative digital marketing solutions that drive growth, increase visibility, and deliver measurable results. We believe in transparent, data-driven strategies tailored to each client's unique needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be the most trusted digital marketing partner for ambitious businesses worldwide, known for our integrity, creativity, and consistent delivery of exceptional ROI. We aim to set new standards in the industry through continuous innovation and client success.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Our Values</h3>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Excellence in everything we do</li>
                  <li>Integrity and transparency with our clients</li>
                  <li>Data-driven decision making</li>
                  <li>Continuous learning and innovation</li>
                  <li>Genuine partnership with our clients</li>
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