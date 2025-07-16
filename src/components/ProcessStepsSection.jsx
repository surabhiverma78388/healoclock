import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Brain, Clock, Mail, Phone, ArrowRight } from 'lucide-react';

const ProcessStepsSection = () => {
  const processSteps = [
    { icon: Upload, label: "Upload", color: "bg-blue-500" },
    { icon: FileText, label: "OCR", color: "bg-indigo-500" },
    { icon: Brain, label: "AI Parsing", color: "bg-purple-500" },
    { icon: Clock, label: "Scheduling", color: "bg-pink-500" },
    { icon: Mail, label: "Email", color: "bg-red-500" },
    { icon: Phone, label: "Call", color: "bg-orange-500" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          How Healoclock Works
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-20"
              >
                <div className={`${step.color} p-4 rounded-full text-white shadow-lg mb-3`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium text-gray-700">{step.label}</span>
              </motion.div>
              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;