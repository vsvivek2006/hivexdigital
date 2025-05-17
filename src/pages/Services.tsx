import { 
  Search, 
  Share2, 
  BarChart2, 
  Globe, 
  Edit3, 
  Mail, 
  PieChart, 
  Smartphone,
  PenTool,
  Monitor,
  Phone,
  Layers,
  Zap,
} from 'lucide-react'; // Added some icons to match services

import ServiceCard from '../components/services/ServiceCard';
import SectionTitle from '../components/common/SectionTitle';
import CtaSection from '../components/home/CtaSection';

const services = [
  {
    icon: <PenTool size={24} />,
    title: 'Logo Design',
    description: 'Create a unique and memorable logo to represent your brand identity.',
    features: [
      'Custom logo concepts',
      'Vector design',
      'Multiple revisions',
      'Brand guidelines',
    ],
  },
  {
    icon: <Share2 size={24} />,
    title: 'Instagram & Facebook Management',
    description: 'Grow your social media presence with expert account management and content strategy.',
    features: [
      'Content creation & scheduling',
      'Community engagement',
      'Follower growth strategies',
      'Performance analysis',
    ],
  },
  {
    icon: <Layers size={24} />,
    title: 'Graphics Design',
    description: 'Design visually appealing graphics for marketing materials and social media.',
    features: [
      'Social media graphics',
      'Brochures and flyers',
      'Banners and posters',
      'Custom illustrations',
    ],
  },
  {
    icon: <Edit3 size={24} />,
    title: 'Content Writing & Marketing',
    description: 'Engage your audience with high-quality content tailored for your brand.',
    features: [
      'Blog posts & articles',
      'SEO-optimized content',
      'Email newsletters',
      'Content promotion',
    ],
  },
  {
    icon: <Zap size={24} />,
    title: 'Meta Ads (Facebook & Instagram Ads)',
    description: 'Drive targeted traffic and sales with optimized Meta advertising campaigns.',
    features: [
      'Ad campaign setup',
      'Audience targeting',
      'Creative ad design',
      'Performance tracking & optimization',
    ],
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Google Ads Management',
    description: 'Maximize ROI with expertly managed Google Ads campaigns.',
    features: [
      'Keyword research',
      'Ad copywriting',
      'Bid management',
      'Conversion tracking',
    ],
  },
  {
    icon: <Search size={24} />,
    title: 'Search Engine Optimization',
    description: 'Improve your search rankings and drive organic traffic to your site.',
    features: [
      'On-page & off-page SEO',
      'Technical audits',
      'Local SEO strategies',
      'Content optimization',
    ],
  },
  {
    icon: <Edit3 size={24} />,
    title: 'Blog Writing & Management',
    description: 'Consistent and engaging blog content to build your authority and audience.',
    features: [
      'Topic research',
      'SEO-friendly articles',
      'Editorial calendar',
      'Performance analysis',
    ],
  },
  {
    icon: <Monitor size={24} />,
    title: 'Website Design & Development',
    description: 'Create professional, responsive websites tailored to your business needs.',
    features: [
      'Custom web design',
      'Responsive layouts',
      'E-commerce integration',
      'Maintenance & support',
    ],
  },
  {
    icon: <Phone size={24} />,
    title: 'Mobile App UI Design & Development',
    description: 'Design and develop user-friendly mobile applications for Android and iOS.',
    features: [
      'UI/UX design',
      'Cross-platform development',
      'App store deployment',
      'Post-launch support',
    ],
  },
  {
    icon: <Zap size={24} />,
    title: 'Custom Marketing & Branding Solutions',
    description: 'Tailored marketing strategies designed to fit your unique business goals.',
    features: [
      'Brand strategy development',
      'Marketing plan creation',
      'Creative campaign execution',
      'Performance monitoring',
    ],
  },
  {
    icon: <Layers size={24} />,
    title: 'Other',
    description: 'Have specific needs? We offer customizable solutions for all your marketing challenges.',
    features: [
      'Consultation & planning',
      'Flexible service packages',
      'Dedicated support',
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
            Comprehensive digital marketing and creative solutions tailored for your business.
          </p>
        </div>
      </div>
      
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="What We Offer"
            subtitle="Explore our full range of services designed to elevate your brand and grow your business."
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
