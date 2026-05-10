'use client';

import { CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Interior Detailing',
      price: '$150',
      description: 'Deep clean of your vehicle interior',
      features: [
        'Vacuum all surfaces',
        'Clean windows & mirrors',
        'Wipe down dashboard',
        'Clean seats & carpets',
      ],
    },
    {
      title: 'Exterior Detailing',
      price: '$230',
      description: 'Complete exterior wash & shine',
      features: [
        'Hand wash & dry',
        'Wheel & tire cleaning',
        'Wax application',
        'Final polish & shine',
      ],
    },
    {
      title: 'Full Package',
      price: '$300',
      description: 'Inside and out complete detailing',
      features: [
        'Full interior deep clean',
        'Complete exterior detail',
        'Wax & polish',
        'Premium finish',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Our Services
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Professional car detailing tailored for you
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-blue-600 text-4xl font-bold mb-2">
                {service.price}
              </p>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
