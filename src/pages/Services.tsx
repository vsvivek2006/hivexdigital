import { 
  Search, 
  Share2, 
  BarChart2, 
  Globe, 
  Edit3, 
  Mail, 
  PieChart, 
  Smartphone
} from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import SectionTitle from '../components/common/SectionTitle';
import CtaSection from '../components/home/CtaSection';

const services = [
  {
    icon: <Search size={24} />,
    title: 'Search Engine Optimization',
    description: 'Improve your visibility in search results and drive organic traffic to your website.',
    features: [
      'Keyword research and strategy',
      'On-page and off-page optimization',
      'Technical SEO audits',
      'Content optimization',
      'Local SEO for businesses',
    ],
  },
  {
    icon: <Share2 size={24} />,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage with your audience through effective social campaigns.',
    features: [
      'Social media strategy development',
      'Content creation and curation',
      'Community management',
      'Paid social advertising',
      'Performance analytics and reporting',
    ],
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Google Ads Management',
    description: 'Drive targeted traffic to your website with optimized pay-per-click advertising campaigns.',
    features: [
      'Keyword research and selection',
      'Ad copy creation and optimization',
      'Landing page optimization',
      'Bid management and budget allocation',
      'Conversion tracking and ROI analysis',
    ],
  },
  {
    icon: <Globe size={24} />,
    title: 'Website Design & Development',
    description: 'Create a stunning, responsive website that converts visitors into customers.',
    features: [
      'Custom website design',
      'Mobile-responsive development',
      'UX/UI optimization',
      'E-commerce functionality',
      'Website maintenance and support',
    ],
  },
  {
    icon: <Edit3 size={24} />,
    title: 'Content Marketing',
    description: 'Engage your audience with compelling, SEO-optimized content that drives results.',
    features: [
      'Content strategy development',
      'Blog post creation',
      'Whitepapers and ebooks',
      'Infographics and visual content',
      'Content distribution and promotion',
    ],
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Marketing',
    description: 'Nurture leads and boost sales with targeted email marketing campaigns.',
    features: [
      'Email strategy development',
      'Newsletter design and creation',
      'Automated email sequences',
      'List segmentation and management',
      'A/B testing and optimization',
    ],
  },
  {
    icon: <PieChart size={24} />,
    title: 'Analytics & Reporting',
    description: 'Gain valuable insights into your marketing performance with detailed analytics.',
    features: [
      'Custom dashboard setup',
      'Traffic and conversion analysis',
      'Customer journey mapping',
      'ROI calculation and reporting',
      'Regular performance reviews',
    ],
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile Marketing',
    description: 'Reach customers on their mobile devices with targeted marketing strategies.',
    features: [
      'Mobile app marketing',
      'SMS marketing campaigns',
      'Mobile-first content strategy',
      'Location-based marketing',
      'App store optimization',
    ],
  },
];

const Services = () => {
  return (
    <div>
      <div className="bg-gradient-blue py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to help your business grow online
          </p>
        </div>
      </div>
      
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Digital Marketing Services"
            subtitle="We offer a full range of digital marketing services to help your business reach its goals."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection />
    </div>
  );
};

export default Services;