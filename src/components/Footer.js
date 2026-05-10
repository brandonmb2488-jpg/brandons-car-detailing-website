'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Brandon's Auto</h3>
            <p className="text-gray-400">
              Professional mobile car detailing services
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Interior Detailing</li>
              <li>Exterior Detailing</li>
              <li>Full Package</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:463-320-2038" className="hover:text-white transition-colors">
                  463-320-2038
                </a>
              </li>
              <li>
                <a href="mailto:brandonmh24880@gmail.com" className="hover:text-white transition-colors">
                  brandonmh24880@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} Brandon's Auto Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
