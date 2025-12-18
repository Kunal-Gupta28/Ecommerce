const features = [
  { title: "Quality Products", desc: "Verified and tested items" },
  { title: "Fast Delivery", desc: "Quick and reliable shipping" },
  { title: "Secure Payments", desc: "100% safe transactions" },
  { title: "Customer Support", desc: "24/7 assistance" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
