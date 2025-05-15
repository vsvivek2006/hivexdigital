import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
  link?: string;
};

type PortfolioCardProps = {
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(item)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-primary-900/70 flex flex-col items-center justify-center text-white p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-center text-white/90 mb-4">{item.category}</p>
          <button className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors flex items-center gap-2">
            <span>View Case Study</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm text-primary-600 font-medium">{item.category}</span>
        <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
        <p className="text-gray-600 line-clamp-2">{item.description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;