
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Utensils } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Delicious</span>
            </div>
            <p className="text-gray-400 text-sm">
              Experience the finest dining with our carefully crafted dishes made from fresh, local ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/dishes" className="text-gray-400 hover:text-orange-500 transition-colors">Dishes</Link></li>
              <li><Link to="/order" className="text-gray-400 hover:text-orange-500 transition-colors">Order</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">+91 9856457899</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">info@delicious.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">123 Food Street, City</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: 10:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Delicious Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
