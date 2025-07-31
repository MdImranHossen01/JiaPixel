import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';

const ContactInfoCard = ({ icon, title, description, additional }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="text-purple-600 mb-4">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {additional && (
        <p className="text-gray-500 mt-2 text-sm">{additional}</p>
      )}
    </div>
  );
};

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMail />,
      title: "Email Us",
      description: "info@yourcompany.com",
      additional: "We'll respond within 24 hours"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      description: "+1 (555) 123-4567",
      additional: "Mon-Fri, 9am-5pm EST"
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      description: "123 Business Ave, Suite 500",
      additional: "New York, NY 10001"
    },
    {
      icon: <FiClock />,
      title: "Working Hours",
      description: "Monday - Friday",
      additional: "9:00 AM - 5:00 PM"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <ContactInfoCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                additional={method.additional}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
                  Send Us a Message
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  How Can We Help You?
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center"
                  >
                    Send Message <FiSend className="ml-2" />
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-xl h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132579!2d-73.987844924525!3d40.74844097138965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have More Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Check out our FAQ or reach out to our support team for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3.5 bg-white text-purple-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              Visit FAQ
            </button>
            <button className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-300">
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;