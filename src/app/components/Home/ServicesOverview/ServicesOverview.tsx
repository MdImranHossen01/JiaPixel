import React from 'react';
// Import icons from the library
import { FaLightbulb, FaBriefcase, FaMobileAlt, FaChartLine, FaBullhorn, FaCode } from 'react-icons/fa';

// Reusable Service Card Component
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
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
            icon: <FaCode size={36} />,
            title: "Custom Web Development",
            description: "We build responsive, high-performance websites and web applications tailored to your business needs using modern technologies."
        },
        {
            icon: <FaMobileAlt size={36} />,
            title: "Mobile App Development",
            description: "Create engaging mobile experiences with our cross-platform app development solutions that work seamlessly on iOS and Android."
        },
        {
            icon: <FaBullhorn size={36} />,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies including social media, content marketing, and influencer campaigns to grow your online presence."
        },
        {
            icon: <FaChartLine size={36} />,
            title: "SEO Optimization",
            description: "Boost your search engine rankings with our data-driven SEO strategies that drive organic traffic and improve conversion rates."
        },
        {
            icon: <FaLightbulb size={36} />,
            title: "UI/UX Design",
            description: "Beautiful, intuitive user interfaces designed to enhance user experience and increase engagement with your digital products."
        },
        {
            icon: <FaBriefcase size={36} />,
            title: "Brand Strategy",
            description: "Develop a strong brand identity with our comprehensive strategy services including logo design, messaging, and visual identity systems."
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
                        Digital Solutions That Drive Growth
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