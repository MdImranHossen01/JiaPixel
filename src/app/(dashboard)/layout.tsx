// src/app/(dashboard)/layout.tsx
import Link from 'next/link';
import React from 'react';
import Navigation from '@/app/components/Navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="grid grid-cols-12">
                {/* Sidebar content */}
                <div className="col-span-3 bg-white shadow-md h-screen sticky top-0">
                    <div className="p-4 border-b">
                        <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
                    </div>
                    <Navigation />
                </div>
                
                {/* Main content */}
                <div className="col-span-9 p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;