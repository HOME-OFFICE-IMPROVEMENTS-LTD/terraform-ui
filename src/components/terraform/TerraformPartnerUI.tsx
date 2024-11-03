"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  PlayCircle, 
  Cloud, 
  Server
} from 'lucide-react';

const TerraformPartnerUI = () => {
  const [activeTab, setActiveTab] = useState('credentials');
  const [config, setConfig] = useState({
    // Azure Credentials
    subscriptionId: '',
    tenantId: '',
    clientId: '',
    clientSecret: '',
    // Partner Info
    partnerTenantId: '',
    mpnId: '',
    customerName: '',
    // VM Config
    prefix: 'myvm',
    location: 'eastus',
    vmSize: 'Standard_D2s_v3',
    osType: 'ubuntu2204',
    // Developer Tools
    installDocker: false,
    installVSCode: false,
    installGit: false,
    installNodejs: false,
    installPython: false,
    // User Software
    installChrome: false,
    installSlack: false,
    installZoom: false
  });

  const locations = [
    { value: 'eastus', label: 'East US' },
    { value: 'westus', label: 'West US' },
    { value: 'northeurope', label: 'North Europe' },
    { value: 'westeurope', label: 'West Europe' }
  ];

  const vmSizes = [
    { value: 'Standard_B1s', label: 'Basic (1 vCPU, 1GB RAM)' },
    { value: 'Standard_B2s', label: 'Standard (2 vCPU, 4GB RAM)' },
    { value: 'Standard_D2s_v3', label: 'Performance (2 vCPU, 8GB RAM)' }
  ];

  const operatingSystems = [
    { value: 'ubuntu2204', label: 'Ubuntu 22.04 LTS' },
    { value: 'ubuntu2004', label: 'Ubuntu 20.04 LTS' },
    { value: 'debian11', label: 'Debian 11' },
    { value: 'debian10', label: 'Debian 10' }
  ];

  const handleChange = (field, value) => {
    setConfig(prev => ({...prev, [field]: value}));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'credentials':
        return (
          <Card className="p-6">
            <h2 className="text-lg font-bold flex items-center mb-4">
              <Cloud className="w-4 h-4 mr-2" />
              Azure Credentials
            </h2>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                placeholder="Subscription ID"
                value={config.subscriptionId}
                onChange={(e) => handleChange('subscriptionId', e.target.value)}
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Tenant ID"
                value={config.tenantId}
                onChange={(e) => handleChange('tenantId', e.target.value)}
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Client ID"
                value={config.clientId}
                onChange={(e) => handleChange('clientId', e.target.value)}
              />
              <input
                type="password"
                className="w-full p-2 border rounded"
                placeholder="Client Secret"
                value={config.clientSecret}
                onChange={(e) => handleChange('clientSecret', e.target.value)}
              />
            </div>
          </Card>
        );

      case 'partner':
        return (
          <Card className="p-6">
            <h2 className="text-lg font-bold mb-4">Partner Information</h2>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                placeholder="Partner Tenant ID"
                value={config.partnerTenantId}
                onChange={(e) => handleChange('partnerTenantId', e.target.value)}
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Microsoft Partner Network ID"
                value={config.mpnId}
                onChange={(e) => handleChange('mpnId', e.target.value)}
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Customer Name"
                value={config.customerName}
                onChange={(e) => handleChange('customerName', e.target.value)}
              />
            </div>
          </Card>
        );

      case 'vm':
        return (
          <Card className="p-6">
            <h2 className="text-lg font-bold flex items-center mb-4">
              <Server className="w-4 h-4 mr-2" />
              VM Configuration
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">VM Name Prefix</label>
                <input
                  className="w-full p-2 border rounded"
                  value={config.prefix}
                  onChange={(e) => handleChange('prefix', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Operating System</label>
                <select
                  className="w-full p-2 border rounded"
                  value={config.osType}
                  onChange={(e) => handleChange('osType', e.target.value)}
                >
                  {operatingSystems.map(os => (
                    <option key={os.value} value={os.value}>{os.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <select
                  className="w-full p-2 border rounded"
                  value={config.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                >
                  {locations.map(loc => (
                    <option key={loc.value} value={loc.value}>{loc.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">VM Size</label>
                <select
                  className="w-full p-2 border rounded"
                  value={config.vmSize}
                  onChange={(e) => handleChange('vmSize', e.target.value)}
                >
                  {vmSizes.map(size => (
                    <option key={size.value} value={size.value}>{size.label}</option>
                  ))}
                </select>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Software Installation</h3>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Developer Tools</h4>
                  <div className="space-y-2">
                    {[
                      ['Docker', 'installDocker', 'Container platform for applications'],
                      ['VS Code Server', 'installVSCode', 'Browser-based code editor'],
                      ['Git', 'installGit', 'Version control system'],
                      ['Node.js', 'installNodejs', 'JavaScript runtime environment'],
                      ['Python', 'installPython', 'Python 3 with pip and venv']
                    ].map(([label, key, description]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium">{label}</label>
                          <p className="text-xs text-gray-500">{description}</p>
                        </div>
                        <Switch
                          checked={config[key]}
                          onCheckedChange={(checked) => handleChange(key, checked)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">General Software</h4>
                  <div className="space-y-2">
                    {[
                      ['Google Chrome', 'installChrome', 'Web browser'],
                      ['Slack', 'installSlack', 'Team communication platform'],
                      ['Zoom', 'installZoom', 'Video conferencing software']
                    ].map(([label, key, description]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium">{label}</label>
                          <p className="text-xs text-gray-500">{description}</p>
                        </div>
                        <Switch
                          checked={config[key]}
                          onCheckedChange={(checked) => handleChange(key, checked)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-6">
      <nav className="flex space-x-2 mb-6">
        <button
          className={`p-4 ${activeTab === 'credentials' ? 'bg-blue-100 rounded' : ''}`}
          onClick={() => setActiveTab('credentials')}
        >
          Credentials
        </button>
        <button
          className={`p-4 ${activeTab === 'partner' ? 'bg-blue-100 rounded' : ''}`}
          onClick={() => setActiveTab('partner')}
        >
          Partner Info
        </button>
        <button
          className={`p-4 ${activeTab === 'vm' ? 'bg-blue-100 rounded' : ''}`}
          onClick={() => setActiveTab('vm')}
        >
          VM Config
        </button>
      </nav>

      {renderContent()}

      <Button 
        className="w-full mt-6"
        onClick={() => console.log('Deployment config:', config)}
      >
        <PlayCircle className="w-4 h-4 mr-2" />
        Deploy VM
      </Button>
    </div>
  );
};

export default TerraformPartnerUI;
