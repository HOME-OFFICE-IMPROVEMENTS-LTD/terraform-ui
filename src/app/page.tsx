// src/app/page.tsx
"use client";

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { 
  Server, 
  Users, 
  Package, 
  AlertCircle,
  Search
} from 'lucide-react';

export default function DashboardPage() {
  // Mock data - will be replaced with real data later
  const metrics = [
    { title: 'Active Resources', value: '24', icon: <Server className="w-8 h-8 text-blue-500" /> },
    { title: 'Active Customers', value: '12', icon: <Users className="w-8 h-8 text-green-500" /> },
    { title: 'Terraform Modules', value: '8', icon: <Package className="w-8 h-8 text-purple-500" /> },
    { title: 'Pending Actions', value: '3', icon: <AlertCircle className="w-8 h-8 text-orange-500" /> }
  ];

  const recentModules = [
    { name: 'azure-vnet', type: 'Network', lastUsed: '2 days ago' },
    { name: 'azure-vm', type: 'Compute', lastUsed: '1 day ago' },
    { name: 'azure-storage', type: 'Storage', lastUsed: '5 days ago' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Partner Dashboard</h1>
        
        {/* Search bar for Terraform Registry */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Terraform Registry..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
          />
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                {metric.icon}
                <div>
                  <p className="text-sm text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Terraform Modules */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Terraform Modules</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentModules.map((module, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{module.name}</p>
                      <p className="text-sm text-gray-500">{module.type}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{module.lastUsed}</span>
                </div>
              ))}
              <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                View All Modules →
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Terraform Registry Integration */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Terraform Registry</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Popular Azure Modules</h3>
                <button className="text-sm text-blue-500 hover:text-blue-600">Browse Registry</button>
              </div>
              <div className="space-y-2">
                {/* This will be populated with real registry data later */}
                <div className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Azure VM</p>
                      <p className="text-sm text-gray-500">By Microsoft</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified</span>
                  </div>
                </div>
                <div className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Azure AKS</p>
                      <p className="text-sm text-gray-500">By Microsoft</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
