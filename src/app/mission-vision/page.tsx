import React from 'react';
import Image from 'next/image';
import { FiTarget, FiEye, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';

const MissionAndVision = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Purpose & Aspiration</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Guiding principles that define who we are and where we're headed
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                  <FiTarget size={24} />
                </div>
                <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why We Exist
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Our mission is to empower businesses through innovative technology solutions that drive growth, efficiency, and meaningful connections. We exist to bridge the gap between cutting-edge technology and real-world business needs.
                </p>
                <p className="mb-4">
                  We are committed to delivering exceptional value by combining technical expertise with deep industry knowledge, creating solutions that not only meet but exceed our clients' expectations.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deliver transformative digital experiences</li>
                  <li>Foster long-term partnerships based on trust</li>
                  <li>Push the boundaries of what's technologically possible</li>
                  <li>Make complex technology accessible and actionable</li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Our team working together" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Future vision" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <FiEye size={24} />
                </div>
                <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  Our Vision
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Where We're Headed
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  We envision a future where technology seamlessly enhances every aspect of business operations, creating opportunities for innovation, growth, and global impact.
                </p>
                <p className="mb-4">
                  By 2030, we aim to be recognized as a global leader in transformative business technology solutions, setting new standards for excellence and innovation in our industry.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Become the most trusted technology partner for SMBs</li>
                  <li>Pioneer sustainable tech solutions</li>
                  <li>Expand our global footprint to 50+ countries</li>
                  <li>Develop industry-changing innovations annually</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <FiAward size={24} />
              </div>
              <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Principles That Guide Us
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              These fundamental beliefs shape our culture and decision-making
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiUsers size={24} />,
                title: "Collaboration",
                description: "We believe in the power of teamwork and diverse perspectives to create exceptional solutions."
              },
              {
                icon: <FiAward size={24} />,
                title: "Excellence",
                description: "We pursue the highest standards in everything we do, delivering quality without compromise."
              },
              {
                icon: <FiGlobe size={24} />,
                title: "Innovation",
                description: "We embrace change and continuously seek better ways to solve problems and create value."
              },
              {
                icon: <FiTarget size={24} />,
                title: "Integrity",
                description: "We do business with honesty, transparency, and respect for all stakeholders."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="text-purple-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether as a client, partner, or team member, we invite you to be part of our mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3.5 bg-white text-purple-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              Explore Careers
            </button>
            <button className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionAndVision;