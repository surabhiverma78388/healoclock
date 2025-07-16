import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const UserDetailsFormSection = ({ userDetails, setUserDetails }) => {
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          2. Enter Your Details
        </motion.h2>
        
        <Card className="p-8 bg-white shadow-lg">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center"><User className="h-4 w-4 mr-2" /> Your Name</Label>
              <Input id="name" placeholder="John Doe" value={userDetails.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center"><Mail className="h-4 w-4 mr-2" /> Your Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" value={userDetails.email} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center"><Phone className="h-4 w-4 mr-2" /> Your Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" value={userDetails.phone} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="caregiverEmail" className="flex items-center"><Users className="h-4 w-4 mr-2" /> Caregiver's Email</Label>
              <Input id="caregiverEmail" type="email" placeholder="caregiver@example.com" value={userDetails.caregiverEmail} onChange={handleChange} />
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default UserDetailsFormSection;