import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Brain, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ApiSetupSection = () => {
  const services = [
    { name: "Gmail OAuth", icon: Mail, description: "Secure email authentication for sending reminders" },
    { name: "Gemini Vision API", icon: Brain, description: "AI-powered prescription text extraction" },
    { name: "Twilio Voice", icon: Phone, description: "Automated voice call reminders" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          API Integration Setup
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-auto"
                    onClick={() => toast({
                      title: "🚧 API Setup Feature",
                      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                    })}
                  >
                    Setup Instructions
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiSetupSection;