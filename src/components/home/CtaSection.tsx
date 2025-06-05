import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-blue relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-r from-black/30 to-black/10 z-10" />
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
      
      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Brand with Hivix Digital?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Connect with us today for a free consultation and see how our expert digital marketing strategies can drive your business forward.
          </p>
          <Button
            variant="accent"
            size="lg"
            href="/contact"
            className="group"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <div className="mt-4">
            <Button
              variant="outline"
              size="lg"
              href="/blog"
              className="border-white text-white hover:bg-white/10"
            >
              Read Our Blog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
