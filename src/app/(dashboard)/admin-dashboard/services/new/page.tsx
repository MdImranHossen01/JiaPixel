'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const steps = ['Overview', 'Pricing', 'Description', 'Gallery', 'Requirements', 'Review'];

export default function NewServicePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
  });
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // FIXED: Removed 'async' as there's no 'await' inside.
  const handleSubmit = () => {
    // This is where you will call your API to save the data
    // FIXED: Removed 'console.info' to fix the no-console warning.
    // Example: await fetch('/api/services', { method: 'POST', body: JSON.stringify(formData) });
    router.push('/admin-dashboard/services');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Create New Service</h1>

      {/* Step Indicator */}
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`step-item ${index <= currentStep ? 'active' : ''}`}
          >
            <div className="step-counter">{index + 1}</div>
            <div className="step-name">{step}</div>
          </div>
        ))}
      </div>

      {/* Form Content based on current step */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        {currentStep === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <label className="label">Title</label>
            <input
              type="text"
              placeholder="e.g., I will build a professional Next.js website"
              className="input input-bordered w-full"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <p>Pricing form goes here...</p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 0 && (
          <button type="button" onClick={handleBack} className="btn">
            Back
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="btn btn-primary ml-auto"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-success ml-auto"
          >
            Publish Service
          </button>
        )}
      </div>
    </div>
  );
}