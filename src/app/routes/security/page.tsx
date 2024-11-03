import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Security</h1>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Security Management</h2>
        </CardHeader>
        <CardContent>
          <p>Security management content will go here.</p>
          <p className="text-gray-500 mt-2">Coming soon:
            <ul className="list-disc ml-5 mt-2">
              <li>Role Management</li>
              <li>Access Controls</li>
              <li>Security Policies</li>
              <li>Audit Logs</li>
            </ul>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
