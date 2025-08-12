'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { type Service } from '@prisma/client';

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [formData, setFormData] = useState({ title: '', description: '', icon: '', slug: '', features: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchServiceData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`/api/services/${id}`);
          if (res.ok) {
            const data = await res.json() as Service;
            // Convert features array back to a comma-separated string for the input field
            setFormData({ ...data, features: data.features.join(', ') });
          } else {
            console.error("Failed to fetch service data");
          }
        } catch (error) {
          console.error("Error fetching service data:", error);
        } finally {
          setIsLoading(false);
        }
      };
      void fetchServiceData();
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          features: formData.features.split(',').map(f => f.trim()),
        }),
      });

      if (res.ok) {
        router.push('/admin-dashboard/services'); // Redirect back to the services list on success
      } else {
        console.error("Failed to update service");
      }
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  if (isLoading) {
    return <p className="text-center p-8">Loading service data...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Service</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={(e) => void handleSubmit(e)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" required className="input input-bordered w-full" />
          <input name="slug" value={formData.slug} onChange={handleInputChange} placeholder="Slug" required className="input input-bordered w-full" />
          <input name="icon" value={formData.icon} onChange={handleInputChange} placeholder="Icon Name" required className="input input-bordered w-full" />
          <input name="features" value={formData.features} onChange={handleInputChange} placeholder="Features (comma-separated)" required className="input input-bordered w-full" />
          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" required className="textarea textarea-bordered w-full md:col-span-2"></textarea>
          <div className="md:col-span-2 flex justify-end gap-4">
            <button type="button" onClick={() => router.back()} className="btn btn-ghost">Cancel</button>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}