import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const MedicationScheduleSection = ({ medicationSchedules, setMedicationSchedules, handleStartReminder, reminderStarted }) => {
  
  const handleScheduleChange = (medId, field, value) => {
    setMedicationSchedules(prevSchedules =>
      prevSchedules.map(med =>
        med.id === medId ? { ...med, [field]: value } : med
      )
    );
  };

  const handleTimeChange = (medId, timeIndex, value) => {
    setMedicationSchedules(prevSchedules =>
      prevSchedules.map(med => {
        if (med.id === medId) {
          const newTimes = [...med.times];
          newTimes[timeIndex] = value;
          return { ...med, times: newTimes };
        }
        return med;
      })
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          3. Customize Your Schedule
        </motion.h2>

        <Card className="p-8 bg-white shadow-lg">
          <div className="space-y-6">
            {medicationSchedules.map((med) => (
              <div key={med.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-bold text-lg text-gray-800">{med.name}</p>
                    <p className="text-sm text-gray-600">{med.dosage} - {med.frequency}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`autoschedule-${med.id}`}
                      checked={med.useAutoSchedule}
                      onCheckedChange={(checked) => handleScheduleChange(med.id, 'useAutoSchedule', checked)}
                    />
                    <Label htmlFor={`autoschedule-${med.id}`} className="text-sm font-medium">Use auto-schedule</Label>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  {med.times.map((time, timeIndex) => (
                    <div key={timeIndex} className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <Input
                        type="time"
                        value={time}
                        onChange={(e) => handleTimeChange(med.id, timeIndex, e.target.value)}
                        disabled={med.useAutoSchedule}
                        className="w-32"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 text-center"
          >
            <Button
              onClick={handleStartReminder}
              disabled={reminderStarted}
              className={`w-full px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ${
                reminderStarted 
                  ? 'bg-green-600 text-white' 
                  : 'blue-gradient text-white hover:shadow-xl pulse-glow'
              }`}
            >
              {reminderStarted ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Healoclock Active
                </>
              ) : (
                <>
                  <Clock className="mr-2 h-5 w-5" />
                  Start Healoclock Medicine Reminder
                </>
              )}
            </Button>
          </motion.div>
        </Card>
      </div>
    </section>
  );
};

export default MedicationScheduleSection;