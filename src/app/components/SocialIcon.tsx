import React from 'react';
import { FaFacebookF, FaGithub, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const SocialIcon = () => {
    return (
        <div className="flex space-x-4 mt-6">
            <Link
                href="https://www.facebook.com/jiapixel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
                <FaFacebookF className="text-white" />
            </Link>
            <Link
                href="https://github.com/MdImranHossen01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
                <FaGithub className="text-white" />
            </Link>
            <Link
                href="https://www.youtube.com/@JiaPixel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
                <FaYoutube className="text-white" />
            </Link>
            <Link
                href="https://www.linkedin.com/company/jiapixel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
                <FaLinkedinIn className="text-white" />
            </Link>

        </div>
    );
};

export default SocialIcon;