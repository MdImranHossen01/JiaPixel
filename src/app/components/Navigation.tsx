// Create a new client component: src/app/components/Navigation.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900';
  };

  return (
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
  );
};

export default Navigation;