import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-6 w-6 text-red-500 mr-2" />
            <span className="text-2xl font-bold">Healoclock</span>
          </div>
          <p className="text-gray-400 mb-4">
            HIPAA-compliant medication reminder system designed with your privacy in mind.
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Healoclock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;