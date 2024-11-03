// src/app/admin/settings/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface AuthSettings {
  clientId: string;
  clientSecret: string;
  tenantId: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<AuthSettings>({
    clientId: '',
    clientSecret: '',
    tenantId: ''
  });

  const [isConfigured, setIsConfigured] = useState(false);

  // Load existing settings
  useEffect(() => {
    // Check if settings exist in secure storage
    const checkConfiguration = async () => {
      const response = await fetch('/api/settings/auth');
      if (response.ok) {
        const data = await response.json();
        setIsConfigured(true);
        // Only show masked values
        setSettings({
          clientId: maskValue(data.clientId),
          clientSecret: '••••••••',
          tenantId: maskValue(data.tenantId)
        });
      }
    };
    checkConfiguration();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Save to secure storage
    const response = await fetch('/api/settings/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings)
    });
    
    if (response.ok) {
      setIsConfigured(true);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Azure AD Configuration</h2>
        <p className="text-gray-500">Configure your Azure AD authentication settings</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Client ID</label>
            <input
              type="text"
              value={settings.clientId}
              onChange={(e) => setSettings({...settings, clientId: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Client Secret</label>
            <input
              type="password"
              value={settings.clientSecret}
              onChange={(e) => setSettings({...settings, clientSecret: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tenant ID</label>
            <input
              type="text"
              value={settings.tenantId}
              onChange={(e) => setSettings({...settings, tenantId: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {isConfigured ? 'Update Configuration' : 'Save Configuration'}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function maskValue(value: string): string {
  if (!value) return '';
  return `${value.substring(0, 4)}...${value.slice(-4)}`;
}
