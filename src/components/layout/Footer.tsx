import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <Link to="/" className="mb-6 inline-block">
              <img
                src="/PNGlogowhitee.png"
                alt="Company Logo"
                className="h-16 w-auto"
              />
            </Link>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.facebook.com/people/Hivix-Digital-Solution-Pvt-Ltd/61576329844755/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/HivixDigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/hivixdigital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h5 className="text-white font-semibold text-lg mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h5 className="text-white font-semibold text-lg mb-6">Our Services</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">
                  Google Ads Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">
                  Email Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h5 className="text-white font-semibold text-lg mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span>Hawa Sadak Rd, Ramnagar Extension, Civil Lines, Jaipur, Rajasthan 302019</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+919664480363" className="hover:text-primary-400 transition-colors">
                  +91 96644 80363
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@hivixdigital.com" className="hover:text-primary-400 transition-colors">
                  info@hivixdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <p>&copy; {currentYear} Hivix Digital. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
