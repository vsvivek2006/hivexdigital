import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Our Office</h4>
            <p className="text-gray-600">
            Hawa Sadak Rd, Ramnagar Extension<br />
            Civil Lines, Jaipur, Rajasthan 302019<br />
             India, 
           
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
            <p className="text-gray-600">
              <a href="tel:+123456789" className="hover:text-primary-600 transition-colors">
                (+91)9664480363
              </a>
              <br />
              <span className="text-sm text-gray-500">Mon-Fri from 9am to 6pm</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Email</h4>
            <p className="text-gray-600">
              <a href="mailto:info@digitaledge.com" className="hover:text-primary-600 transition-colors">
                Hivixdigital@gmail.com
              </a>
              <br />
              <span className="text-sm text-gray-500">We'll respond as soon as possible</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Working Hours</h4>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-medium text-gray-900 mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          <a 
            href="https://www.facebook.com/profile.php?id=61576329844755" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;