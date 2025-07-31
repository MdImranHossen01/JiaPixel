'use client'
import React, { useState, useEffect } from 'react';
import { FiUsers, FiAward, FiBriefcase, FiSmile } from 'react-icons/fi';

import { IconType } from 'react-icons';

interface StatCardProps {
  icon: IconType;
  value: number;
  label: string;
  suffix: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount(prev => Math.min(prev + Math.ceil(value / 30), value));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [count, value]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
      <div className="text-purple-600 mb-4 flex justify-center">
        <Icon size={48} className="p-2 bg-purple-50 rounded-full" />
      </div>
      <div className="text-5xl font-bold text-gray-800 mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const statsData = [
    {
      icon: FiUsers,
      value: 250,
      label: "Happy Clients",
      suffix: "+"
    },
    {
      icon: FiBriefcase,
      value: 500,
      label: "Projects Completed",
      suffix: "+"
    },
    {
      icon: FiAward,
      value: 25,
      label: "Industry Awards",
      suffix: ""
    },
    {
      icon: FiSmile,
      value: 98,
      label: "Client Satisfaction",
      suffix: "%"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Growth in Numbers
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Quantifying our success through measurable achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;