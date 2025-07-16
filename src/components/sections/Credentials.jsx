import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Brain, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const credentialsData = [
  {
    name: "Gmail Integration",
    description: "Secure email delivery system",
    details: "Connect your Gmail account for reliable email reminders with end-to-end encryption.",
    icon: Mail,
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Gemini AI",
    description: "Advanced prescription analysis",
    details: "Powered by Google's Gemini AI for accurate prescription text extraction and medication parsing.",
    icon: Brain,
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "Twilio Voice",
    description: "Voice call reminders",
    details: "Professional voice call system with customizable reminder messages and scheduling.",
    icon: Phone,
    color: "from-green-500 to-teal-500"
  }
];

const Credentials = () => {
  const [expandedCredential, setExpandedCredential] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted <span className="text-blue-600">Integrations</span>
          </h2>
          <p className="text-xl text-gray-600">
            Powered by industry-leading platforms for reliability and security
          </p>
        </motion.div>

        <div className="space-y-6">
          {credentialsData.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedCredential(expandedCredential === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${credential.color} flex items-center justify-center`}>
                      <credential.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{credential.name}</h3>
                      <p className="text-gray-600">{credential.description}</p>
                    </div>
                  </div>
                  {expandedCredential === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </div>
              
              {expandedCredential === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700">{credential.details}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;