import React from 'react';
import Image from 'next/image';
import { FiUsers, FiAward, FiGlobe, FiHeart } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  social: SocialLinks;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, social }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-100">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          width={128}
          height={128}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-purple-600 font-medium mb-4">{role}</p>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex justify-center space-x-3">
        {social.linkedin && (
          <a href={social.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} />
          </a>
        )}
        {social.twitter && (
          <a href={social.twitter} className="text-gray-500 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={18} />
          </a>
        )}
        {social.github && (
          <a href={social.github} className="text-gray-500 hover:text-gray-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-purple-600 mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emma Davis",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const companyValues: ValueCardProps[] = [
    {
      icon: FiUsers,
      title: "Collaboration",
      description: "We believe in working together to achieve extraordinary results for our clients."
    },
    {
      icon: FiAward,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, never settling for mediocrity."
    },
    {
      icon: FiGlobe,
      title: "Innovation",
      description: "We embrace change and constantly seek new ways to solve problems creatively."
    },
    {
      icon: FiHeart,
      title: "Integrity",
      description: "We do business with honesty and transparency, building trust with every interaction."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a passionate team dedicated to delivering innovative solutions that make a real difference.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Building the Future Since 2015
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2015, our company began as a small startup with a big vision. Today, we've grown into a 
                team of 50+ professionals serving clients across 15 countries.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our journey has been marked by continuous learning, innovation, and a commitment to delivering 
                exceptional value to our clients. We take pride in our ability to adapt and evolve in an ever-changing 
                technological landscape.
              </p>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
                Learn More About Our Journey
              </button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team working together" 
                className="w-full h-auto object-cover"
                width={800}
                height={533}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What We Stand For
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              These core principles guide everything we do as a company and as individuals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet The Experts
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              The talented people behind our success and continued growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                social={member.social}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for new challenges and opportunities to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3.5 bg-white text-purple-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              Get a Free Consultation
            </button>
            <button className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-300">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
