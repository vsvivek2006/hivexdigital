import React from 'react';
import { Check, X } from 'lucide-react';
import Button from '../common/Button';

export type PricingTier = {
  title: string;
  price: string;
  description: string;
  features: {
    name: string;
    included: boolean;
  }[];
  isPopular?: boolean;
};

type PricingCardProps = {
  tier: PricingTier;
};

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <div className={`card p-8 border-2 ${
      tier.isPopular ? 'border-primary-500 relative' : 'border-gray-100'
    }`}>
      {tier.isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <h3 className={`text-2xl font-bold mb-2 ${
        tier.isPopular ? 'text-primary-600' : 'text-gray-900'
      }`}>
        {tier.title}
      </h3>
      
      <div className="mb-4">
        <span className="text-4xl font-bold">{tier.price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      
      <p className="text-gray-600 mb-6">{tier.description}</p>
      
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check size={20} className="text-success-500 mr-2 shrink-0 mt-1" />
            ) : (
              <X size={20} className="text-gray-400 mr-2 shrink-0 mt-1" />
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.name}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={tier.isPopular ? 'primary' : 'outline'} 
        href="/contact"
        className="w-full"
      >
        Choose Plan
      </Button>
    </div>
  );
};

export default PricingCard;