"use client";
import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaArrowUp } from 'react-icons/fa';
import Logo from '../Logo';
import Link from 'next/link';
import Contact from '../Contact';
import SocialIcon from '../SocialIcon';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    
    return (
        <footer className="bg-[#130f28] text-gray-400 pt-20" suppressHydrationWarning>
            <div className="container mx-auto px-6">
                {/* Top Section with Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Column 1: Logo and Social */}
                    <div className="mb-6 lg:mb-0">
                        <Logo />
                        <br />
                        <Contact />
                        <SocialIcon />
                    </div>

                    {/* Column 3: Our Company */}
                    <div>
                        <h4 className="font-bold text-white uppercase mb-5">Our Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/terms-and-conditions" className="hover:text-purple-600 transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-purple-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/faq" className="hover:text-purple-600 transition-colors">FAQ</Link></li>
                            <li><Link href="/return-policy" className="hover:text-purple-600 transition-colors">Return Policy</Link></li>
                            <li><Link href="/mission-vision" className="hover:text-purple-600 transition-colors">Mission & Vision</Link></li>
                        </ul>
                    </div>
                    
                    {/* Column 2: My Account */}
                    <div>
                        <h4 className="font-bold text-white uppercase mb-5">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Mobile Development</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">SEO Optimization</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors">PPC Advertising</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="font-bold text-white uppercase mb-5">Newsletter</h4>
                        <p className="text-sm leading-relaxed mb-4">
                            Get exclusive updates, offers, and content directly to your inbox.
                        </p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your email address"
                                className="w-full bg-gray-700 text-white px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                suppressHydrationWarning
                            />
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-r-md transition-colors"
                                aria-label="Subscribe"
                            >
                                <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-10 py-6 flex flex-col items-center text-sm">
                    <p className="mb-4 sm:mb-0">Copyrighted by @JiaPixel | All Right Reserved</p>
                </div>
            </div>
            
            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-md flex items-center justify-center transition-opacity duration-300"
                    aria-label="Scroll to top"
                    suppressHydrationWarning
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </footer>
    );
};

export default Footer;