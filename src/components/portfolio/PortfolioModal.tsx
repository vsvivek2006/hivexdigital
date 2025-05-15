import React, { useEffect } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../common/Button';
import { PortfolioItem } from './PortfolioCard';

type PortfolioModalProps = {
  item: PortfolioItem | null;
  onClose: () => void;
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  if (!item) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      <div 
        className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 z-20 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="h-80 relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 left-0 p-8">
              <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm mb-3">
                {item.category}
              </span>
              <h2 className="text-white text-3xl font-bold">{item.title}</h2>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
          <p className="text-gray-700 mb-8">
            {item.description}
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">Results Delivered</h3>
          <ul className="space-y-3 mb-8">
            {item.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight size={20} className="text-primary-600 mr-2 shrink-0 mt-1" />
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-4">
            {item.link && (
              <Button 
                variant="primary" 
                href={item.link} 
                isExternal
                className="flex items-center gap-2"
              >
                <span>Visit Website</span>
                <ExternalLink size={16} />
              </Button>
            )}
            <Button 
              variant="outline" 
              href="/contact"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;