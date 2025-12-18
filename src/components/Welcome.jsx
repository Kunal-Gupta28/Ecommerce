export default function Welcome() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-red-700">Medono India</span>
          </h1>

          <p className="mt-4 text-gray-700">
            We are a trusted manufacturer, supplier, and exporter of
            high-quality <strong>medical, surgical & hospital equipment</strong>.
            Serving clinics, hospitals, and healthcare professionals across India.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-red-700 text-white px-6 py-3 rounded font-semibold hover:bg-red-800 transition">
              Explore Products
            </button>

            <button className="border border-red-700 text-red-700 px-6 py-3 rounded font-semibold hover:bg-red-50 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/hero-medical.png"
            alt="Medical Equipment Supplier"
            className="max-h-80 object-contain"
          />
        </div>

      </div>
    </section>
  );
}
