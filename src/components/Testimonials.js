'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      rating: 5,
      text: 'Brandon did an amazing job on my car! It looks brand new. Highly recommend!',
      service: 'Full Package',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Professional, quick, and affordable. My car has never looked better!',
      service: 'Exterior Detailing',
    },
    {
      name: 'Mike Davis',
      rating: 5,
      text: 'The attention to detail is incredible. Worth every penny. Will definitely book again!',
      service: 'Interior Detailing',
    },
    {
      name: 'Emily Wilson',
      rating: 5,
      text: 'Mobile service is so convenient! Brandon came right to my work.',
      service: 'Full Package',
    },
    {
      name: 'David Brown',
      rating: 5,
      text: 'Best detailing service in the area. Fast, reliable, and high quality!',
      service: 'Exterior Detailing',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          What Customers Say
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          5-star reviews from happy customers
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-blue-600 font-semibold">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
