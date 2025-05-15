import React from 'react';
import Button from '../common/Button';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="card p-8 hover:translate-y-[-8px]">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-100 text-primary-600">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
      <ul className="mb-8 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-600 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant="primary" href="/contact">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;