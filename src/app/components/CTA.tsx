import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-purple-700">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Have a Project in Mind?
        </h2>
        <p className="mt-2 text-purple-200 max-w-2xl mx-auto">
          Let's work together to bring your ideas to life. We're here to help you achieve your business goals with our digital expertise.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full mt-8 hover:bg-gray-100 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTA;