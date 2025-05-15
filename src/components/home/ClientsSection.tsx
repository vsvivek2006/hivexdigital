import { useRef, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';

const clients = [
  { name: 'Company One', logo: 'https://images.pexels.com/photos/11302542/pexels-photo-11302542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Company Two', logo: 'https://images.pexels.com/photos/11302542/pexels-photo-11302542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Company Three', logo: 'https://images.pexels.com/photos/11302542/pexels-photo-11302542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Company Four', logo: 'https://images.pexels.com/photos/11302542/pexels-photo-11302542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Company Five', logo: 'https://images.pexels.com/photos/11302542/pexels-photo-11302542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Company Six', logo: 'https://images.pexels.com/photos/11302542/pexels-photo-11302542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Company Seven', logo: 'https://images.pexels.com/photos/11302542/pexels-photo-11302542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Company Eight', logo: 'https://images.pexels.com/photos/11302542/pexels-photo-11302542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const ClientsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const duplicateClients = [...clients, ...clients];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle
          title="Trusted by Leading Brands"
          subtitle="We've helped businesses of all sizes achieve their marketing goals."
          center
        />

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center space-x-12 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicateClients.map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 py-8 px-8 grayscale hover:grayscale-0 transition-all duration-300"
                style={{ minWidth: '160px' }}
              >
                <div className="h-16 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-500">{client.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;