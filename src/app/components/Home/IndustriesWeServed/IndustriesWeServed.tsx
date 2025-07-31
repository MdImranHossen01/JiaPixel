import React from 'react';
import { FaHospital, FaPiggyBank, FaGraduationCap, FaShoppingBag, FaIndustry, FaRobot } from 'react-icons/fa';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-100 group">
      <div className="flex items-start space-x-4">
        <div className="bg-purple-100 text-purple-600 p-3 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

const IndustriesServed: React.FC = () => {
  const industries = [
    {
      icon: <FaHospital size={20} />,
      title: "Healthcare",
      description: "Innovative solutions for hospitals, clinics, and medical research facilities."
    },
    {
      icon: <FaPiggyBank size={20} />,
      title: "Finance",
      description: "Secure systems for banking, investment, and financial services."
    },
    {
      icon: <FaGraduationCap size={20} />,
      title: "Education",
      description: "Technology solutions for schools, universities, and e-learning platforms."
    },
    {
      icon: <FaShoppingBag size={20} />,
      title: "Retail",
      description: "E-commerce and in-store solutions for modern retailers."
    },
    {
      icon: <FaIndustry size={20} />,
      title: "Manufacturing",
      description: "Automation and optimization for industrial operations."
    },
    {
      icon: <FaRobot size={20} />,
      title: "Technology",
      description: "Cutting-edge solutions for tech companies and startups."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We deliver tailored solutions to diverse sectors, leveraging our deep industry knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg border border-purple-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 shadow-sm hover:shadow-md">
            Explore Our Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
