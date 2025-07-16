import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SampleReminders = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sample <span className="text-blue-600">Reminders</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how our system keeps you on track with your medications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Email Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-200"
          >
            <div className="bg-gray-200 p-4 border-b border-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-gray-600" />
                <span className="text-gray-800 font-semibold">Email Reminder</span>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <p className="text-sm text-gray-600">From: reminders@healoclock.com</p>
                <p className="text-sm text-gray-600">To: john.doe@email.com</p>
                <p className="font-bold text-gray-900">Subject: 💊 Time for your Amoxicillin</p>
              </div>
              
              <div className="space-y-4 flex-grow">
                <p className="text-gray-800">Hi John,</p>
                <p className="text-gray-800">This is a friendly reminder to take your medication:</p>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="font-bold text-blue-900">Amoxicillin 500mg</p>
                  <p className="text-blue-800">Take 1 tablet with food</p>
                  <p className="text-sm text-blue-700">Next dose: Tomorrow at 8:00 AM</p>
                </div>
                
                <p className="text-gray-800">Stay healthy! 🌟</p>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Mark as Taken
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Call Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-200 p-4 border-b border-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-gray-600" />
                <span className="text-gray-800 font-semibold">Voice Call Reminder</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-200">
                  <Phone className="w-12 h-12 text-blue-600" />
                </div>
                <p className="text-lg font-bold text-gray-900">Incoming Call</p>
                <p className="text-gray-600">Healoclock Reminder</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-200">
                <p className="text-gray-800 italic">"Hello John, this is your medication reminder. It's time to take your Ibuprofen 200mg. Please take 1 tablet after your meal. Your next dose is scheduled for 8 PM today. Have a great day!"</p>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600">
                  Decline
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  Mark as Taken
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SampleReminders;