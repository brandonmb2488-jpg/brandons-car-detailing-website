'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Have questions? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <a
              href="tel:463-320-2038"
              className="text-blue-600 hover:text-blue-700 text-lg font-semibold"
            >
              463-320-2038
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:brandonmh24880@gmail.com"
              className="text-blue-600 hover:text-blue-700 text-lg font-semibold"
            >
              brandonmh24880@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Service Area</h3>
            <p className="text-gray-600 text-lg font-semibold">
              Mobile Detailing
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Brandon's Auto Detailing?
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✓ Professional & experienced detailers</li>
            <li>✓ Mobile service - we come to you</li>
            <li>✓ High-quality products and equipment</li>
            <li>✓ Attention to detail on every vehicle</li>
            <li>✓ Competitive pricing</li>
            <li>✓ Quick turnaround time</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
