import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

interface HeroContent {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaUrl?: string;
  image?: string;
}

const HeroSection = () => {
  const [content, setContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    fetch('/api/sections/hero')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(() => setContent(null));
  }, []);

  if (!content) return null;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pb-32 bg-gradient-blue overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/30 to-black/10 z-10" />
        <div className="absolute w-full h-full">
          {/* Abstract pattern overlay */}
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-30"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white animate-fade-in">
            {content.heading}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 animate-slide-up">
            {content.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="lg"
              href={content.ctaUrl || '/'}
              className="group"
            >
              {content.ctaText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="/services"
              className="border-white text-white hover:bg-white/10"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 50, transform: 'rotate(180deg)' }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#FFFFFF"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#FFFFFF"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
