const categories = [
  "Health Care",
  "Hair Transplant",
  "Ophthalmic",
  "Dermatology",
  "Hollowware",
  "Optics",
  "PRP Kit",
  "Gynaecology",
  "Furniture"
];

export default function CategoryStrip() {
  return (
    <div className="bg-white shadow py-3">
      <div className="max-w-7xl mx-auto flex overflow-x-auto gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="text-center min-w-32 cursor-pointer">
            <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto"></div>
            <p className="text-sm font-medium mt-2">{cat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
