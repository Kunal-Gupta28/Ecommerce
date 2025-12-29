const testimonials = [
  { name: "Rahul", text: "Great quality and fast delivery!" },
  { name: "Aman", text: "Very smooth shopping experience." },
  { name: "Neha", text: "Customer support was very helpful." },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 border rounded shadow-sm">
            <p className="italic mb-4">"{t.text}"</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
