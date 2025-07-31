import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl max-w-3xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="prose max-w-none">
              <div className="mb-12">
                <p className="text-gray-600 mb-6">
                  Welcome to our website. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
                </p>
                <p className="text-gray-600">
                  Please read these terms and conditions carefully before using our services.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <a href="#intellectual-property" className="text-purple-600 hover:text-purple-800 hover:underline">
                      Intellectual Property
                    </a>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <a href="#user-obligations" className="text-purple-600 hover:text-purple-800 hover:underline">
                      User Obligations
                    </a>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <a href="#prohibited-uses" className="text-purple-600 hover:text-purple-800 hover:underline">
                      Prohibited Uses
                    </a>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <a href="#limitation-liability" className="text-purple-600 hover:text-purple-800 hover:underline">
                      Limitation of Liability
                    </a>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <a href="#governing-law" className="text-purple-600 hover:text-purple-800 hover:underline">
                      Governing Law
                    </a>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <a href="#changes-terms" className="text-purple-600 hover:text-purple-800 hover:underline">
                      Changes to Terms
                    </a>
                  </li>
                </ul>
              </div>

              {/* Terms Sections */}
              <div className="space-y-12">
                <section id="intellectual-property">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Intellectual Property</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      The Service and its original content, features, and functionality are and will remain the exclusive property of  <Link href="https://jiapixel.com">Jiapixel</Link> and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                    </p>
                    <p>
                      Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of  <Link href="https://jiapixel.com">Jiapixel</Link>.
                    </p>
                  </div>
                </section>

                <section id="user-obligations">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. User Obligations</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      As a user of the website or services, you agree to the following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You will use the service only for lawful purposes</li>
                      <li>You will not use the service for any illegal or unauthorized purpose</li>
                      <li>You will not violate any laws in your jurisdiction</li>
                      <li>You are responsible for maintaining the confidentiality of your account information</li>
                    </ul>
                  </div>
                </section>

                <section id="prohibited-uses">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Prohibited Uses</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      You may not use the website or services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>In any way that breaches any applicable local, national, or international law or regulation</li>
                      <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material</li>
                      <li>To knowingly transmit any data, send or upload any material that contains viruses or any other harmful programs</li>
                      <li>To reproduce, duplicate, copy, or resell any part of our site in contravention of these terms</li>
                    </ul>
                  </div>
                </section>

                <section id="limitation-liability">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Limitation of Liability</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      In no event shall <Link href="https://jiapixel.com">jiapixel.com</Link>, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your access to or use of or inability to access or use the Service</li>
                      <li>Any conduct or content of any third party on the Service</li>
                      <li>Any content obtained from the Service</li>
                      <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                    </ul>
                  </div>
                </section>

                <section id="governing-law">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Governing Law</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      These Terms shall be governed and construed in accordance with the laws of <Link href="https://jiapixel.com">Jiapixel</Link>, without regard to its conflict of law provisions.
                    </p>
                    <p>
                      Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                    </p>
                  </div>
                </section>

                <section id="changes-terms">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Changes to Terms</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                    </p>
                    <p>
                      What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      If you have any questions about these Terms, please contact us at:
                    </p>
                    <p>
                      <strong>Email:</strong> mail.jiapixel@gmail.com<br />
                      <strong>Address:</strong> Nabokalosh, Matlabgonj (3640), Matlab, Chandpur
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            By using our website and services, you acknowledge that you have read and understood these Terms and Conditions.
          </p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;