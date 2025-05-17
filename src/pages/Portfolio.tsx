import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import PortfolioCard, { PortfolioItem } from '../components/portfolio/PortfolioCard';
import PortfolioModal from '../components/portfolio/PortfolioModal';
import portfolioData from '../data/portfolioData';
import CtaSection from '../components/home/CtaSection';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(portfolioData.map(item => item.category)))];
  
  const filteredItems = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);
  
  return (
    <div>
      <div className="bg-gradient-blue py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Hivix Digital Portfolio</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Discover how Hivix Digital has empowered businesses with tailored digital marketing solutions and innovative strategies.
          </p>
        </div>
      </div>
      
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Case Studies"
            subtitle="Explore our recent projects to see how we’ve delivered measurable results for our clients."
            center
          />
          
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={setSelectedItem}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection />
      
      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Portfolio;
