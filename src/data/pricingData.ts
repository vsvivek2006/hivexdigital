import { PricingTier } from '../components/pricing/PricingCard';

const pricingData: PricingTier[] = [
  {
    title: 'Starter',
    price: '$499',
    description: 'Perfect for small businesses just starting with digital marketing.',
    features: [
      { name: 'SEO audit and optimization', included: true },
      { name: 'Social media setup & management (2 platforms)', included: true },
      { name: 'Monthly content creation (2 blog posts)', included: true },
      { name: 'Basic Google Ads setup', included: true },
      { name: 'Monthly performance report', included: true },
      { name: 'Email marketing setup', included: false },
      { name: 'Conversion rate optimization', included: false },
      { name: 'Custom website design', included: false },
      { name: 'Video content creation', included: false },
      { name: 'Dedicated account manager', included: false },
    ],
  },
  {
    title: 'Growth',
    price: '$999',
    description: 'Ideal for established businesses looking to expand their online presence.',
    features: [
      { name: 'SEO audit and optimization', included: true },
      { name: 'Social media setup & management (4 platforms)', included: true },
      { name: 'Monthly content creation (4 blog posts)', included: true },
      { name: 'Advanced Google Ads management', included: true },
      { name: 'Weekly performance reports', included: true },
      { name: 'Email marketing setup & management', included: true },
      { name: 'Conversion rate optimization', included: true },
      { name: 'Custom website design', included: false },
      { name: 'Video content creation', included: false },
      { name: 'Dedicated account manager', included: true },
    ],
    isPopular: true,
  },
  {
    title: 'Pro',
    price: '$1,999',
    description: 'Comprehensive solution for businesses seeking maximum digital growth.',
    features: [
      { name: 'SEO audit and optimization', included: true },
      { name: 'Social media setup & management (all platforms)', included: true },
      { name: 'Monthly content creation (8 blog posts)', included: true },
      { name: 'Advanced Google Ads management', included: true },
      { name: 'Daily performance reports', included: true },
      { name: 'Email marketing setup & management', included: true },
      { name: 'Conversion rate optimization', included: true },
      { name: 'Custom website design', included: true },
      { name: 'Video content creation', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
  },
];

export default pricingData;