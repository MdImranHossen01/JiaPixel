import React from 'react';
import Link from 'next/link';
import { FiCode, FiLayers, FiSmartphone, FiDatabase, FiCloud, FiShield } from 'react-icons/fi';
import PageHeader from '@/app/components/PageHeader';
import CTA from '@/app/components/CTA';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import prisma from '@/lib/prisma';
import { type Service as ServiceType } from '@prisma/client';

const iconMap: Record<string, React.ElementType> = {
  FiCode,
  FiLayers,
  FiSmartphone,
  FiDatabase,
  FiCloud,
  FiShield,
};

async function getServices(): Promise<ServiceType[]> {
  try {
    return await prisma.service.findMany({ orderBy: { createdAt: 'asc' } });
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching services:', err);
    }
    return [];
  }
}

const ServiceCard: React.FC<ServiceType> = ({ icon, title, description, features, slug }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || FiCode;
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="text-purple-600 mb-4">
          <IconComponent size={40} className="p-2 bg-purple-50 rounded-lg" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {Array.isArray(features) &&
            features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 mt-auto">
        <Link href={`/services/${slug}`} className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors duration-300">
          Learn more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <main>
      <PageHeader title="Comprehensive Digital Solutions" subtitle="We deliver end-to-end services to help your business thrive in the digital world." />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">No services found.</p>
          )}
          <div className="mt-16 text-center">
            <Link href="/contact" className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
