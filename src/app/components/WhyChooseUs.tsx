import React from 'react';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    "Expert Team with Years of Experience",
    "Data-Driven & Proven Strategies",
    "Transparent Communication & Reporting",
    "Dedicated Support for Every Client"
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Team collaborating in a modern office" 
              fill
              className="object-cover"
            />
          </div>
          {/* Content Column */}
          <div>
            <p className="text-purple-600 font-semibold tracking-wider uppercase">Our Advantage</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 mb-6">
              We are committed to delivering not just services, but results. Our approach combines cutting-edge technology with a client-centric focus to ensure your success.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <FiCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;