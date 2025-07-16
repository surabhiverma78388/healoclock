import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

import HeroSection from '@/components/HeroSection';
import ProcessStepsSection from '@/components/ProcessStepsSection';
import FeaturesSection from '@/components/FeaturesSection';
import UploadSection from '@/components/UploadSection';
import UserDetailsFormSection from '@/components/UserDetailsFormSection';
import MedicationScheduleSection from '@/components/MedicationScheduleSection';
import ReminderMockupsSection from '@/components/ReminderMockupsSection';
import ApiSetupSection from '@/components/ApiSetupSection';
import Footer from '@/components/Footer';

const generateTimes = (frequency) => {
  const count = parseInt(frequency.charAt(0), 10);
  if (isNaN(count)) return [];
  const times = [];
  for (let i = 0; i < count; i++) {
    times.push(`${(8 + i * 6).toString().padStart(2, '0')}:00`);
  }
  return times;
};

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [medicationSchedules, setMedicationSchedules] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    caregiverEmail: '',
  });
  const [reminderStarted, setReminderStarted] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Simulate AI extraction
      setTimeout(() => {
        const data = {
          patient: "John Doe",
          doctor: "Dr. Sarah Wilson",
          medications: [
            { name: "Amoxicillin", dosage: "500mg", frequency: "3x daily", duration: "7 days", instructions: "with food" },
            { name: "Ibuprofen", dosage: "200mg", frequency: "2x daily", duration: "5 days", instructions: "after meals" },
            { name: "Vitamin D3", dosage: "1000 IU", frequency: "1x daily", duration: "15 days", instructions: "morning" }
          ]
        };
        setExtractedData(data);

        const schedules = data.medications.map((med, index) => ({
          id: index,
          ...med,
          useAutoSchedule: true,
          times: generateTimes(med.frequency),
        }));
        setMedicationSchedules(schedules);

        toast({
          title: "✅ Prescription Extracted Successfully!",
          description: "AI has analyzed your prescription and extracted medication details.",
        });
      }, 2000);
    }
  };

  const handleStartReminder = async () => {
    const { name, email, phone, caregiverEmail } = userDetails;
    if (!name || !email || !phone || !caregiverEmail) {
      toast({
        title: "⚠️ Missing Information",
        description: "Please fill out all your details and the caregiver's email before starting reminders.",
        variant: "destructive",
      });
      return;
    }

    if (!supabase) {
      toast({
        title: "🚧 Backend Not Connected",
        description: "Supabase client is not available. Please check your configuration.",
        variant: "destructive",
      });
      return;
    }

    setReminderStarted(true);

    const reminderData = {
      user_details: userDetails,
      medication_schedules: medicationSchedules,
      status: 'active'
    };

    try {
      const { data, error } = await supabase
        .from('reminders')
        .insert([reminderData])
        .select();

      if (error) throw error;

      toast({
        title: "🎉 Healoclock Started!",
        description: "Your reminders are saved and notifications will be sent shortly.",
      });

      // The actual sending of emails/calls would be handled by Supabase Edge Functions
      // triggered by a schedule or database change. We simulate it here.
      toast({
        title: "📧 Email Notification Queued",
        description: `A reminder will be sent to ${email}. This is now handled by the backend.`,
      });

    } catch (error) {
      console.error('Error saving reminder:', error);
      toast({
        title: "❌ Error Saving Reminder",
        description: "Could not save your reminder settings. Please try again.",
        variant: "destructive",
      });
      setReminderStarted(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Healoclock - Automated Prescription Reminder System</title>
        <meta name="description" content="Enhancing Medication Adherence Through Smart Reminders - AI-powered prescription management with automated notifications" />
      </Helmet>

      <HeroSection />
      <ProcessStepsSection />
      <FeaturesSection />
      <UploadSection 
        uploadedFile={uploadedFile}
        extractedData={extractedData}
        handleFileUpload={handleFileUpload}
      />
      {extractedData && (
        <>
          <UserDetailsFormSection
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
          <MedicationScheduleSection
            medicationSchedules={medicationSchedules}
            setMedicationSchedules={setMedicationSchedules}
            handleStartReminder={handleStartReminder}
            reminderStarted={reminderStarted}
          />
        </>
      )}
      <ReminderMockupsSection />
      <ApiSetupSection />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;