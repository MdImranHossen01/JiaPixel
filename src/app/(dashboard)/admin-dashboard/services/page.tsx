'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Service } from '@prisma/client';

export default function ServicesManagementPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        if (!res.ok) throw new Error('Failed to fetch services');
        const data = await res.json() as Service[];
        setServices(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };
    
    void fetchServices();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    
    try {
      const res = await fetch(`/api/services/${id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        setServices(services.filter(service => service.id !== id));
      } else {
        alert('Failed to delete service');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to delete service:', error);
      alert('Failed to delete service');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Services Management</h1>
        <Link 
          href="/admin-dashboard/services/create" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Service
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map(service => (
              <tr key={service.id}>
                <td className="px-6 py-4 whitespace-nowrap">{service.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link 
                    href={`/admin-dashboard/services/${service.id}/edit`} 
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={() => {
                      void handleDelete(service.id);
                    }} 
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}