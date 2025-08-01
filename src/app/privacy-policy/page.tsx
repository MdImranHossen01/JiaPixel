import Link from 'next/link';
import React from 'react';
import { FiArrowRight, FiShield, FiDatabase, FiUser, FiMail, FiLock } from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <FiShield className="mr-3 text-2xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
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
                  At <Link href="/">Jia Pixel</Link>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-600">
                  Please read this privacy policy carefully. By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FiDatabase className="mr-2" /> Table of Contents
                </h2>
                <ul className="space-y-2">
                  {[
                    { id: 'information-collected', title: 'Information We Collect' },
                    { id: 'use-of-data', title: 'Use of Data' },
                    { id: 'data-protection', title: 'Data Protection' },
                    { id: 'data-sharing', title: 'Data Sharing' },
                    { id: 'your-rights', title: 'Your Rights' },
                    { id: 'cookies', title: 'Cookies' },
                    { id: 'changes', title: 'Changes to This Policy' },
                    { id: 'contact', title: 'Contact Us' }
                  ].map((item) => (
                    <li key={item.id} className="flex items-start">
                      <FiArrowRight className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <a href={`#${item.id}`} className="text-purple-600 hover:text-purple-800 hover:underline">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policy Sections */}
              <div className="space-y-12">
                <section id="information-collected">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FiUser className="mr-2" /> 1. Information We Collect
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We collect several different types of information for various purposes to provide and improve our service to you:</p>
                    <h3 className="font-semibold text-gray-800 mt-4">Personal Data</h3>
                    <p>While using our service, we may ask you to provide certain personally identifiable information that can be used to contact or identify you, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Address, State, ZIP/Postal code, City</li>
                      <li>Cookies and Usage Data</li>
                    </ul>
                    
                    <h3 className="font-semibold text-gray-800 mt-4">Usage Data</h3>
                    <p>We may also collect information about how the service is accessed and used, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Unique device identifiers</li>
                      <li>Other diagnostic data</li>
                    </ul>
                  </div>
                </section>

                <section id="use-of-data">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use of Data</h2>
                  <div className="space-y-4 text-gray-600">
                    <p> <Link href="/" className='hover:underline'>Jia Pixel</Link> uses the collected data for various purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To provide and maintain our service</li>
                      <li>To notify you about changes to our service</li>
                      <li>To allow you to participate in interactive features</li>
                      <li>To provide customer support</li>
                      <li>To gather analysis or valuable information to improve our service</li>
                      <li>To monitor the usage of our service</li>
                      <li>To detect, prevent and address technical issues</li>
                    </ul>
                  </div>
                </section>

                <section id="data-protection">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FiLock className="mr-2" /> 3. Data Protection
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
                    <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
                    <h3 className="font-semibold text-gray-800 mt-4">Data Retention</h3>
                    <p>We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
                  </div>
                </section>

                <section id="data-sharing">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Sharing</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We may share your personal data in the following situations:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Service Providers:</strong> With third-party companies and individuals to facilitate our service</li>
                      <li><strong>Business Transfers:</strong> In connection with any merger or sale of company assets</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to respond to valid legal process</li>
                    </ul>
                    <p>We do not sell your personal data to third parties.</p>
                  </div>
                </section>

                <section id="your-rights">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Rights</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Depending on your location, you may have certain rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Access:</strong> Request copies of your personal data</li>
                      <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                      <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                      <li><strong>Restriction:</strong> Request restriction of processing</li>
                      <li><strong>Objection:</strong> Object to our processing of your data</li>
                      <li><strong>Portability:</strong> Request transfer of your data</li>
                      <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the information below.</p>
                  </div>
                </section>

                <section id="cookies">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information.</p>
                    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
                    <h3 className="font-semibold text-gray-800 mt-4">Types of Cookies We Use</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Essential Cookies:</strong> Necessary for the website to function</li>
                      <li><strong>Performance Cookies:</strong> Help us understand how visitors interact</li>
                      <li><strong>Functionality Cookies:</strong> Remember choices you make</li>
                      <li><strong>Targeting Cookies:</strong> Used to deliver relevant ads</li>
                    </ul>
                  </div>
                </section>

                <section id="changes">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Changes to This Policy</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                  </div>
                </section>

                <section id="contact">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FiMail className="mr-2" /> 8. Contact Us
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>By email:</strong> mail.jiapixel@gmail.com</li>
                      <li><strong>By mail:</strong> 69, Nabokalosh, Matlobgoj 3640, Matlab, Chandpur</li>
                      <li><strong>By phone:</strong> <Link href="https://wa.me/8801919011101">+8801919011101</Link></li>
                    </ul>
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
            By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;