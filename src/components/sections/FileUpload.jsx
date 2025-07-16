import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Brain, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const FileUpload = ({ onFileUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) {
      onFileUpload(file);
    } else {
      toast({
        variant: "destructive",
        title: "❌ Invalid File Type",
        description: "Please upload an image or PDF file."
      });
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
        isDragOver 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-300 hover:border-blue-400 hover:bg-blue-25'
      }`}
    >
      <Upload className={`w-16 h-16 mx-auto mb-6 ${isDragOver ? 'text-blue-500' : 'text-gray-400'}`} />
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Drop your prescription here
      </h3>
      <p className="text-gray-600 mb-6">
        Supports JPG, PNG, PDF files up to 10MB
      </p>
      
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
      />
      
      <label htmlFor="file-upload">
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl cursor-pointer">
            <span>
                <FileText className="w-5 h-5 mr-2" />
                Browse Files
            </span>
        </Button>
      </label>
    </div>
  );
};

const ExtractedTextDisplay = ({ extractedText, isSampleData }) => {
  if (!extractedText) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 bg-white rounded-2xl p-8 shadow-lg"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <Brain className="w-6 h-6 mr-3 text-blue-600" />
          Extracted Prescription Details
        </h3>
        {isSampleData && (
          <div className="flex items-center bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
            <AlertCircle className="w-4 h-4 mr-2" />
            Sample Data
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-xl p-4">
          <p className="text-sm text-blue-600 font-medium">Patient Name</p>
          <p className="text-lg font-bold text-gray-900">{extractedText.patientName}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4">
          <p className="text-sm text-green-600 font-medium">Doctor</p>
          <p className="text-lg font-bold text-gray-900">{extractedText.doctorName}</p>
        </div>
      </div>

      <h4 className="text-xl font-bold text-gray-900 mb-4">Medications</h4>
      <div className="space-y-4">
        {extractedText.medicines.map((medicine, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
          >
            <div className="flex items-start justify-between mb-4">
              <h5 className="text-xl font-bold text-gray-900">{medicine.name}</h5>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {medicine.dosage}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 font-medium">Frequency</p>
                <p className="text-gray-900 font-semibold">{medicine.frequency}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Duration</p>
                <p className="text-gray-900 font-semibold">{medicine.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Instructions</p>
                <p className="text-gray-900 font-semibold">{medicine.instructions}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


const FileUploadSection = ({ uploadedFile, extractedText, onFileUpload, isSampleData }) => {
  return (
    <section id="upload-section" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upload Your <span className="text-blue-600">Prescription</span>
          </h2>
          <p className="text-xl text-gray-600">
            {uploadedFile ? `${uploadedFile.name} uploaded successfully!` : 'Drag and drop your prescription or click to browse'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8"
        >
          <FileUpload onFileUpload={onFileUpload} />
          <ExtractedTextDisplay extractedText={extractedText} isSampleData={isSampleData} />
        </motion.div>
      </div>
    </section>
  );
};

export default FileUploadSection;