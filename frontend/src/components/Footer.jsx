import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "./logo";

function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Logo width="40px" />
          <span className="font-bold text-gray-700">
            Task Management System
          </span>
        </div>

        <ul className="flex flex-wrap justify-center space-x-6 text-gray-600">
          <li>
            <a href="/privacy-policy" className="hover:text-gray-900">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-gray-900">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/returns" className="hover:text-gray-900">
              Return Policy
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-900">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex space-x-3 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 border rounded-full hover:border-gray-500"
          >
            <FaFacebookF className="text-gray-600 hover:text-gray-900" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2 border rounded-full hover:border-gray-500"
          >
            <FaTwitter className="text-gray-600 hover:text-gray-900" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="p-2 border rounded-full hover:border-gray-500"
          >
            <FaYoutube className="text-gray-600 hover:text-gray-900" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
