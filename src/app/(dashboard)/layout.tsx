import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    
    // Define navigation items
    const navItems = [
        { href: '/admin-dashboard', label: 'Dashboard' },
        { href: '/admin-dashboard/services', label: 'Manage Services' },
        // Add other navigation items as needed
    ];
    
    return (
        <div className="grid grid-cols-12 min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="col-span-3 bg-white shadow-md">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Admin Panel</h2>
                    <nav>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href}
                                        className={`block px-4 py-3 rounded-lg transition-colors ${
                                            pathname === item.href 
                                                ? 'bg-blue-600 text-white' 
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="col-span-9 p-8">
                {children}
            </div>
        </div>
    );
};

export default Layout;