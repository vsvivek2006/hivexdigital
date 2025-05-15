import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const testimonials = [
  {
    id: 1,
    content: "Working with DigitalEdge transformed our online presence. Their SEO strategies helped us rank on the first page for our key terms within 3 months.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechSolutions Inc.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    content: "The social media campaigns they developed for us increased our engagement by 150% and led to a 35% boost in direct sales from social channels.",
    author: "David Chen",
    position: "CEO",
    company: "Innovative Startup",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    content: "Their team redesigned our website and implemented a content strategy that doubled our conversion rate within just six months.",
    author: "Emily Rodriguez",
    position: "E-commerce Manager",
    company: "StyleBoutique",
    rating: 4,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    content: "The Google Ads campaign DigitalEdge created generated a 400% ROI in the first quarter. Their data-driven approach really delivers results.",
    author: "Michael Thompson",
    position: "Sales Director",
    company: "Global Solutions",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
          subtitle="Don't just take our word for it. Here's what our clients have to say about our services."
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