'use client';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Brandon's Auto Detailing
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Professional Mobile Car Detailing Services
        </p>
        <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
          We bring professional detailing to your location. Keep your vehicle looking pristine with our expert detailing services.
        </p>
        <a
          href="#booking"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}
