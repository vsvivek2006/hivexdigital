import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div>
      <div className="bg-gradient-blue py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help your business grow
          </p>
        </div>
      </div>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <div>
              <ContactInfo />
              
              <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden h-80">
                {/* Google Maps Embed */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">Google Maps would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;