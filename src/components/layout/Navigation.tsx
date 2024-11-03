"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  Settings, 
  Users, 
  Server,
  LayoutDashboard,
  Shield
} from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/',
      icon: <HomeIcon className="w-4 h-4" />
    },
    {
      title: 'Resources',
      path: '/routes/resources',
      icon: <Server className="w-4 h-4" />
    },
    {
      title: 'Customers',
      path: '/routes/customers',
      icon: <Users className="w-4 h-4" />
    },
    {
      title: 'Security',
      path: '/routes/security',
      icon: <Shield className="w-4 h-4" />
    },
    {
      title: 'Settings',
      path: '/admin/settings',
      icon: <Settings className="w-4 h-4" />
    }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="h-16 border-b px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-xl">Terraform UI</span>
        </div>
      </div>
      <div className="fixed left-0 top-16 h-full w-64 border-r bg-white p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
