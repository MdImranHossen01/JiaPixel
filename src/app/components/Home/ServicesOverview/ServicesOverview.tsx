import React from 'react';
// Import icons from the library
import { FaLightbulb, FaBriefcase, FaHeartbeat, FaChartLine, FaBullhorn, FaCode } from 'react-icons/fa';

// Reusable Service Card Component
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center flex flex-col items-center">
            <div className="bg-purple-100 text-purple-600 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed">
                {description}
            </p>
        </div>
    );
};


const ServicesOverview = () => {
    // Array of service data to easily manage and render cards
    const services = [
        {
            icon: <FaLightbulb size={36} />,
            title: "Financial Planning",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            icon: <FaBriefcase size={36} />,
            title: "Business Consultation",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            icon: <FaHeartbeat size={36} />,
            title: "Life & Health Insurance",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            icon: <FaChartLine size={36} />,
            title: "SEO Optimization",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            icon: <FaBullhorn size={36} />,
            title: "Digital Marketing",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            icon: <FaCode size={36} />,
            title: "Web Development",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
    ];

    return (
        <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-purple-600 font-semibold tracking-wider uppercase">
                        Our Services
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
                        Our Best Services
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;