import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaTimes } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c2f36] text-white mt-10 pt-10 pb-6">
      
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>

          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
            <p className="text-sm leading-relaxed">
              <span className="font-semibold">Deepak Kumar (Proprietor)</span><br />
              Medono India<br />
              Ground Floor, Kh.No. 894 New-115, Landmark Near Water Tank,<br />
              Lal Dora, Village Alipur,<br />
              New Delhi - 110036, Delhi, India<br />
              <span className="text-red-400 underline cursor-pointer">Get Directions →</span>
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3 cursor-pointer">
            <FaEnvelope className="text-red-500" />
            <span className="text-sm">Send Email</span>
          </div>

          <div className="flex items-center gap-3 mb-6 cursor-pointer">
            <FaPhoneAlt className="text-red-500" />
            <span className="text-sm">08047304758</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-red-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-500" />
            <FaTimes className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Requirement Box */}
        <div className="bg-white rounded-lg p-5">
          <label className="text-gray-700 text-sm">Describe Your Requirement</label>
          <textarea
            rows="4"
            placeholder="I would like to..."
            className="w-full border rounded mt-2 p-3 text-gray-700"
          ></textarea>
          <button className="mt-4 bg-red-700 text-white px-6 py-2 rounded font-medium">
            Submit
          </button>
        </div>

      </div>

      {/* Lower Footer */}
      <div className="max-w-7xl mx-auto border-t border-gray-600 mt-10 pt-6 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-red-400 cursor-pointer">Who We Are</li>
            <li className="hover:text-red-400 cursor-pointer">Testimonial</li>
            <li className="hover:text-red-400 cursor-pointer">Sitemap</li>
            <li className="hover:text-red-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold mb-3">Our Products</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-red-400 cursor-pointer">Health And Personal Care</li>
            <li className="hover:text-red-400 cursor-pointer">Hair Transplant Instruments</li>
            <li className="hover:text-red-400 cursor-pointer">Ophthalmic Instruments</li>
            <li className="hover:text-red-400 cursor-pointer">Dermatology Equipment</li>
            <li className="hover:text-red-400 cursor-pointer">Hospital Holloware</li>
            <li className="hover:text-red-400 cursor-pointer">Magnification & Optics</li>
            <li className="hover:text-red-400 cursor-pointer">Prp Kit</li>
            <li className="hover:text-red-400 cursor-pointer">Gynaecology</li>
            <li className="text-red-500 cursor-pointer font-semibold">View All →</li>
          </ul>
        </div>

        {/* Share Us */}
        <div>
          <h4 className="font-semibold mb-3">Share Us:</h4>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-red-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-500" />
            <FaTimes className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-8">
        ©Medono India. All Rights Reserved |
        <span className="underline cursor-pointer"> Terms of Use</span><br />
        Developed & Managed by IndiaMART InterMESH Limited
      </div>

    </footer>
  );
}
