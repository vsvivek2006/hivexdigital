import { Link } from 'react-router-dom';
import { 
  Zap, 
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
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Zap size={24} className="text-primary-400" />
              <span className="font-display text-xl font-semibold text-white">DigitalEdge</span>
            </Link>
            <p className="mb-6">
              We help businesses grow through strategic digital marketing solutions
              tailored to meet your unique goals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
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
          <div>
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
          <div>
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
          <div>
            <h5 className="text-white font-semibold text-lg mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span>123 Marketing Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+123456789" className="hover:text-primary-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@digitaledge.com" className="hover:text-primary-400 transition-colors">
                  info@digitaledge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} DigitalEdge. All rights reserved.</p>
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