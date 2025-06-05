import { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    fetch('/api/sections/services')
      .then(res => res.json())
      .then(data => setServices(data.services || []))
      .catch(() => setServices([]));
  }, []);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Our Digital Marketing Services"
          subtitle="Comprehensive solutions designed to grow your brand and increase your online impact."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = (Icons as any)[service.icon] || Icons.HelpCircle;
            return (
            <div
              key={index}
              className="card p-8 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              role="region"
              aria-labelledby={`service-title-${index}`}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-100 text-primary-600">
                {Icon ? <Icon size={24} /> : null}
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
          );})}
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
