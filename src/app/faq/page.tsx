'use client';
import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiChevronUp, FiMail, FiMessageSquare } from 'react-icons/fi';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-6">
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors duration-200">
          {question}
        </h3>
        {isOpen ? (
          <FiChevronUp className="text-purple-600 ml-2 flex-shrink-0" />
        ) : (
          <FiChevronDown className="text-gray-500 ml-2 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQCategoryProps {
  title: string;
  items: { question: string; answer: string }[];
  openItems: number[];
  toggleItem: (index: number) => void;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ title, items, openItems, toggleItem }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.includes(index)}
            toggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  type ToggleItemFn = (index: number) => void;

  const toggleItem: ToggleItemFn = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const faqData = [
    {
      category: "General Questions",
      items: [
        {
          question: "What services do you offer?",
          answer: "We provide a range of services including web development, mobile app development, UI/UX design, digital marketing, and consulting services. Our team specializes in creating custom solutions tailored to your business needs."
        },
        {
          question: "How can I contact your support team?",
          answer: "You can reach our support team by email at support@yourcompany.com, through our contact form, or by calling our support line at +1 (555) 123-4567 during business hours (9am-5pm EST, Monday-Friday)."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we offer free 30-minute consultations to discuss your project requirements and how we can help. You can schedule a consultation through our website or by contacting our sales team."
        }
      ]
    },
    {
      category: "Account & Billing",
      items: [
        {
          question: "How do I create an account?",
          answer: "You can create an account by clicking on the 'Sign Up' button on our website and following the registration process. You'll need to provide your name, email address, and create a password."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For enterprise clients, we also offer invoice-based billing with net-30 terms."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time through your account dashboard. If you cancel mid-billing cycle, you'll continue to have access until the end of your current billing period."
        }
      ]
    },
    {
      category: "Technical Support",
      items: [
        {
          question: "What are your system requirements?",
          answer: "Our web applications are designed to work on all modern browsers (Chrome, Firefox, Safari, Edge) on both desktop and mobile devices. For optimal performance, we recommend using the latest browser versions."
        },
        {
          question: "How do I report a bug or issue?",
          answer: "You can report bugs or technical issues by contacting our support team or using the 'Report an Issue' feature in your account dashboard. Please include as much detail as possible about the problem."
        },
        {
          question: "Do you provide API documentation?",
          answer: "Yes, we provide comprehensive API documentation for all our developer products. You can access the documentation through our developer portal or by contacting our technical support team."
        }
      ]
    }
  ];

  const filteredData = faqData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredData.length > 0 ? (
            filteredData.map((category, index) => (
              <FAQCategory
                key={index}
                title={category.category}
                items={category.items}
                openItems={openItems}
                toggleItem={toggleItem}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center">
                <FiMail className="mr-2" /> Contact Support
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-4">
              <FiMessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is happy to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
                Contact Support
              </button>
              <button className="px-6 py-3.5 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;