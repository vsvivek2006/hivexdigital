import { useState } from 'react';
import Button from '../common/Button';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  service: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let message = 'Something went wrong';
        try {
          const errorData = await response.json();
          message = errorData.message || message;
        } catch {
          const text = await response.text();
          if (text) message = text;
        }
        throw new Error(message);
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(message);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

      {isSubmitted ? (
        <div className="bg-success-50 border border-success-500 text-success-700 rounded-lg p-4 mb-6 animate-fade-in">
          <p className="font-medium">Thank you for contacting us!</p>
          <p>We've received your message and will get back to you shortly.</p>
        </div>
      ) : error ? (
        <div className="bg-error-50 border border-error-500 text-error-700 rounded-lg p-4 mb-6 animate-fade-in">
          <p className="font-medium">Error</p>
          <p>{error}</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="HivixDigital"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="info@hivixdigital.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="(+91)9664480363"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
            >
<option value="">Select a service</option>
<option value="SEO">Search Engine Optimization</option>
<option value="Logo">Logo Design</option>
<option value="SocialMedia">Instagram & Facebook Management</option>
<option value="Graphics">Graphics Design</option>
<option value="Content">Content Writing & Marketing</option>
<option value="MetaAds">Meta Ads (Facebook & Instagram Ads)</option>
<option value="GoogleAds">Google Ads Management</option>
<option value="Blog">Blog Writing & Management</option>
<option value="WebDesign">Website Design & Development</option>
<option value="AppDev">Mobile App UI Design & Development</option>
<option value="Custom">Custom Marketing & Branding Solutions</option>
<option value="VideoEditing">Video Editing</option>
<option value="WeddingInvitation">Wedding Invitation Design</option>
<option value="WeddingIllustration">Wedding Illustration</option>
<option value="WeddingCard">Wedding Card Design</option>
<option value="Other">Other</option>



            </select>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="How can we help you?"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
            placeholder="Please tell us about your project or inquiry..."
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
