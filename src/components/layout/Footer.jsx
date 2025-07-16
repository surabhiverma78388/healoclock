import React from 'react';
import { Shield, Star, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: ['Features', 'Pricing', 'Security', 'Integrations'],
    support: ['Documentation', 'Help Center', 'Contact Us', 'Privacy Policy']
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Healoclock</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Revolutionizing medication adherence through intelligent automation and personalized care.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Star className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold mb-4 block">Product</span>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.product.map((link, i) => (
                <li key={i} className="hover:text-white transition-colors cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-semibold mb-4 block">Support</span>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.support.map((link, i) => (
                <li key={i} className="hover:text-white transition-colors cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Healoclock. All rights reserved. HIPAA Compliant & Secure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;