export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-bold text-xl text-white">ShopEase</h3>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} ShopEase — Shop smarter every day.
        </p>
      </div>
    </footer>
  );
}
