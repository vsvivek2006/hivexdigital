import { Search, Share2, BarChart2, Globe, Edit3, Mail } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const services = [
  {
    icon: <Search size={24} />,
    title: 'Search Engine Optimization',
    description: 'Boost your website rankings in search results with our expert SEO strategies.',
  },
  {
    icon: <Share2 size={24} />,
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build brand awareness through effective social media campaigns.',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Google Ads Management',
    description: 'Drive targeted traffic to your website with optimized pay-per-click advertising campaigns.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Website Design',
    description: 'Create a stunning, responsive website that converts visitors into customers.',
  },
  {
    icon: <Edit3 size={24} />,
    title: 'Content Writing',
    description: 'Engage your audience with compelling, SEO-optimized content that drives results.',
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Marketing',
    description: 'Nurture leads and boost sales with targeted email marketing campaigns.',
  },
];

const ServicesSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Our Services"
          subtitle="We offer a comprehensive range of digital marketing services to help your business grow."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 hover:translate-y-[-8px] bg-white"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-100 text-primary-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                href="/services" 
                className="text-sm px-4 py-2"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary" href="/services" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;