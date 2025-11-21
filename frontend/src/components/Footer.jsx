import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-500">
              <Leaf className="w-6 h-6" />
              <span className="text-xl font-bold text-white">FarmConnect</span>

            </div>
            <p className="text-sm text-stone-400">
              Connecting local farmers with the community for a sustainable future. Fresh, organic, and delivered with care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-emerald-500 transition-colors">Shop Products</a></li>
              <li><a href="/dashboard" className="hover:text-emerald-500 transition-colors">Farmer Dashboard</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>123 Green Valley Rd, Harvest City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>hello@farmconnect.com</span>

              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-stone-400 mb-4">Subscribe for seasonal updates and exclusive offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-stone-800 border border-stone-700 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} FarmConnect. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
