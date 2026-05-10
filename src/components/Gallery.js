'use client';

export default function Gallery() {
  const images = [
    { before: '🚗', after: '✨', title: 'Sedan Detailing' },
    { before: '🚙', after: '💎', title: 'SUV Shine' },
    { before: '🚕', after: '🌟', title: 'Full Package' },
    { before: '🚗', after: '✨', title: 'Complete Transform' },
    { before: '🚙', after: '💎', title: 'Professional Polish' },
    { before: '🚕', after: '🌟', title: 'Premium Finish' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Before & After
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          See the amazing transformation we can achieve
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex">
                <div className="w-1/2 bg-gray-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl mb-2">{img.before}</p>
                    <p className="text-sm font-semibold text-gray-600">Before</p>
                  </div>
                </div>
                <div className="w-1/2 bg-gradient-to-r from-blue-400 to-purple-400 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl mb-2">{img.after}</p>
                    <p className="text-sm font-semibold text-white">After</p>
                  </div>
                </div>
              </div>
              <p className="text-center py-3 font-semibold text-gray-700">{img.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
