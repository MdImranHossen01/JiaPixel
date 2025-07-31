import React from 'react';
import { FiCalendar, FiClipboard, FiCheckCircle } from 'react-icons/fi';

const HowWeWork = () => {
    const steps = [
        {
            title: "Initial Consultation",
            description: "We discuss your project goals, requirements, and vision to understand your needs perfectly.",
            icon: <FiCalendar className="w-6 h-6" />
        },
        {
            title: "Project Planning",
            description: "Our team creates a detailed roadmap with milestones, timelines, and deliverables.",
            icon: <FiClipboard className="w-6 h-6" />
        },
        {
            title: "Execution & Delivery",
            description: "We implement the solution with regular updates and deliver the final product on time.",
            icon: <FiCheckCircle className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        How We Work
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Our proven process delivers exceptional results every time
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="text-yellow-500 font-bold hover:text-indigo-600 transition-colors duration-300 mb-4">
                                <div className="flex items-center">
                                    <span className="mr-3">{step.icon}</span>
                                    <span className="text-lg">{step.title}</span>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-2">{step.description}</p>
                            <div className="mt-4 text-gray-400 text-sm">
                                Step {index + 1} of {steps.length}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-yellow-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        Get Started With Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;