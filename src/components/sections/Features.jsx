import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Brain } from 'lucide-react';

const featuresData = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your medical data is encrypted and secure",
    color: "bg-blue-500"
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock medication tracking",
    color: "bg-green-500"
  },
  {
    icon: Users,
    title: "Family Sharing",
    description: "Manage medications for family members",
    color: "bg-purple-500"
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Smart reminders adapt to your schedule",
    color: "bg-orange-500"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="text-blue-600">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for comprehensive medication management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center h-full">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;