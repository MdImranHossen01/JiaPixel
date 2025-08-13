'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { type Service } from '@prisma/client';

// This interface now EXACTLY matches the editable fields from your Prisma model.
interface ServiceFormData {
  title: string;
  slug: string;
  category: string;
  bannerImage: string;
  pricing: string; // We'll handle the JSON object as a string in the textarea
  description: string;
  requirements: string;
  status: string;
}

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id ?? '';

  // The form's state now reflects your model
  const [formData, setFormData] = useState<ServiceFormData>({
    title: '',
    slug: '',
    category: '',
    bannerImage: '',
    pricing: '',
    description: '',
    requirements: '',
    status: 'draft',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchServiceData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/services/${id}`);
        if (res.ok) {
          const jsonResponse: unknown = await res.json();
          if (jsonResponse && typeof jsonResponse === 'object') {
            const data = jsonResponse as Service;

            // This now maps your actual model's fields to the form
            setFormData({
              title: data.title ?? '',
              slug: data.slug ?? '',
              category: data.category ?? '',
              bannerImage: data.bannerImage ?? '',
              // The pricing JSON object is converted to a formatted string for editing
              pricing: data.pricing ? JSON.stringify(data.pricing, null, 2) : '',
              description: data.description ?? '',
              requirements: data.requirements ?? '',
              status: data.status ?? 'draft',
            });
          } else {
            setError('Failed to parse service data.');
          }
        } else {
          setError('Failed to fetch service data.');
        }
      } catch { // FIXED: Removed unused 'err' variable
        setError('An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchServiceData();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    let parsedPricing: unknown;
    try {
      parsedPricing = JSON.parse(formData.pricing);
    } catch {
      setError('The pricing field contains invalid JSON. Please correct it.');
      return;
    }

    try {
      const res = await fetch(`/api/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pricing: parsedPricing,
        }),
      });

      if (res.ok) {
        router.push('/admin-dashboard/services');
      } else {
        const errorData: unknown = await res.json();
        const errorMessage =
          errorData && typeof errorData === 'object' && 'message' in errorData
            ? String((errorData as { message: unknown }).message)
            : 'Failed to update service.';
        setError(errorMessage);
      }
    } catch { // FIXED: Removed unused 'err' variable
      setError('An unexpected error occurred during submission.');
    }
  };

  if (isLoading) {
    return <p className="text-center p-8">Loading service data...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Service</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form
          onSubmit={(e) => void handleSubmit(e)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label"><span className="label-text">Title</span></label>
            <input name="title" value={formData.title} onChange={handleInputChange} required className="input input-bordered w-full"/>
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Slug</span></label>
            <input name="slug" value={formData.slug} onChange={handleInputChange} required className="input input-bordered w-full"/>
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Category</span></label>
            <input name="category" value={formData.category} onChange={handleInputChange} required className="input input-bordered w-full"/>
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Status</span></label>
            <select name="status" value={formData.status} onChange={handleInputChange} className="select select-bordered">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text">Banner Image URL</span></label>
            <input name="bannerImage" value={formData.bannerImage} onChange={handleInputChange} required className="input input-bordered w-full"/>
          </div>
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text">Description</span></label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} required className="textarea textarea-bordered w-full h-24"/>
          </div>
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text">Requirements</span></label>
            <textarea name="requirements" value={formData.requirements} onChange={handleInputChange} required className="textarea textarea-bordered w-full h-24"/>
          </div>
          <div className="form-control md:col-span-2">
            <label className="label">
                <span className="label-text">Pricing (must be valid JSON)</span>
            </label>
            <textarea name="pricing" value={formData.pricing} onChange={handleInputChange} required className="textarea textarea-bordered w-full h-32 font-mono"/>
            <label className="label">
                <span className="label-text-alt">Example: {`{ "basic": 50, "premium": 150 }`}</span>
            </label>
          </div>
          {error && (
            <div className="md:col-span-2 p-4 bg-red-100 text-red-700 border border-red-300 rounded-md">
                {error}
            </div>
          )}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button type="button" onClick={() => router.back()} className="btn btn-ghost">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}