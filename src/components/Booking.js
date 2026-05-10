'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Interior Detailing',
    date: '',
    time: '',
    vehicle: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Interior Detailing',
        date: '',
        time: '',
        vehicle: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="booking" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Book Your Appointment
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Schedule your detailing service today
        </p>

        {submitted ? (
          <div className="bg-green-100 border-2 border-green-500 text-green-700 px-8 py-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">✓ Booking Received!</h3>
            <p>We'll contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold mb-2 block">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option>Interior Detailing - $150</option>
                <option>Exterior Detailing - $230</option>
                <option>Full Package - $300</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold mb-2 block">
                Vehicle Details
              </label>
              <input
                type="text"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                placeholder="e.g., 2020 Honda Civic"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
