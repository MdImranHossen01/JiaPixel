import Link from 'next/link';
import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact: React.FC = () => {
    return (
        <div className="space-y-1 text-gray-600">
            <div className="flex items-start">
                <FiMapPin className="flex-shrink-0 h-5 w-5 text-purple-600 mr-3 mt-1" />
                <span>69, Nabokalosh, Matlabgonj-3640, Matlab, Chandpur</span>
            </div>
            
            <a href="mailto:mail.jiapixel@gmail.com" className="flex items-center hover:text-purple-600">
                <FiMail className="flex-shrink-0 h-5 w-5 text-purple-600 mr-3" />
                <span>mail.jiapixel@gmail.com</span>
            </a>
            
            <Link href="https://wa.me/8801919011101" className="flex items-center hover:text-purple-600">
                <FiPhone className="flex-shrink-0 h-5 w-5 text-purple-600 mr-3" />
                <span>+880 1919-011101</span>
            </Link>
        </div>
    );
};

export default Contact;