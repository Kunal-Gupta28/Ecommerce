import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

const UploadPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    priceAmount: "",
    priceUnit: "Piece",
    description: "",
    category: "",
    stock: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    "Hair Transplant Instruments",
    "Health And Personal Care",
    "Ophthalmic Instruments",
    "Dermatology Equipment",
    "Hospital Holloware",
    "Magnification & Optics",
    "Prp Kit",
    "Gynaecology",
    "Surgical Instruments",
  ];

  const priceUnits = ["Piece", "Box", "Pack"];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // cleanup preview URL
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload a product image");
      return;
    }

    const data = new FormData();

    data.append("image", image);
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("stock", formData.stock);
    data.append("price[amount]", formData.priceAmount);
    data.append("price[unit]", formData.priceUnit);

    try {
      setLoading(true);

      const res = await axiosInstance.post("/upload/product", data);

      console.log("Product uploaded:", res.data);
      alert("Product uploaded successfully!");

      // reset form
      setFormData({
        title: "",
        priceAmount: "",
        priceUnit: "Piece",
        description: "",
        category: "",
        stock: "",
      });
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Upload Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* Price */}
          <div className="flex gap-2">
            <input
              name="priceAmount"
              type="number"
              placeholder="Price (₹)"
              value={formData.priceAmount}
              onChange={handleChange}
              required
              className="w-2/3 px-4 py-2 border rounded-lg"
            />

            <select
              name="priceUnit"
              value={formData.priceUnit}
              onChange={handleChange}
              className="w-1/3 px-4 py-2 border rounded-lg bg-white"
            >
              {priceUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg bg-white"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            name="stock"
            type="number"
            placeholder="Stock Quantity"
            value={formData.stock}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Product Image
            </label>

            <div
              className={`relative border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition
                ${
                  preview
                    ? "border-green-400 bg-green-50"
                    : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                }
              `}
              onClick={() =>
                document.getElementById("imageInput").click()
              }
            >
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-40 object-contain rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-600">
                    Click to change image
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {image?.name}
                  </p>
                </>
              ) : (
                <>
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm text-gray-600">
                    Click to upload or drag & drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG / JPG up to 5MB
                  </p>
                </>
              )}

              <input
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !image}
            className={`w-full py-2 rounded-lg text-white font-medium ${
              loading || !image
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Uploading..." : "Upload Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
