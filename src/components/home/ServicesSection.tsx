import { Search, Share2, BarChart2, Globe, Edit3, Mail } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const services = [
  {
    icon: <Search size={24} />,
    title: 'Search Engine Optimization (SEO)',
    description: 'Enhance your website’s visibility and drive organic traffic with proven SEO techniques tailored for your business.',
  },
  {
    icon: <Share2 size={24} />,
    title: 'Social Media Marketing',
    description: 'Build authentic connections and expand your reach through targeted and creative social media campaigns.',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Google Ads Management',
    description: 'Maximize ROI with expertly managed PPC campaigns that target the right audience at the right time.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Website Design & Development',
    description: 'Craft visually stunning, responsive websites optimized for user experience and conversions.',
  },
  {
    icon: <Edit3 size={24} />,
    title: 'Content Strategy & Writing',
    description: 'Deliver compelling, SEO-friendly content that engages your audience and drives business growth.',
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Marketing',
    description: 'Boost customer retention and conversions with personalized email campaigns that resonate.',
  },
];

const ServicesSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Our Digital Marketing Services"
          subtitle="Comprehensive solutions designed to grow your brand and increase your online impact."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              role="region"
              aria-labelledby={`service-title-${index}`}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-100 text-primary-600">
                {service.icon}
              </div>
              <h3 id={`service-title-${index}`} className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                href="/services" 
                className="text-sm px-4 py-2"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary" href="/services" size="lg" aria-label="View all services offered by Hivix Digital">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
