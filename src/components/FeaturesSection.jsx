import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Calendar, Mail, Users, CheckCircle, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    { icon: Brain, title: "Smart Prescription Extraction", description: "AI-powered OCR extracts medication details from photos instantly" },
    { icon: Calendar, title: "Personalized Schedule", description: "Custom medication schedules based on your prescription timing" },
    { icon: Mail, title: "Multi-Channel Alerts", description: "Email notifications and voice calls ensure you never miss a dose" },
    { icon: Users, title: "Caregiver Alerts", description: "Family members get notified when medications are taken or missed" },
    { icon: CheckCircle, title: "One-Click Confirmation", description: "Simple confirmation system to track medication adherence" },
    { icon: Activity, title: "Progress Tracker", description: "Visual progress tracking and adherence analytics" }
  ];

  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-16"
        >
          Powerful Features for Better Health
        </motion.h2>
        <div className="w-full overflow-hidden">
          <div className="animate-scroll-left">
            {duplicatedFeatures.map((feature, index) => (
              <div key={index} className="flex-shrink-0 mx-3">
                <Card className="p-6 w-80 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col h-full">
                    <div className="p-3 bg-blue-600 rounded-full w-fit mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;