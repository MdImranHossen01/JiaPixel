'use client';

import React, { useState, useEffect } from 'react';
import { type Service } from '@prisma/client';

// This is the main component for the services management page
export default function ManageServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ title: '', description: '', icon: '', slug: '', features: '' });

  // Function to fetch services from the API
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/services');
      const data = (await res.json()) as Service[];
      setServices(data);
    } catch (error) {
      // Log only in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch services', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch services when the component loads
  useEffect(() => {
    void fetchServices();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to create a new service
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          features: formData.features.split(',').map((f) => f.trim()), // Convert comma-separated string to array
        }),
      });
      if (res.ok) {
        setFormData({ title: '', description: '', icon: '', slug: '', features: '' }); // Reset form
        await fetchServices(); // Refresh the list
      } else if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Failed to create service');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Error creating service:', error);
      }
    }
  };

  // Handle deleting a service
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        await fetchServices(); // Refresh the list
      } else if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Failed to delete service');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Error deleting service:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Services</h1>

      {/* Form to add a new service */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
        <form
          onSubmit={(e) => void handleSubmit(e)} // ✅ Wrap async in void to fix no-misused-promises
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" required className="input input-bordered w-full" />
          <input name="slug" value={formData.slug} onChange={handleInputChange} placeholder="Slug (e.g., web-development)" required className="input input-bordered w-full" />
          <input name="icon" value={formData.icon} onChange={handleInputChange} placeholder="Icon Name (e.g., FiCode)" required className="input input-bordered w-full" />
          <input name="features" value={formData.features} onChange={handleInputChange} placeholder="Features (comma-separated)" required className="input input-bordered w-full" />
          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" required className="textarea textarea-bordered w-full md:col-span-2"></textarea>
          <button type="submit" className="btn btn-primary md:col-span-2">Add Service</button>
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
                  <th>Slug</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td>{service.title}</td>
                    <td>{service.slug}</td>
                    <td className="space-x-2">
                      <button className="btn btn-sm btn-outline">Edit</button>
                      <button
                        onClick={() => void handleDelete(service.id)} // ✅ Wrap async in void
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
