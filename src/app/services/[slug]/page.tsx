'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Service } from '@prisma/client';
import Link from 'next/link';

export default function ServiceDetailPage() {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/slug/${slug}`);
        
        if (!res.ok) {
          if (res.status === 404) {
            setError('Service not found');
          } else {
            setError('Failed to fetch service details');
          }
          return;
        }
        
        const data = await res.json() as Service;
        setService(data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Error fetching service:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      void fetchService();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading service details...</div>
      </div>
    );
  }

  if (error ?? !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-2xl text-red-600 mb-4">{error ?? 'Service not found'}</div>
        <Link 
          href="/services" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professional {service.title} services tailored to your business needs
            </p>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Service Image */}
            {service.image && (
              <div className="w-full h-64 md:h-96 bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Service Description */}
            <div className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                {/* Additional sections you can customize */}
                <h3 className="text-xl font-semibold mb-3">What We Offer</h3>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>Customized solutions for your specific requirements</li>
                  <li>Expert team with years of industry experience</li>
                  <li>Cutting-edge technology and best practices</li>
                  <li>Ongoing support and maintenance</li>
                  <li>Competitive pricing and transparent processes</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Our Process</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Initial consultation and requirement analysis</li>
                  <li>Strategy development and planning</li>
                  <li>Implementation and execution</li>
                  <li>Testing and quality assurance</li>
                  <li>Deployment and ongoing support</li>
                </ol>
              </div>
              
              {/* CTA Section */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss how our {service.title} services can help your business grow.
                </p>
                <div className="space-x-4">
                  <Link 
                    href="/contact" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/services" 
                    className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services Section (Optional) */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Other Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our other services that might interest you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Placeholder for related services - you can fetch and display actual related services */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600">Custom web applications tailored to your business needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p className="text-gray-600">Comprehensive digital marketing solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}