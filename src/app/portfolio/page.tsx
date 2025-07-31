'use client';
import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiFilter, FiX } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A full-featured online store with payment integration and inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Secure banking application with biometric authentication and transaction features.",
    tags: ["React Native", "Firebase", "Redux"],
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    id: 3,
    title: "Corporate Dashboard",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Data visualization dashboard for business analytics and reporting.",
    tags: ["Next.js", "Tailwind CSS", "Chart.js"],
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    id: 4,
    title: "Fitness Tracker",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Workout and nutrition tracking application with social features.",
    tags: ["Flutter", "Firebase", "BLoC"],
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    category: "web",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Reservation platform with table management and customer notifications.",
    tags: ["Vue.js", "Laravel", "MySQL"],
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    id: 6,
    title: "Social Media Analytics",
    category: "design",
    image: "https://images.unsplash.com/photo-1611162617213-6d7a2d4f471d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Dashboard UI design for social media performance metrics.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    links: {
      live: "#",
      code: "#"
    }
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "design", name: "UI/UX Design" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio Showcase
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Explore our collection of successful projects and case studies
          </p>
        </div>

        {/* Mobile Filter Dropdown */}
        <div className="lg:hidden mb-8 relative">
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <span>{filters.find(f => f.id === activeFilter)?.name}</span>
            <FiFilter className="text-gray-500" />
          </button>
          
          {filterOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setFilterOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-50 ${activeFilter === filter.id ? 'bg-purple-50 text-purple-600' : 'text-gray-700'}`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Filter Tabs */}
        <div className="hidden lg:flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow-sm border border-gray-200 p-1">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${activeFilter === filter.id ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-3">
                  <a 
                    href={project.links.live} 
                    className="text-purple-600 hover:text-purple-800 flex items-center text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.links.code} 
                    className="text-gray-600 hover:text-gray-800 flex items-center text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-1" /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-white text-purple-600 font-medium rounded-lg border border-purple-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 shadow-sm hover:shadow-md">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;