import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const UploadSection = ({ uploadedFile, extractedData, handleFileUpload }) => {
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section id="upload-section" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          1. Upload Your Prescription
        </motion.h2>
        
        <Card className="p-8 bg-white shadow-lg">
          <div 
            className="border-2 border-dashed border-blue-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={handleButtonClick}
          >
            <Upload className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Drag & Drop or Click to Upload
            </h3>
            <p className="text-gray-600 mb-6">
              Support for JPG, PNG, PDF files (Max 10MB)
            </p>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              ref={fileInputRef}
            />
            <Button className="blue-gradient text-white pointer-events-none">
              Choose File
            </Button>
            {uploadedFile && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
              >
                <p className="text-green-800">✅ {uploadedFile.name} uploaded successfully!</p>
              </motion.div>
            )}
          </div>
        </Card>

        {extractedData && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                Extracted Prescription Details
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium text-gray-700">Patient:</span>
                    <span className="ml-2 text-gray-900">{extractedData.patient}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Doctor:</span>
                    <span className="ml-2 text-gray-900">{extractedData.doctor}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default UploadSection;