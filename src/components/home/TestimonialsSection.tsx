import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const testimonials = [
  {
    id: 1,
    content:
      "Working with Hivix Digital has been a game-changer. Our SEO rankings skyrocketed, and we started seeing consistent organic traffic within just a few months.",
    author: "Vikash Singh",
    position: "Founder & CEO",
    company: "Hivix Digital",
    rating: 5,
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    content:
      "Hivix completely revamped our social media strategy. Engagement has gone through the roof, and our audience feels more connected than ever.",
    author: "Priya Mehta",
    position: "Marketing Manager",
    company: "Kraftify India",
    rating: 5,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    content:
      "Their content and email marketing helped us double our lead conversion rate in less than 6 months. Truly impressed with the quality and strategy.",
    author: "Rohan Desai",
    position: "Growth Lead",
    company: "ZentraTech",
    rating: 4,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    content:
      "The Google Ads campaigns they ran delivered an exceptional ROI. Their targeting and reporting are on point. Highly recommended!",
    author: "Ananya Sharma",
    position: "Head of Sales",
    company: "NeoVibe Solutions",
    rating: 5,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear directly from our clients about the impact Hivix Digital has had on their growth."
          center
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
                      <div className="flex space-x-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={`${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl italic text-gray-700 mb-8">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
