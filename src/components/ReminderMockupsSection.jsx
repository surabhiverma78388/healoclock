import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ReminderMockupsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Sample Reminders
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg h-full">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Email Reminder</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-sm text-gray-600 mb-2">From: Healoclock Reminders</div>
                <div className="text-lg font-semibold text-gray-900 mb-3">Time for your Amoxicillin!</div>
                <div className="text-gray-700 mb-4">
                  <p>Hi John,</p>
                  <p>It's time to take your Amoxicillin (500mg). Remember to take it with food.</p>
                  <p>Next dose: 2:00 PM</p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Mark as Taken
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Call Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg h-full">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Voice Call Reminder</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <div className="text-sm text-gray-600 mb-2">Incoming Call: Healoclock</div>
                <div className="text-lg font-semibold text-gray-900 mb-3">Medication Reminder</div>
                <div className="text-gray-700 mb-4 italic">
                  "Hello John, this is your Healoclock reminder. It's time to take your Ibuprofen 200mg. Please take it after meals as prescribed."
                </div>
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    Mark as Taken
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Decline
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReminderMockupsSection;