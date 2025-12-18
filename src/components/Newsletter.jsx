const Newsletter = () => {
  return (
    <section className="py-12 bg-black text-white text-center">
      <h2 className="text-2xl font-bold mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-6">Get updates on new products & offers</p>

      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black"
        />
        <button className="bg-red-500 px-4 py-2 rounded">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
