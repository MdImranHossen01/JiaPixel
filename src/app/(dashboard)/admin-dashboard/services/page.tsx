'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { type Service } from '@prisma/client';

export default function ManageServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // State for error messages

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    bannerImage: '',
    description: '',
    requirements: '',
    pricing: '{}',
    status: 'draft',
  });

  // Function to fetch services from the API
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/services');
      if (res.ok) {
        const jsonResponse: unknown = await res.json();
        // A simple type guard to ensure the response is an array
        if (Array.isArray(jsonResponse)) {
          setServices(jsonResponse as Service[]);
        }
      } else {
        setError('Failed to fetch services');
      }
    } catch {
      setError('An error occurred while fetching services.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch services when the component loads
  useEffect(() => {
    void fetchServices();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to create a new service
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state on new submission

    // FIXED: Safely parse the 'pricing' JSON before submitting
    let parsedPricing: unknown;
    try {
      parsedPricing = JSON.parse(formData.pricing);
    } catch {
      setError('The pricing field contains invalid JSON.');
      return; // Stop submission if JSON is invalid
    }

    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pricing: parsedPricing,
        }),
      });
      if (res.ok) {
        setFormData({
          title: '',
          slug: '',
          category: '',
          bannerImage: '',
          description: '',
          requirements: '',
          pricing: '{}',
          status: 'draft',
        });
        await fetchServices(); // Refresh the list
      } else {
        setError('Failed to create service.');
      }
    } catch {
      setError('An error occurred while creating the service.');
    }
  };

  // Handle deleting a service
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    setError(null);

    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        await fetchServices(); // Refresh the list
      } else {
        setError('Failed to delete service.');
      }
    } catch {
      setError('An error occurred while deleting the service.');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Services</h1>

      {/* Form to add a new service */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
        <form
          onSubmit={(e) => void handleSubmit(e)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* ...form inputs remain the same... */}
          <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" required className="input input-bordered w-full"/>
          <input name="slug" value={formData.slug} onChange={handleInputChange} placeholder="Slug" required className="input input-bordered w-full"/>
          <input name="category" value={formData.category} onChange={handleInputChange} placeholder="Category" required className="input input-bordered w-full"/>
          <input name="bannerImage" value={formData.bannerImage} onChange={handleInputChange} placeholder="Banner Image URL" required className="input input-bordered w-full"/>
          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" required className="textarea textarea-bordered w-full md:col-span-2"/>
          <textarea name="requirements" value={formData.requirements} onChange={handleInputChange} placeholder="Requirements" required className="textarea textarea-bordered w-full md:col-span-2"/>
          <textarea name="pricing" value={formData.pricing} onChange={handleInputChange} placeholder='Pricing (JSON format)' required className="textarea textarea-bordered w-full md:col-span-2"/>
          
          {/* Display any errors */}
          {error && (
            <div className="md:col-span-2 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md">
              {error}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary md:col-span-2">
            Add Service
          </button>
        </form>
      </div>

      {/* Table of existing services */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Existing Services</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td>{service.title}</td>
                    <td>{service.category}</td>
                    <td>{service.status}</td>
                    <td className="space-x-2">
                      <Link
                        href={`/admin-dashboard/services/edit/${service.id}`}
                        className="btn btn-sm btn-outline"
                      >
                        Edit
                      </Link>
                      <button
                        // FIXED: Added 'void' to fix the no-misused-promises error
                        onClick={() => void handleDelete(service.id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}