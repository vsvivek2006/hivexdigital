import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import PricingCard from '../components/pricing/PricingCard';
import pricingData from '../data/pricingData';
import CtaSection from '../components/home/CtaSection';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <div>
      <div className="bg-gradient-blue py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Transparent pricing designed to help your business grow
          </p>
        </div>
      </div>
      
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Choose Your Plan"
            subtitle="We offer flexible pricing options tailored to meet the needs of businesses at every stage of growth."
            center
          />
          
          <div className="mb-12 flex justify-center">
            <div className="bg-white rounded-full p-1 inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isAnnual ? 'bg-primary-600 text-white' : 'text-gray-700'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAnnual ? 'bg-primary-600 text-white' : 'text-gray-700'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual
                <span className="ml-1 text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full">
                  20% off
                </span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.map((tier, index) => (
              <PricingCard
                key={index}
                tier={{
                  ...tier,
                  price: isAnnual 
                    ? `$${Math.round(parseInt(tier.price.replace('$', '')) * 0.8 * 12)}`
                    : tier.price,
                }}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Can I switch plans later?</h4>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Do you offer custom packages?</h4>
                <p className="text-gray-600">
                  Absolutely! We understand that every business has unique needs. Contact us to discuss a customized solution for your specific requirements.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Is there a contract or commitment?</h4>
                <p className="text-gray-600">
                  Our monthly plans are commitment-free. Annual plans require a 12-month commitment but offer significant savings.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">What happens after I sign up?</h4>
                <p className="text-gray-600">
                  After signing up, you'll be assigned a dedicated account manager who will schedule a kickoff call to understand your goals and outline the next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </div>
  );
};

export default Pricing;