import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagram, FaMap  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function TopBar() {
  return (
    <div className="bg-gray-100 border-b border-gray-200 text-sm text-gray-700 fixed top-0 w-full z-[60]">
      <div className="max-w-6xl mx-auto px-2 py-2 flex justify-between items-center">
        {/* Site Info */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <IoIosMail className="text-orange-600" />
            <p className="hidden sm:block">
              info@company.com
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <FaMap className="text-orange-600" />
            <p className="hidden sm:block">
              Sunny Isles Beach, FL 33160
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="hover:text-blue-600 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
