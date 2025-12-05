import { FaStar, FaThumbsUp } from "react-icons/fa";

export default function RatingsSection() {
  const reviews = [
    {
      name: "MUKESH",
      location: "New Delhi, Delhi",
      stars: 3,
      product: "Instrument Sterilizer",
      text: "",
    },
    {
      name: "Aggarwal Associates",
      location: "Meerut, Uttar Pradesh",
      stars: 5,
      product: "Biopsy Punch",
      text: "",
    },
    {
      name: "Prashant",
      location: "Jamshedpur, Jharkhand",
      stars: 4,
      product: "GFC Kit",
      text: "Good service",
    },
  ];

  const getStars = (count) =>
    [...Array(5)].map((_, i) => (
      <FaStar key={i} className={`text-sm ${i < count ? "text-yellow-400" : "text-gray-300"}`} />
    ));

  return (
    <section className="bg-white rounded-lg shadow p-6">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
        <button className="text-red-700 text-sm font-medium hover:underline">View All →</button>
      </div>

      {/* Ratings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        
        {/* Rating Left */}
        <div className="flex flex-col items-center border-r md:border-r-gray-300">
          <h3 className="text-4xl font-bold">4.4<span className="text-2xl"> / 5</span></h3>

          <div className="flex mt-3">{getStars(4)}</div>

          <p className="text-gray-600 text-sm mt-2">56 Reviews</p>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {[
            { stars: 5, width: "68%", percent: "68%" },
            { stars: 4, width: "11%", percent: "11%" },
            { stars: 3, width: "5%", percent: "5%" },
            { stars: 2, width: "4%", percent: "4%" },
            { stars: 1, width: "12%", percent: "12%" },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-center">
              <span className="text-sm w-10">{item.stars} Star</span>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: item.width }}></div>
              </div>
              <span className="text-gray-600 text-sm">{item.percent}</span>
            </div>
          ))}
        </div>

        {/* User Satisfaction */}
        <div className="flex flex-col items-center gap-4">
          {[
            { label: "Response", value: 85 },
            { label: "Quality", value: 83 },
            { label: "Delivery", value: 88 },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-green-600 flex items-center justify-center text-lg font-bold">
                {item.value}%
              </div>
              <p className="text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {reviews.map((r, index) => (
          <div key={index}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold">
                {r.name[0]}
              </div>
              <div>
                <h4 className="font-semibold">{r.name}</h4>
                <p className="text-xs text-gray-500">{r.location}</p>
              </div>
            </div>

            <div className="flex mt-2">{getStars(r.stars)}</div>

            <p className="text-xs mt-1">( {r.stars} )</p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Product Name:</span> {r.product}
            </p>

            {r.text && <p className="text-sm text-gray-700 mt-2">{r.text}</p>}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center">
        <button className="mt-8 bg-red-700 text-white px-8 py-2 rounded font-medium">
          View More Reviews
        </button>
      </div>
    </section>
  );
}
