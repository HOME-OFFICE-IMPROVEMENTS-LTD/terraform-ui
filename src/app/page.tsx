import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Overview</h2>
        </CardHeader>
        <CardContent>
          <p>Welcome to Terraform UI Partner Portal</p>
          <p className="text-gray-500 mt-2">Quick links:
            <ul className="list-disc ml-5 mt-2">
              <li>Resource Management</li>
              <li>Customer Management</li>
              <li>Security Settings</li>
              <li>Configuration</li>
            </ul>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
