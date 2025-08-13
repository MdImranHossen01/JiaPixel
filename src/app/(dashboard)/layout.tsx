"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    
    const isActive = (path: string) => {
        return pathname === path ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="grid grid-cols-12">
                {/* Sidebar content */}
                <div className="col-span-3 bg-white shadow-md h-screen sticky top-0">
                    <div className="p-4 border-b">
                        <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
                    </div>
                    <nav className="mt-5 px-2">
                        <Link 
                            href="/admin-dashboard" 
                            className={`group flex items-center px-4 py-2 text-sm font-medium rounded-md ${isActive('/admin-dashboard')}`}
                        >
                            Dashboard
                        </Link>
                        <Link 
                            href="/admin-dashboard/services" 
                            className={`mt-1 group flex items-center px-4 py-2 text-sm font-medium rounded-md ${isActive('/admin-dashboard/services')}`}
                        >
                            Manage Services
                        </Link>
                        {/* Add more navigation links as needed */}
                    </nav>
                </div>
                
                {/* Main content */}
                <div className="col-span-9 p-6" suppressHydrationWarning>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;