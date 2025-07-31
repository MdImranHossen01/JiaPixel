import React from 'react';
import { FiCode, FiLayers, FiSmartphone, FiDatabase, FiCloud, FiShield } from 'react-icons/fi';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="p-6">
        <div className="text-purple-600 mb-4">
          {React.cloneElement(icon, { size: 40, className: 'p-2 bg-purple-50 rounded-lg' })}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors duration-300">
          Learn more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      features: [
        "React/Next.js development",
        "Responsive design",
        "Performance optimization",
        "SEO friendly"
      ]
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps for iOS and Android.",
      features: [
        "React Native development",
        "Native app development",
        "App store optimization",
        "Push notifications"
      ]
    },
    {
      icon: <FiLayers />,
      title: "UI/UX Design",
      description: "Beautiful interfaces with exceptional user experience.",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Interaction design",
        "Design systems"
      ]
    },
    {
      icon: <FiDatabase />,
      title: "Backend Development",
      description: "Robust server-side solutions for your applications.",
      features: [
        "Node.js & Python",
        "API development",
        "Database design",
        "Cloud integration"
      ]
    },
    {
      icon: <FiCloud />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment.",
      features: [
        "AWS & Azure",
        "Serverless architecture",
        "CI/CD pipelines",
        "Microservices"
      ]
    },
    {
      icon: <FiShield />,
      title: "Security Solutions",
      description: "Protecting your digital assets and data.",
      features: [
        "Penetration testing",
        "Security audits",
        "Data encryption",
        "Compliance consulting"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
            Our Offerings
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            We deliver end-to-end services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;