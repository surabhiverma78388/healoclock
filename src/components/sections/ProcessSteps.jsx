import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Brain, Calendar, Mail, Phone } from 'lucide-react';

const processStepsData = [
  {
    icon: Upload,
    title: "Upload Prescription",
    description: "Upload your prescription image or PDF",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FileText,
    title: "OCR Processing",
    description: "Advanced OCR extracts text from your prescription",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Brain,
    title: "AI Parsing",
    description: "AI analyzes and structures medication data",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Intelligent reminder scheduling based on dosage",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    title: "Email Reminders",
    description: "Automated email notifications for medications",
    color: "from-emerald-500 to-blue-500"
  },
  {
    icon: Phone,
    title: "Voice Calls",
    description: "Personalized voice call reminders",
    color: "from-blue-500 to-purple-500"
  }
];

const ProcessSteps = () => {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('.card-glow');
    for(const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section id="process-steps" className="py-20 bg-white" onMouseMove={handleMouseMove}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered system transforms your prescriptions into intelligent medication reminders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processStepsData.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group card-glow"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full z-10 relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;